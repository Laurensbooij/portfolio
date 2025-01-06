import React, { FC } from 'react'

import { Entry } from 'contentful'
import { skillsetLegendDataProps, skillsetDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import SectionTitle from 'components/atoms/SectionTitle'
import GridContainer from 'components/atoms/GridContainer'
import SkillsetCard from './SkillsetCard'

import { Container } from './styled'


interface skillsetSectionProps {
  legendData: skillsetLegendDataProps,
  skillsetData: Entry<skillsetDataProps>[],
}

const SkillsetSection: FC<skillsetSectionProps> = ({ legendData, skillsetData }) => {

  const sortedSkillsetData = skillsetData.sort((a, b) => a.fields.order > b.fields.order ? 1 : -1)
  const skillsetCards = sortedSkillsetData.map((skillset) => (
    <SkillsetCard
      key={skillset.sys.id}
      data={skillset.fields}
    />
  ))

  return (
    <Container>
      <SectionTitle>My skillset</SectionTitle>
      <GridContainer>
        {skillsetCards}
      </GridContainer>
    </Container>
  )
}

export default SkillsetSection