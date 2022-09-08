import React, { FC } from 'react'
import { useRouter } from 'next/router'

import NavigationButton from './NavigationButton'

import { Container } from './styled'

import compassIcon from "media/icons/icon-compass.png"
import timelineIcon from "media/icons/icon-timeline.png"
import portfolioIcon from "media/icons/icon-portfolio.png"
import bookIcon from "media/icons/icon-book.png"

interface navigationProps {
  offSetTop: number,
}

const Navigation: FC<navigationProps> = ({ offSetTop }) => {
  const router = useRouter()
  
  return (
    <Container offsetTop={offSetTop}>
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
    </Container>
  )
}

export default Navigation