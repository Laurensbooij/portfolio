import React, { FC } from 'react'

import ContactButton from './ContactButton'

import { Container, FlexContainer, TitleContainer, Title, Subtitle } from './styled'

interface HeaderProps {
    forwardRef?: any,
    title: string,
    subtitle: string,
}

const Header: FC<HeaderProps> = ({ forwardRef, title, subtitle }) => (
    <Container ref={forwardRef}>
        <FlexContainer>
            <TitleContainer>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </TitleContainer>
            <ContactButton />
        </FlexContainer>
    </Container>
)

export default Header