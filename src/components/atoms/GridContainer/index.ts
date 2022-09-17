import styled from "styled-components"

import themeStyles from "utilities/themeStyles"

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    grid-gap: 32px;
  }
`

export default GridContainer