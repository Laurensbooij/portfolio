import React, { FC } from 'react'

import { Container, Title, Subtitle } from './styled'

interface HeaderProps {
    forwardRef?: any,
    title: string,
    subtitle: string,
}

const Header: FC<HeaderProps> = ({ forwardRef, title, subtitle }) => (
    <Container ref={forwardRef}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
    </Container>
)

export default Header