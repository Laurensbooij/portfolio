import React, { FC } from 'react'

import { Container } from './styled'

interface cardContainerProps {
  className?: string,
  children?: JSX.Element | JSX.Element[] | any,
  fullWidth?: boolean,
}

const CardContainer: FC<cardContainerProps> = ({ className, children, fullWidth }) => (
  <Container className={className} fullWidth={fullWidth}>
    {children}
  </Container>
)

export default CardContainer