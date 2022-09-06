import React, { FC } from 'react'

import { Container, Title, Subtitle } from './styled'

interface HeaderProps {
    title: string,
    subtitle: string,
    forwardRef: any,
}

const Header: FC<HeaderProps> = ({ title, subtitle, forwardRef }) => (
    <Container ref={forwardRef}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
    </Container>
)

export default Header