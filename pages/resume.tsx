import { useContext, useEffect } from 'react'

import type { NextPageWithLayout } from './_app'
import type { ReactElement } from 'react'

import client from 'services/getClient'

import { Entry } from 'contentful'
import { educationExperienceDataProps, workExperienceDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import Layout from 'components/layouts/standardLayout'

import { useNavToggleContext } from 'contexts/NavToggleContext'

import Head from 'next/head'

import CtaSection from 'components/molecules/CtaSection'
import ResumeSection from 'components/organisms/ResumeSection'

export async function getStaticProps() {
  const workExperienceRes = await client.getEntries({ content_type: "workExperience" })
  const educationExperienceRes = await client.getEntries({ content_type: "educationExperience" })

  return {
    props: {
      workExperienceData: workExperienceRes.items,
      educationExperienceData: educationExperienceRes.items,
    }
  }
}

interface resumeProps {
  workExperienceData: Entry<workExperienceDataProps>[],
  educationExperienceData: Entry<educationExperienceDataProps>[]
}

const Resume: NextPageWithLayout<resumeProps> = ({ workExperienceData, educationExperienceData }) => {
  const { setToggleVisibility, setToggleContent } = useNavToggleContext()

  const toggleLabelLeft = 'Work'
  const toggleLabelRight = 'Education'

  useEffect(() => {
    setToggleVisibility('SHOW')
    setToggleContent('SET', { leftLabel: toggleLabelLeft, rightLabel: toggleLabelRight })
    return () => {
      setToggleVisibility('HIDE')
    }
  },[])

  return (
  <>
    <Head>
      <title>Laurens Booij</title>
      <meta name="description" content="About me page about Laurens Booij" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ResumeSection 
      workExperienceData={workExperienceData}
      educationExperienceData={educationExperienceData}
    />
    <CtaSection 
      title="Curious about my work?"
      buttonText="Take a look at my portolio"
      href="/portfolio"
    />
  </>
  )
}

Resume.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Resume