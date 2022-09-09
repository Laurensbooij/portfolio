import React, { FC } from 'react'

import Button from 'components/atoms/Button'

import { Container, Title } from './styled'

interface ctaSectionProps {
  title: string,
  buttonText: string,
  href: string,
}

const CtaSection: FC<ctaSectionProps> = ({ title, buttonText, href }) => (
  <Container>
    <Title>{title}</Title>
    <Button href={href}>{buttonText}</Button>
  </Container>
)

export default CtaSection