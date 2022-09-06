import React, { FC, useRef, useState } from 'react'

import Header from 'components/molecules/Header'
import Navigation from 'components/molecules/Navigation'

import { Container, Main } from './styled'

interface standardLayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const StandardLayout: FC<standardLayoutProps> = ({ children }) => {
  const headerRef = useRef<HTMLElement>(null)

  let headerHeightheaderRef = headerRef.current?.clientHeight
  let containerOffset = headerHeightheaderRef ? headerHeightheaderRef : 200

  const [containerOffsetState, setContainerOffsetState] = useState(containerOffset)

  const onResizeHandler = () => {
    setContainerOffsetState(containerOffset)
  }
  window.addEventListener('resize', onResizeHandler)

  return (
    <>
      <Header 
        title="Laurens Booij"
        subtitle="Aspiring Front-end developer / Product Manager"
        forwardRef={headerRef}
      />
      <Container offsetTop={containerOffset}>
        <Navigation />
        <Main>{children}</Main>
      </Container>
    </>
  )
}

export default StandardLayout