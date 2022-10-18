import React, { FC } from 'react'

import ContactButton from './ContactButton'

import { Container, TitleContainer, Title, Subtitle } from './styled'

interface HeaderProps {
    forwardRef?: any,
    title: string,
    subtitle: string,
}

const Header: FC<HeaderProps> = ({ forwardRef, title, subtitle }) => (
    <Container ref={forwardRef}>
        <TitleContainer>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </TitleContainer>
        <ContactButton />
    </Container>
)

export default Header