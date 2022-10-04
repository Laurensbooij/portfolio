import React, { FC } from 'react'

import { workExperienceCtaDataProps } from 'utilities/contentfulTypes/contentfulTypes'

import RichText from 'components/atoms/RichText'
import Button from 'components/atoms/Buttons/Button'

import { Container } from './styled'

interface ctaProps {
  data: workExperienceCtaDataProps,
}

const Cta: FC<ctaProps> = ({ data }) => {

  const {
    buttonText,
    content,
    slug,
  } = data

  return (
    <Container>
      {content && <RichText content={content.content}/>}
      <Button href={slug}>{buttonText}</Button>
    </Container>
  )
}

export default Cta