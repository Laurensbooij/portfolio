import React, { FC } from 'react'

import RichText from 'components/atoms/RichText'
import Button from 'components/atoms/Button'

import { Container } from './styled'

interface ctaProps {
  text?: any,
  buttonText: string,
  href: string
}

const Cta: FC<ctaProps> = ({ text, buttonText, href }) => (
  <Container>
    {text && <RichText content={text} />}
    <Button href={href}>{buttonText}</Button>
  </Container>
)

export default Cta