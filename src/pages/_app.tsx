import { GlobalStyle } from '../styles/globalStyles';
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/AuthContext'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
