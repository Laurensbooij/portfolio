import React, { FC } from 'react'

import { HitboxContainer, IconContainer } from './styled'

interface clearButtonProps {
  onClick: () => void,
}

const ClearButton: FC<clearButtonProps> = ({ onClick }) => (
  <HitboxContainer onClick={onClick}>
    <IconContainer />
  </HitboxContainer>
)

export default ClearButton