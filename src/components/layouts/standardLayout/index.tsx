import React, { FC, useEffect, useRef, useState } from 'react'

import Header from 'components/molecules/Header'
import Navigation from 'components/molecules/Navigation'

import { Container, Main } from './styled'

interface standardLayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const StandardLayout: FC<standardLayoutProps> = ({ children }) => {
  const headerRef = useRef<HTMLElement>(null)
  const [headerHeightState, setHeaderHeightState] = useState(200)

  useEffect(() => {
    let headerHeightheaderRef = headerRef.current?.clientHeight
    let headerHeight = headerHeightheaderRef ? headerHeightheaderRef : 200
    setHeaderHeightState(headerHeight)

    const onResizeHandler = () => {
      headerHeightheaderRef = headerRef.current?.clientHeight
      headerHeight = headerHeightheaderRef ? headerHeightheaderRef : 200
      setHeaderHeightState(headerHeight)
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
      <Container headerHeight={headerHeightState}>
        <Navigation offSetTop={headerHeightState}/>
        <Main>{children}</Main>
      </Container>
    </>
  )
}

export default StandardLayout