import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

import Head from 'next/head'

import Layout from 'components/layouts/standardLayout'

import AboutMeSection from 'components/organisms/AboutMeSection'
import SkillsetSection from 'components/organisms/SkillsetSection'
import CtaSection from 'components/molecules/CtaSection'


const AboutMe: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Laurens Booij</title>
      <meta name="description" content="About me page about Laurens Booij" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AboutMeSection />
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