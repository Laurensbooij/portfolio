import React, { FC } from 'react'

import { aboutMeDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import SectionTitle from 'components/atoms/SectionTitle'
import PersonalIntroductionCard from './PersonalIntroductionCard'
import AboutMeContentCard from './AboutMeContentCard'
import GridContainer from 'components/atoms/GridContainer'

interface aboutMeSectionProps {
  data: aboutMeDataProps,
}

const AboutMeSection: FC<aboutMeSectionProps> = ({ data }) => {

  const {
    ambitionsContent,
    ambitionsIcon,
    ambitionsTitle,
    name,
    sectionTitle,
    personalIntroduction,
    personalPhoto,
    personalValuesContent,
    personalValuesIcon,
    personalValuesTitle,
    subtitle,
  } = data
  

  return (
    <section>
      <SectionTitle>{sectionTitle}</SectionTitle>
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
          text={personalValuesContent.content[0].content[0].value}
        />
        <AboutMeContentCard
          iconUrl={ambitionsIcon.fields.file.url}
          title={ambitionsTitle}
          text={ambitionsContent.content[0].content[0].value}
        />
      </GridContainer>
    </section>
  )
}

export default AboutMeSection