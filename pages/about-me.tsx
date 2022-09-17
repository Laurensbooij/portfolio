import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

import client from 'services/getClient'

import Head from 'next/head'

import { aboutMeDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import Layout from 'components/layouts/standardLayout'

import AboutMeSection from 'components/organisms/AboutMeSection'
import SkillsetSection from 'components/organisms/SkillsetSection'
import CtaSection from 'components/molecules/CtaSection'

export async function getStaticProps() {

  const res = await client.getEntries<aboutMeDataProps>({ content_type: "aboutMe" })

  return {
    props: {
      aboutMeData: res.items[0].fields
    }
  }
}

interface aboutMeProps {
  aboutMeData: any,
}

const AboutMe: NextPageWithLayout<aboutMeProps> = ({ aboutMeData }) => (
  <>
    <Head>
      <title>Laurens Booij</title>
      <meta name="description" content="About me page about Laurens Booij" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AboutMeSection data={aboutMeData} />
    <SkillsetSection/>
    <CtaSection 
      title="Curious about my experience and education?"
      buttonText="Take a look at my resume"
      href="/resume"
    />
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