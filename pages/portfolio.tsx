import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

import client from 'services/getClient'

import { Entry } from 'contentful'
import { portfolioCaseDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import Layout from 'components/layouts/standardLayout'

import Head from 'next/head'

import PortfolioSection from 'components/organisms/PortolioSection'
import CtaSection from 'components/molecules/CtaSection'

export async function getStaticProps() {
  const PortfolioCasesRes = await client.getEntries({ content_type: "portfolioCase" })

  return {
    props: {
      portfolioCasesData: PortfolioCasesRes.items,
    }
  }
}

interface portfolioProps {
  portfolioCasesData: Entry<portfolioCaseDataProps>[],
}

const Portfolio: NextPageWithLayout<portfolioProps> = ({ portfolioCasesData }) => (
  <>
    <Head>
      <title>Laurens Booij</title>
      <meta name="description" content="About me page about Laurens Booij" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <PortfolioSection portfolioCasesData={portfolioCasesData} />
    <CtaSection 
      title="I’m available for work. Want to know more?"
      buttonText="Contact me"
      href="mailto:mail.laurensbooij@gmail.com"
    />
  </>
)

Portfolio.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Portfolio