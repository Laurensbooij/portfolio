import React, { FC } from 'react'

import { aboutMeDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import SectionTitle from 'components/atoms/SectionTitle'
import PersonalIntroductionCard from './PersonalIntroductionCard'
import AboutMeContentCard from './AboutMeContentCard'
import GridContainer from 'components/atoms/GridContainer'

interface aboutMeSectionProps {
  aboutMeData: aboutMeDataProps,
}

const AboutMeSection: FC<aboutMeSectionProps> = ({ aboutMeData }) => {

  const {
    ambitionsContent,
    ambitionsIcon,
    ambitionsTitle,
    name,
    personalIntroduction,
    personalPhoto,
    personalValuesContent,
    personalValuesIcon,
    personalValuesTitle,
    subtitle,
  } = aboutMeData
  

  return (
    <section>
      <SectionTitle>About me</SectionTitle>
      <GridContainer>
        <PersonalIntroductionCard 
          title={name}
          subtitle={subtitle}
          text={personalIntroduction.content[0].content[0].value}
          imageSrc={personalPhoto.fields.file.url}
        />
        <AboutMeContentCard
          iconUrl={personalValuesIcon.fields.file.url}
          title={personalValuesTitle}
          textContent={personalValuesContent.content}
        />
        <AboutMeContentCard
          iconUrl={ambitionsIcon.fields.file.url}
          title={ambitionsTitle}
          textContent={ambitionsContent.content}
        />
      </GridContainer>
    </section>
  )
}

export default AboutMeSection