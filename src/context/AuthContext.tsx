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
    signIn: (data: SignInData) => Promise<void>;
    signOut: () => void;
    user: User;
    isAuthenticated: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

let authChannel: BroadcastChannel;

export function signOut() {

    destroyCookie(undefined, 'token')
    destroyCookie(undefined, 'refreshToken')

    authChannel.postMessage('signOut');

    Router.push('/signin')
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<User>();
    const isAuthenticated = !!user;

    useEffect(() => {

        authChannel = new BroadcastChannel('auth');

        authChannel.onmessage = (message) => {

            switch (message.data) {
                case 'signOut':
                    signOut();
                    break;
                default:
                    break;
            }
        }
    }, [])

    useEffect(() => {

        const { 'token': token } = parseCookies();

        if (token) {

            api.get('/dsfds').then(response => {

                const { email, permissions, roles } = response.data;

                setUser({ email, permissions, roles })

            }).catch(() => {
                signOut();
            })
        }

    }, [])


    async function signIn({ email, password }: SignInData) {

        try {

            const response = await api.post('sessions', {
                email,
                password,
            })

            const { token, refreshToken, permissions, roles } = response.data;

            console.log(response.data)

            setUser({
                email,
                permissions,
                roles,
            })

            setCookie(undefined, 'token', token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
            });

            setCookie(undefined, 'refreshToken', refreshToken, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
            });

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            Router.push('/dashboard')

        } catch (error) {
            alert(`${error}`)
        }
    }


    return (
        <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
            {children}
        </AuthContext.Provider>
    )
}