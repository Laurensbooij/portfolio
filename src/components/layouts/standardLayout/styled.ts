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
  padding: 40px 12px 60px;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    width: auto;
    margin-left: 360px;
    padding: 80px 80px 120px;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    gap: 80px;
    height: 100%;
  }
`