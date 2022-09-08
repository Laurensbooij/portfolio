import React, { FC } from 'react'

import AboutMeContentCard from './AboutMeContentCard'
import PersonalIntroductionCard from './PersonalIntroductionCard'
import GridContainer from 'components/atoms/GridContainer'

import { Container, StyledH2 } from './styled'

import compassIcon from "media/icons/icon-compass.png"

interface aboutMeSectionProps {

}

const AboutMeSection: FC<aboutMeSectionProps> = (  ) => {

  return (
    <Container>
      <StyledH2>About me</StyledH2>
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