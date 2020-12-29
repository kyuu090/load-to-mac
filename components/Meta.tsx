import Head from 'next/head'

const Meta = () => {
  const MetaTitle = 'Load to Mac'
  return (
    <Head>
      <meta name="og:title" content={MetaTitle} />
      <title>{MetaTitle}</title>
    </Head>
  )
}

export default Meta
