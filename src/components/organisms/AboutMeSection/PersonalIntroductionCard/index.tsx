import React, { FC } from 'react'

import PersonalInfo from './PersonalInfo'

import { StyledCardContainer, FlexContainer, Image, TextContainer, Title, Subtitle, Text } from './styled'

interface personalIntroductionProps {
  title: string,
  subtitle: string,
  text: string,
  imageSrc: string,
}

const PersonalIntroduction: FC<personalIntroductionProps> = ({ title, subtitle, text, imageSrc }) => (
  <StyledCardContainer fullWidth>
    <FlexContainer>
      <Image alt="Profile picture" src={imageSrc} />
      <TextContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Text>{text}</Text>
      </TextContainer>
    </FlexContainer>
    <PersonalInfo />
  </StyledCardContainer>
)

export default PersonalIntroduction