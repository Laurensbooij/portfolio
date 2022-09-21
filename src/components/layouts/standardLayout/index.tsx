import React, { FC, useEffect, useRef, useState } from 'react'

import Header from 'components/molecules/Header'
import Navigation from 'components/molecules/Navigation'

import { Container, Main } from './styled'

interface standardLayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const StandardLayout: FC<standardLayoutProps> = ({ children }) => {
  const headerRef = useRef<HTMLElement>(null)
  const [headerHeight, setHeaderHeight] = useState(150)

  const navigationRef = useRef<HTMLElement>(null)
  const [navigationHeight, setNavigationHeight] = useState(180)

  useEffect(() => {
    let headerHeight = headerRef.current?.clientHeight || 150
    setHeaderHeight(headerHeight)

    let navigationHeight = navigationRef.current?.clientHeight || 180
    setNavigationHeight(navigationHeight)

    const onResizeHandler = () => {
      headerHeight = headerRef.current?.clientHeight || 150
      setHeaderHeight(headerHeight)

      navigationHeight = navigationRef.current?.clientHeight || 180
      setNavigationHeight(navigationHeight)
    }

    window.addEventListener("resize", onResizeHandler)

    return () => window.addEventListener("resize", onResizeHandler)
  }, [])

  return (
    <>
      <Header 
        title="Laurens Booij"
        subtitle="Aspiring Front-end developer / Product Manager"
        forwardRef={headerRef}
      />
      <Container headerHeight={headerHeight} navigationHeight={navigationHeight}>
        <Navigation forwardRef={navigationRef} offsetTop={headerHeight}/>
        <Main>{children}</Main>
      </Container>
    </>
  )
}

export default StandardLayout