import { AppProps } from 'next/app'
import Meta from '../components/meta'
import HeaderComponent from '../components/header'

import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <HeaderComponent />
      <Component {...pageProps} />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
      </style>
    </>
  )
}
