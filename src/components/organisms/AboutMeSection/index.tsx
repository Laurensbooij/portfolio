import React, { FC } from 'react'

import SectionTitle from 'components/atoms/SectionTitle'
import PersonalIntroductionCard from './PersonalIntroductionCard'
import AboutMeContentCard from './AboutMeContentCard'
import GridContainer from 'components/atoms/GridContainer'

import { Container } from './styled'

import compassIcon from "media/icons/icon-compass.png"

interface aboutMeSectionProps {

}

const AboutMeSection: FC<aboutMeSectionProps> = (  ) => {

  return (
    <Container>
      <SectionTitle>About me</SectionTitle>
      <GridContainer>
        <PersonalIntroductionCard />
        <AboutMeContentCard
          iconUrl={compassIcon.src}
          title="Values"
          text="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet"
        />
        <AboutMeContentCard
          iconUrl={compassIcon.src}
          title="Ambitions"
          text="Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet"
        />
      </GridContainer>
    </Container>
  )
}

export default AboutMeSection