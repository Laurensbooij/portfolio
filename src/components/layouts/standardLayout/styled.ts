import styled from "styled-components"

import themeStyles from "utilities/themeStyles"

interface containerProps {
  offsetTop: number,
}

export const Container = styled.div<containerProps>`
  display: grid;
  grid-template-columns: 1fr;
  width: 100vw;
  height: 100%;
  margin-top: ${props => props.offsetTop}px;
  padding: 40px 12px;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    grid-template-columns: 2fr 6fr;
    grid-gap: 0 60px;
    padding: 80px;
  }
`

export const Main = styled.main`

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    height: 100%;
  }
`