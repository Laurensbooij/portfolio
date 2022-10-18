import styled from "styled-components"

import themeStyles from "utilities/themeStyles"

import { H1, H4 } from "components/atoms/TextElements"

export const Container = styled.div`
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background: ${themeStyles.colors.primary};
    padding: 20px 20px;

    @media (min-width: ${themeStyles.breakpoints.tablet}) {
        padding: 32px 80px;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Title = styled(H1)`
    font-size: 1.5rem;
    margin: 0 0 .25rem 0;
    color: ${themeStyles.colors.white};

    @media (min-width: ${themeStyles.breakpoints.tablet}) {
        font-size: 2rem;
    }
`

export const Subtitle = styled(H4)`
    font-size: 0.75rem;
    margin: 0 0 0 0;
    color: ${themeStyles.colors.secondary};

    @media (min-width: ${themeStyles.breakpoints.tablet}) {
        font-size: 1rem;
    }
`