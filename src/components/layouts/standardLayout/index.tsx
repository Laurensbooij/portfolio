import React, { FC, useEffect, useRef, useState } from 'react'

import { usePositioningDimensionsContext } from 'contexts/PositioningDimensionsContext'

import Header from 'components/molecules/Header'
import Navigation from 'components/molecules/Navigation'
import BackToTopLink from 'components/atoms/BackToTopLink'

import { Container, Main } from './styled'

interface standardLayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const StandardLayout: FC<standardLayoutProps> = ({ children }) => {
  const headerRef = useRef<HTMLElement>(null)
  const { positioningDimensions, setPositioningDimensions } = usePositioningDimensionsContext()
  const { headerHeight } = positioningDimensions

  const navigationRef = useRef<HTMLElement>(null)
  const [navigationHeight, setNavigationHeight] = useState(180)

  const setPositioningDimensionsHandler = () => {
    let headerHeight = headerRef.current?.clientHeight || 150
    let clientWidth = window.innerWidth

    setPositioningDimensions({ 
      headerHeight: headerHeight,
      clientWidth: clientWidth,
    })
  }

  const setNavigationHeightHandler = () => {
    let navigationHeight = navigationRef.current?.clientHeight || 180
    setNavigationHeight(navigationHeight)
  }

  useEffect(() => {
    setPositioningDimensionsHandler()
    setNavigationHeightHandler()

    const onResizeHandler = () => {
      setPositioningDimensionsHandler()
      setNavigationHeightHandler()
    }

    window.addEventListener("resize", onResizeHandler)

    return () => window.addEventListener("resize", onResizeHandler)
  }, [])

  return (
    <>
      <Header 
        title="Laurens Booij"
        subtitle="Passionate about product development / Aspiring Product Manager"
        forwardRef={headerRef}
      />
      <Container headerHeight={headerHeight} navigationHeight={navigationHeight}>
        <Navigation forwardRef={navigationRef} offsetTop={headerHeight}/>
        <Main>
          {children}
          <BackToTopLink/>
        </Main>
      </Container>
    </>
  )
}

export default StandardLayout