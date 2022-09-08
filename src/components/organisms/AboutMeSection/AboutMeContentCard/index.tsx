import React, { FC } from 'react'

import { StyledCardContainer, TitleContainer, IconContainer, Icon, Title, Text } from './styled'

interface aboutMeContentProps {
  iconUrl: any,
  title: string,
  text: string,
}

const AboutMeContent: FC<aboutMeContentProps> = ({ iconUrl, title, text }) => (
  <StyledCardContainer>
    <TitleContainer>
      <IconContainer>
        <Icon iconUrl={iconUrl} />
      </IconContainer>
      <Title>{title}</Title>
    </TitleContainer>
    <Text>{text}</Text>
  </StyledCardContainer>
)

export default AboutMeContent