import React, { FC } from 'react'

import { Container, Icon, Text } from './styled'

import starIcon from 'media/icons/icon-star.png'

interface highlightProps {
  text: string
}

const Highlight: FC<highlightProps> = ({ text }) => (
  <Container>
    <Icon iconUrl={starIcon.src} />
    <Text>{text}</Text>
  </Container>
)

export default Highlight