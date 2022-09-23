import React, { FC } from 'react'

import { skillsetDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import CardContainer from 'components/atoms/CardContainer'
import SkillLabel from '../SkillLabel'

import { TextContainer, Title, Subtitle, SkillsContainer } from './styled'

interface skillsetCardProps {
  data: skillsetDataProps,
}

const SkillsetCard: FC<skillsetCardProps> = ({ data }) => {

  const {
    title,
    subtitle,
    skills,
  } = data

  const skillLabels = skills.map((skill) => (
    <SkillLabel 
      key={skill.sys.id}
      label={skill.fields.skillName}
      skillLevel={skill.fields.skillLevel}
      annotation={skill.fields.subtitle}
    />
  ))

  return (
    <CardContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextContainer>
      <SkillsContainer>
        {skillLabels}
      </SkillsContainer>
    </CardContainer>
  )
}

export default SkillsetCard 