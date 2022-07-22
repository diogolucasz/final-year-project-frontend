import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { destroyCookie, parseCookies } from "nookies";
import { AuthTokenError } from "../errors/AuthTokenError";
import decode from 'jwt-decode';
import { validatePermissions } from "./validatePermissions";

interface WithSSRAuthOptions {
    permissions: string[],
    roles: string[],
}

export function withSSRAuth<P>(fn: GetServerSideProps<P>, authParams?: WithSSRAuthOptions) {

    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {

        const cookies = parseCookies(ctx);
        const token = cookies['fyp.token'];

        if (!token) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                }
            }
        }

        if (authParams) {

            const user = decode<{ permissions: string[], roles: string[] }>(token);

            const { permissions, roles } = authParams

            const userHasValidPermissions = validatePermissions({
                user,
                permissions,
                roles
            })

            if (!userHasValidPermissions) {
                return {
                    redirect: {
                        destination: '/feed',
                        permanent: false,
                    }
                }
            }
        }

        try {

            return await fn(ctx)

        } catch (err) {

            if (err instanceof AuthTokenError) {

                destroyCookie(ctx, 'fyp.token')
                destroyCookie(ctx, 'fyp.refresh_token')

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