import { GlobalStyle } from '../styles/globalStyles';
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/AuthContext'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <GlobalStyle />
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
    </>
  )
}

export default MyApp
