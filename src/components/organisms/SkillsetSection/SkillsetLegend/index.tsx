import React, { FC } from 'react'

import { skillsetLegendDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import CardContainer from 'components/atoms/CardContainer'
import RichText from 'components/atoms/RichText'
import SkillLabel from '../SkillLabel'

import { TextContainer, Title, LegendContainer } from './styled'

interface skillsetLegendProps {
  data: skillsetLegendDataProps,
}

const SkillsetLegend: FC<skillsetLegendProps> = ({ data }) => (
  <CardContainer fullWidth>
    <TextContainer>
      <Title>{data.legendTitle}</Title>
      <RichText content={data.textContent.content}/>
    </TextContainer>
    <LegendContainer>
      <SkillLabel
        label={data.legendLabel1}
        skillLevel={1}
      />
      <SkillLabel
        label={data.legendLabel2}
        skillLevel={2}
      />
      <SkillLabel
        label={data.legendLabel3}
        skillLevel={3}
      />
    </LegendContainer>
  </CardContainer>
)

export default SkillsetLegend