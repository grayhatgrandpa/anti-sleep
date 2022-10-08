import './globals.scss'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// components
import Head from '../components/Head'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head />
            <ToastContainer />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
