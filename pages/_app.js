import Layout from '../components/layout'
import '../styles/globals.scss'
import {AnimatePresence} from "framer-motion"
 
function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout key={router.route}>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>

  )
}

export default MyApp
