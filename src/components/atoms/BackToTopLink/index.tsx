import React from 'react'

import { Container, ScrollButton } from './styled'

const BackToTopLink = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Container>
      <ScrollButton onClick={scrollToTop}>Back to top</ScrollButton>
    </Container>
  )
}

export default BackToTopLink