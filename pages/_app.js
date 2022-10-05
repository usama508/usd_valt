import Layout from '../Components/Layout'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import {ReactQueryDevtools} from "react-query/devtools"


function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()

  return (
    <>
      <Layout>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools position='bottom-left'/></QueryClientProvider>
      </Layout>
    </>

  )
}
export default MyApp








