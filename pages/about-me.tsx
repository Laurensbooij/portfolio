import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

import Layout from 'components/layouts/standardLayout'

import Head from 'next/head'
import Header from 'components/molecules/Header'

const AboutMe: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Laurens Booij</title>
      <meta name="description" content="About me page about Laurens Booij" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
)

AboutMe.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default AboutMe