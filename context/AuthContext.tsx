import Router from "next/router";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/apiClient";


interface User {
    email: string;
    permissions: string[];
    roles: string[];
}

interface SignInData {
    email: string;
    password: string;
}

interface AuthContextData {
    SignIn(data: SignInData): Promise<void>;
    user: User;
    isAuthenticated: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {

    destroyCookie(undefined, 'fyp.token')
    destroyCookie(undefined, 'fyp.refreshToken')

    Router.push('/signin')
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<User>();
    const isAuthenticated = !!user;

    useEffect(() => {

        const { 'fyp.token': token } = parseCookies();

        if (token) {

            api.get('/me').then(response => {

                const { email, permissions, roles } = response.data;

                setUser({ email, permissions, roles })

            }).catch(() => {

                signOut();

            })
        }

    }, [])


    async function SignIn({ email, password }: SignInData) {

        try {

            const response = await api.post('sessions', {
                email,
                password,
            })

            const { token, refreshToken, permissions, roles } = response.data;

            setUser({
                email,
                permissions,
                roles,
            })

            setCookie(undefined, 'fyp.token', token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
            });

            setCookie(undefined, 'fyp.refreshToken', refreshToken, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
            });

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            Router.push('/dashboard')

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ SignIn, isAuthenticated, user }}>
            {children}
        </AuthContext.Provider>
    )
}