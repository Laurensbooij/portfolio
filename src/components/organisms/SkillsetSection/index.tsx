import React, { FC } from 'react'

import SectionTitle from 'components/atoms/SectionTitle'
import GridContainer from 'components/atoms/GridContainer'
import SkillsetLegend from './SkillsetLegend'
import SkillsetCard from './SkillsetCard'

import { Container } from './styled'


interface skillsetSectionProps {

}

const SkillsetSection: FC<skillsetSectionProps> = (  ) => {

  return (
    <Container>
      <SectionTitle>My skillset</SectionTitle>
      <GridContainer>
        <SkillsetLegend />
        <SkillsetCard />
        <SkillsetCard />
        <SkillsetCard />
        <SkillsetCard />
      </GridContainer>
    </Container>
  )
}

export default SkillsetSection