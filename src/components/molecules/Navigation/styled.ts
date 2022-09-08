import styled from "styled-components"

import themeStyles from "utilities/themeStyles"

interface containerProps {
  offsetTop: number,
}

export const Container = styled.nav<containerProps>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0 12px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 20px 12px 32px;
  background: linear-gradient(180deg, rgba(250,250,250,0) 0%, rgba(250,250,250,1) 45%);

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    grid-gap: 20px 0;
    top: calc(80px + ${props => props.offsetTop}px);
    left: 80px;
    width: 280px;
    padding: 0;
    background: none;
  }
`
