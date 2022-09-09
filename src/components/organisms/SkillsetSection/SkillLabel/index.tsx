import React, { FC } from 'react'

import { Container, Label, IndicatorContainer, Indicator, Annotation } from './styled'

interface legendSkillLabelProps {
  label: string,
  skillLevel: number,
  fullWidth?: boolean,
  annotation?: string,
}

const LegensSkillLabel: FC<legendSkillLabelProps> = ({ label, skillLevel, annotation, fullWidth }) => (
  <Container fullWidth={fullWidth}>
    <Label>{label}</Label>
    <IndicatorContainer>
      <Indicator active />
      <Indicator active={skillLevel > 1} />
      <Indicator active={skillLevel > 2}/>
    </IndicatorContainer>
    {annotation && <Annotation>{annotation}</Annotation>}
  </Container>
)

export default LegensSkillLabel