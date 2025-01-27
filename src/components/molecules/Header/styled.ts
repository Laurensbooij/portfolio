import styled from "styled-components"

import themeStyles from "utilities/themeStyles"

import { H1, H4 } from "components/atoms/TextElements"

export const Container = styled.div`
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background: ${themeStyles.colors.primary};
    padding: 1.25rem 1.25rem;

    @media (min-width: ${themeStyles.breakpoints.tablet}) {
        padding: 2rem 80px;
    }
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    max-width: 1400px;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: calc(100vw - 114px);
`

export const Title = styled(H1)`
    font-size: 1.5rem;
    margin: 0 0 .25rem 0;
    color: ${themeStyles.colors.white};
`

export const Subtitle = styled(H4)`
    font-size: 1rem;
    margin: 0 0 0 0 !important;
    color: ${themeStyles.colors.secondary};
`