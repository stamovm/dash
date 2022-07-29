import '../styles/globals.css'
import type { AppType } from 'next/dist/shared/lib/utils'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from '../components/Layout'

const MyApp: AppType = ({ Component, pageProps }) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Layout title="Dash">
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default MyApp
