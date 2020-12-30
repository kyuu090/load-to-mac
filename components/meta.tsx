import Head from 'next/head'
import { SITE_NAME } from '../lib/util'

const Meta = () => {
  return (
    <Head>
      <meta name="og:title" content={SITE_NAME} />
      <title>{SITE_NAME}</title>
    </Head>
  )
}

export default Meta
