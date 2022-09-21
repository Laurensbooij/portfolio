import React, { FC, useEffect, useState } from 'react'

import { useNavToggleContext } from 'contexts/NavToggleContext'

import { Container, ActiveIndicator, Label } from './styled'

interface toggleProps {
  offsetTop: number,
}

const Toggle: FC<toggleProps> = ({ offsetTop }) => {
  const { navToggleState, switchToggle } = useNavToggleContext()
  const { showToggle, toggled, toggleLabels } = navToggleState

  const [clientWidth, setClientWidth] = useState(0)

  const windowResizeHandler = () => {
    setClientWidth(window.innerWidth)
  }
  
  useEffect(() => {
    windowResizeHandler()
    window.addEventListener('resize', windowResizeHandler)
    return () => {
      window.removeEventListener('resize', windowResizeHandler)
    }
  }, [])


  return (
    <Container clientWidth={clientWidth} offsetTop={offsetTop} display={showToggle}>
      <ActiveIndicator toggled={toggled} />
      <Label onClick={() => switchToggle(false)} active={!toggled}>{toggleLabels.left}</Label>
      <Label onClick={() => switchToggle(true)} active={toggled}>{toggleLabels.right}</Label>
    </Container>
  )
}

export default Toggle