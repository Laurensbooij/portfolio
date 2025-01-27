import styled from "styled-components"

import themeStyles from "utilities/themeStyles"

interface containerProps {
  headerHeight: number,
  navigationHeight: number
}

export const Container = styled.div<containerProps>`
  display: flex;
  width: 100vw;
  max-width: 1400px;
  height: 100%;
  margin: ${props => props.headerHeight}px 0 ${props => props.navigationHeight}px;
  padding: 2.5rem 0.75rem 60px;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    width: auto;
    margin-left: 240px;
    margin-bottom: 0;
    padding: 80px 80px 120px;
  }

  @media (min-width: ${themeStyles.breakpoints.desktopXL}) {
    margin: ${props => props.headerHeight}px auto 0;
    padding: 80px 0 120px;
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

  @media (min-width: ${themeStyles.breakpoints.desktopXL}) {
    padding: 0 0 0 300px;
  }
`