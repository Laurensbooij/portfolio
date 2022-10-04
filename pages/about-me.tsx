import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

import client from 'services/getClient'

import Head from 'next/head'

import { Entry } from 'contentful'
import { aboutMeDataProps, skillsetDataProps, skillsetLegendDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import Layout from 'components/layouts/standardLayout'

import AboutMeSection from 'components/organisms/AboutMeSection'
import SkillsetSection from 'components/organisms/SkillsetSection'
import CtaSection from 'components/molecules/CtaSection'

export async function getStaticProps() {

  const aboutMeRes = await client.getEntries<aboutMeDataProps>({ content_type: "aboutMe" })
  const skillsetLegendRes = await client.getEntries<skillsetLegendDataProps>({ content_type: "skillsetLegend" })
  const skillsetRes = await client.getEntries<skillsetDataProps>({ content_type: "skillset" })

  return {
    props: {
      aboutMeData: aboutMeRes.items[0].fields,
      skillsetLegendData: skillsetLegendRes.items[0].fields,
      skillsetData: skillsetRes.items,
    }
  }
}

interface aboutMeProps {
  aboutMeData: aboutMeDataProps,
  skillsetLegendData: skillsetLegendDataProps,
  skillsetData: Entry<skillsetDataProps>[],
}

const AboutMe: NextPageWithLayout<aboutMeProps> = ({ aboutMeData, skillsetLegendData, skillsetData}) => (
  <>
    <Head>
      <title>Laurens Booij</title>
      <meta name="description" content="About me page about Laurens Booij" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AboutMeSection aboutMeData={aboutMeData} />
    <SkillsetSection legendData={skillsetLegendData} skillsetData={skillsetData} />
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