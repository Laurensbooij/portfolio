import styled from "styled-components"

import themeStyles from "utilities/themeStyles"

import { H2 } from "components/atoms/TextElements"

export const Container = styled.section`
  
`

export const StyledH2 = styled(H2)`
  margin: 0 0 1rem 0;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    margin: 0 0 2rem 0;
  }
`