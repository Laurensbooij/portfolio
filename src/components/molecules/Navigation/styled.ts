import styled from "styled-components"

import themeStyles from "utilities/themeStyles"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0 12px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 20px 12px 32px;
  background: linear-gradient(90deg, rgba(250,250,250,0) 0%, rgba(250,250,250,1) 45%);

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    position: inherit;
    grid-template-columns: 1fr;
    grid-gap: 20px 0;
    width: auto;
    padding: 0;
    background: none;
  }
`
