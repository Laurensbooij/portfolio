import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

import client from 'services/getClient'

import { Entry } from 'contentful'
import { workExperienceDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import Layout from 'components/layouts/standardLayout'

import Head from 'next/head'

import CtaSection from 'components/molecules/CtaSection'
import ResumeSection from 'components/organisms/ResumeSection'

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "workExperience" })

  return {
    props: {
      workExperience: res.items
    }
  }
}

interface aboutMeProps {
  workExperience: Entry<workExperienceDataProps>[],
}

const AboutMe: NextPageWithLayout<aboutMeProps> = ({ workExperience }) => (
  <>
    <Head>
      <title>Laurens Booij</title>
      <meta name="description" content="About me page about Laurens Booij" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ResumeSection data={workExperience}/>
    <CtaSection 
      title="Curious about my work?"
      buttonText="Take a look at my portolio"
      href="/portfolio"
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