import { GlobalStyle } from '../styles/globalStyles';
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/AuthContext'


import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={5000} />
      <>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </>
    </>
  )
}

export default MyApp
