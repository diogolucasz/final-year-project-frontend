import axios, { AxiosError } from 'axios';
import { parseCookies, setCookie } from 'nookies';
import { signOut } from '../context/AuthContext';
import { AuthTokenError } from '../errors/AuthTokenError';

let isRefreshing = false;
let failedRequestsQueue = [];

export function setupAPIClient(ctx = undefined) {

    let cookies = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'http://localhost:3333',
        headers: {
            Authorization: `Bearer ${cookies['fyp.token']}`
        }
    })
    
    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError) => {
    
        if (error.response?.status === 401) {
    
            if (error.response.data?.message === 'Invalid token!') {
    
                console.log('entrou aqui')
                cookies = parseCookies(ctx);
    
                const { 'fyp.refresh_token': oldToken } = cookies
                // const { 'fyp.token': token } = cookies

                // console.log(refreshToken)
    
                const originalConfig = error.config;
    
                if (!isRefreshing) {
    
                    isRefreshing = true;
    
                    api.post('/refresh-token', {
                        token: oldToken,

                    }).then(response => {
    
                        // console.log(response)

                        const { token, refresh_token } = response.data;
    
                        setCookie(ctx, 'fyp.token', token, {
                            maxAge: 60 * 60 * 24 * 30, // 30 days
                            path: '/',
                        });
    
                        setCookie(ctx, 'fyp.refresh_token', refresh_token, {
                            maxAge: 60 * 60 * 24 * 30, // 30 days
                            path: '/',
                        });
    
                        api.defaults.headers['Authorization'] = `Bearer + ${token}`
    
                        failedRequestsQueue.forEach(request => request.resolve(token));
                        failedRequestsQueue = [];
    
                    }).catch(error => {
    
                        failedRequestsQueue.forEach(request => request.reject(error));
                        failedRequestsQueue = [];
    
                        console.log(error)

                        if (process.browser) {
                            signOut();
                        }
    
                    }).finally(() => {
    
                        isRefreshing = false;
                        
                    })
                }
    
                return new Promise((resolve, reject) => {
    
                    failedRequestsQueue.push({
                        resolve: (token: string) => {
    
                            originalConfig.headers['Authorization'] = `Bearer ${token}`
    
                            resolve(api(originalConfig))
                        },
                        reject: (error: AxiosError) => {
                            reject(error)
                        }
                    })
                })
    
            } else {
                if (process.browser) {
                    signOut();
                }else{
                    return Promise.reject(new AuthTokenError())
                }
            }
        }
    
        return Promise.reject(error);
    })

    return api;
}