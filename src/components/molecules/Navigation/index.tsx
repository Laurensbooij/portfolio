import React, { FC, useRef } from 'react'
import { useRouter } from 'next/router'

import Toggle from './Toggle'
import NavigationButton from './NavigationButton'

import { Container, ButtonContainer } from './styled'

import compassIcon from "media/icons/icon-compass.png"
import timelineIcon from "media/icons/icon-timeline.png"
import portfolioIcon from "media/icons/icon-portfolio.png"
import bookIcon from "media/icons/icon-book.png"

interface navigationProps {
  forwardRef?: any,
  offsetTop: number,
}

const Navigation: FC<navigationProps> = ({ forwardRef, offsetTop }) => {
  const router = useRouter()

  return (
    <Container ref={forwardRef} offsetTop={offsetTop}>
      <Toggle offsetTop={offsetTop} />
      <ButtonContainer>
        <NavigationButton 
          url="/about-me"
          iconUrl={compassIcon.src} 
          text="About me" 
          active={router.pathname == "/about-me"} 
        />
        <NavigationButton 
          url="/resume"
          iconUrl={timelineIcon.src} 
          text="Resume" 
          active={router.pathname == "/resume"} 
        />
        <NavigationButton 
          url="/portfolio" 
          iconUrl={portfolioIcon.src} 
          text="Portfolio" 
          active={router.pathname == "/portfolio"} 
        />
        <NavigationButton 
          url="book-list" 
          iconUrl={bookIcon.src} 
          text="My books" 
          active={router.pathname == "/book-list"} 
        />
      </ButtonContainer>
    </Container>
  )
}

export default Navigation