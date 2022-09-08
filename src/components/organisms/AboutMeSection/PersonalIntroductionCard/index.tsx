import React from 'react'

import { StyledCardContainer, Image, TextContainer, Title, Subtitle, Text } from './styled'

const imgSrc = "https://trinamiek.nl/wp-content/uploads/2018/07/placeholder-red.png"

const PersonalIntroduction = (  ) => (
  <StyledCardContainer fullWidth>
    <Image alt="Profile picture" src={imgSrc} />
    <TextContainer>
      <Title>Laurens Booij</Title>
      <Subtitle>Front-end developer / Aspiring Product Manager</Subtitle>
      <Text>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet</Text>
    </TextContainer>
  </StyledCardContainer>
)

export default PersonalIntroduction