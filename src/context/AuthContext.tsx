import Router from "next/router";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/apiClient";

interface IUser {
    id?: string,
    name: string,
    surname: string,
    email: string,
    permissions?: string[];
    roles?: string[];
}

interface SignInData {
    email: string;
    password: string;
}

interface AuthContextData {
    signIn: (data: SignInData) => Promise<void>;
    signOut: () => void;
    user: IUser;
    isAuthenticated: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

let authChannel: BroadcastChannel;

export function signOut() {

    destroyCookie(undefined, 'fyp.token')
    destroyCookie(undefined, 'fyp.refresh_token')

    authChannel.postMessage('signOut');

    Router.push('/signin')
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<IUser>();
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

        const { 'fyp.token': token } = parseCookies();

        if (token) {

            api.get('/users/me').then(response => {

                const { email, name, surname, permissions, roles } = response.data;

                setUser({ email,name, surname, permissions, roles })

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

            const { name, surname,token, refresh_token, permissions, roles } = response.data;

            setUser({
                email,
                name,
                surname,
                roles,
                permissions,
            })

            setCookie(undefined, 'fyp.token', token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
            });

            setCookie(undefined, 'fyp.refresh_token', refresh_token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/',
            });

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            Router.push('/feed')

        } catch (error) {
            toast.error(`Utilizador ou password incorretas`)
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
            {children}
        </AuthContext.Provider>
    )
}