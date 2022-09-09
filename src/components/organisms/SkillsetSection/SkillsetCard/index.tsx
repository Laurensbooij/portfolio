import React, { FC } from 'react'

import CardContainer from 'components/atoms/CardContainer'
import SkillLabel from '../SkillLabel'

import { TextContainer, Title, Subtitle, SkillsContainer } from './styled'

const SkillsetCard = (  ) => (
  <CardContainer>
    <TextContainer>
      <Title>Front-end development</Title>
      <Subtitle>Tools: Visual Studio Code, Git, CLI, React.js, Next.js</Subtitle>
    </TextContainer>
    <SkillsContainer>
      <SkillLabel 
        label="HTML/CSS"
        skillLevel={3}
      />
      <SkillLabel 
        label="Javascript"
        skillLevel={3}
      />
      <SkillLabel 
        label="React"
        skillLevel={3}
        annotation="Experience with ..."
      />
      <SkillLabel 
        label="Next.js"
        skillLevel={2}
      />
      <SkillLabel 
        label="Typescript"
        skillLevel={2}
      />
    </SkillsContainer>
  </CardContainer>
)

export default SkillsetCard 