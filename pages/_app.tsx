import '../src/styles/globals.css' // ou ajuste conforme o real path
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
