import styled from "styled-components"

import themeStyles from "utilities/themeStyles"

import { H1, H4 } from "components/atoms/TextElements"

export const Container = styled.div`
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background: ${themeStyles.colors.gradient};
    padding: 40px 20px 20px;

    @media (min-width: ${themeStyles.breakpoints.tablet}) {
        padding: 60px 80px;
    }
`

export const Title = styled(H1)`
    margin: 0 0 .25rem 0;
    color: ${themeStyles.colors.white};
`

export const Subtitle = styled(H4)`
    margin: 0 0 0 0;
    color: ${themeStyles.colors.secondary} ;
`