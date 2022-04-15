import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { destroyCookie, parseCookies } from "nookies";
import { AuthTokenError } from "../errors/AuthTokenError";
import decode from 'jwt-decode';
import { validatePermissions } from "./validatePermissions";

interface withSSRAuthOptions {
    permissions?: string[],
    roles?: string[],
}


export function withSSRAuth<P>(fn: GetServerSideProps<P>, options?: withSSRAuthOptions) {

    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {

        const cookies = parseCookies(ctx);
        const token = (cookies['fyp.token'])

        if (!token) {

            return {
                redirect: {
                    destination: '/signin',
                    permanent: false,
                }
            }
        }

        if (options) {
            const user = decode<{ permissions: string[], roles: string[] }>(token);
            const { permissions, roles } = options;

            const userHasPermissions = validatePermissions({ user, permissions, roles })

            if (!userHasPermissions) {
                return{
                    redirect: {
                        destination: '/dashboard',
                        permanent: false,
                    }
                }
            }
        }

        try {

            return await fn(ctx);

        } catch (error) {

            if (error instanceof AuthTokenError) {

                destroyCookie(ctx, 'fyp.token');
                destroyCookie(ctx, 'fyp.refreshToken');

                return {
                    redirect: {

                        destination: '/',
                        permanent: false,
                    }
                }
            }
        }
    }
}