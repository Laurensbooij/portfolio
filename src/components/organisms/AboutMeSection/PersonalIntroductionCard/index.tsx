import React, { FC } from 'react'

import { StyledCardContainer, Image, TextContainer, Title, Subtitle, Text } from './styled'

interface personalIntroductionProps {
  title: string,
  subtitle: string,
  text: string,
  imageSrc: string,
}

const PersonalIntroduction: FC<personalIntroductionProps> = ({ title, subtitle, text, imageSrc }) => (
  <StyledCardContainer fullWidth>
    <Image alt="Profile picture" src={imageSrc} />
    <TextContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Text>{text}</Text>
    </TextContainer>
  </StyledCardContainer>
)

export default PersonalIntroduction