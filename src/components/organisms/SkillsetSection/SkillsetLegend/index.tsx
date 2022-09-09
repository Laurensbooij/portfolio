import React, { FC } from 'react'

import SkillLabel from '../SkillLabel'

import CardContainer from 'components/atoms/CardContainer'

import { TextContainer, Title, Text, LegendContainer } from './styled'

interface skillsetLegendProps {

}

const SkillsetLegend: FC<skillsetLegendProps> = (  ) => (
  <CardContainer fullWidth>
    <TextContainer>
      <Title>Legend</Title>
      <Text>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet</Text>
    </TextContainer>
    <LegendContainer>
      <SkillLabel
        label="Basic knowledge / skills"
        skillLevel={1}
      />
      <SkillLabel
        label="Advanced knowledge / skills"
        skillLevel={2}
      />
      <SkillLabel
        label="One of my strong points"
        skillLevel={3}
      />
    </LegendContainer>
  </CardContainer>
)

export default SkillsetLegend