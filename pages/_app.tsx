import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from '../features/authentication/contex/AuthContext'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RequestProvider } from '../features/controllers/RequestContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider >
      <RequestProvider>
        <>
          <Component {...pageProps} />
          <ToastContainer />
        </>
      </RequestProvider>
    </AuthProvider>
  )
}
