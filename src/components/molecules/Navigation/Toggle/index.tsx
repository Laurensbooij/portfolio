import React, { FC, useEffect, useState } from 'react'

import { useNavToggleContext } from 'contexts/NavToggleContext'
import { usePositioningDimensionsContext } from 'contexts/PositioningDimensionsContext'

import { Container, ActiveIndicator, Label } from './styled'

interface toggleProps {
  offsetTop: number,
}

const Toggle: FC<toggleProps> = ({ offsetTop }) => {
  const { navToggleState, switchToggle } = useNavToggleContext()
  const { showToggle, toggled, toggleLabels } = navToggleState

  const { positioningDimensions } = usePositioningDimensionsContext()
  const { clientWidth } = positioningDimensions 

  return (
    <Container clientWidth={clientWidth} offsetTop={offsetTop} showToggle={showToggle}>
      <ActiveIndicator toggled={toggled} />
      <Label onClick={() => switchToggle(false)} active={!toggled}>{toggleLabels.left}</Label>
      <Label onClick={() => switchToggle(true)} active={toggled}>{toggleLabels.right}</Label>
    </Container>
  )
}

export default Toggle