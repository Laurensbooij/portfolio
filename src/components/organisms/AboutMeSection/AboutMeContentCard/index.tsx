import React, { FC } from 'react'

import CardContainer from 'components/atoms/CardContainer'

import { TitleContainer, IconContainer, Icon, Title, Text } from './styled'

interface aboutMeContentProps {
  iconUrl: any,
  title: string,
  text: string,
}

const AboutMeContent: FC<aboutMeContentProps> = ({ iconUrl, title, text }) => (
  <CardContainer>
    <TitleContainer>
      <IconContainer>
        <Icon iconUrl={iconUrl} />
      </IconContainer>
      <Title>{title}</Title>
    </TitleContainer>
    <Text>{text}</Text>
  </CardContainer>
)

export default AboutMeContent