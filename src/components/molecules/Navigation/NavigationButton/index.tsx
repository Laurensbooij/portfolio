import React, { FC } from 'react'

import Link from 'next/link'
import { Container, Icon, Text } from './styled'

interface NavigationButtonProps {
  active: boolean,
  iconUrl: any,
  text: string,
  url: string,
}

const NavigationButton: FC<NavigationButtonProps> = ({ active, iconUrl, text, url }) => (
  <Link href={url} passHref>
    <Container active={active}>
      <Icon iconUrl={iconUrl} />
      <Text active={active}>{text}</Text>
    </Container>
  </Link>
)

export default NavigationButton