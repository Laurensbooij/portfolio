import React from 'react'
import { useRouter } from 'next/router'

import NavigationButton from './NavigationButton'

import { Container } from './styled'

import CompassIcon from "media/icons/icon-compass.png"
import TimelineIcon from "media/icons/icon-timeline.png"
import PortfolioIcon from "media/icons/icon-portfolio.png"
import BookIcon from "media/icons/icon-book.png"

const Navigation = (  ) => {
  const router = useRouter()
  
  return (
    <Container>
    <NavigationButton 
      url="/about-me"
      iconUrl={CompassIcon.src} 
      text="About me" 
      active={router.pathname == "/about-me"} 
    />
    <NavigationButton 
      url="/resume"
      iconUrl={TimelineIcon.src} 
      text="Resume" 
      active={router.pathname == "/resume"} 
    />
    <NavigationButton 
      url="/portfolio" 
      iconUrl={PortfolioIcon.src} 
      text="Portfolio" 
      active={router.pathname == "/portfolio"} 
    />
    <NavigationButton 
      url="book-list" 
      iconUrl={BookIcon.src} 
      text="My books" 
      active={router.pathname == "/book-list"} 
    />
  </Container>
  )
}

export default Navigation