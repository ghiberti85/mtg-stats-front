import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { StatsFilterProvider } from '@/context/StatsFilterContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StatsFilterProvider>
      <Component {...pageProps} />
    </StatsFilterProvider>
  )
}
