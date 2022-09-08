import styled from "styled-components"

import themeStyles from "utilities/themeStyles"

interface containerProps {
  headerHeight: number,
}

export const Container = styled.div<containerProps>`
  display: flex;
  width: 100vw;
  height: 100%;
  margin-top: ${props => props.headerHeight}px;
  padding: 40px 12px;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    width: auto;
    margin-left: 360px;
    padding: 80px;
  }
`

export const Main = styled.main`
  width: 100%;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    height: 100%;
  }
`