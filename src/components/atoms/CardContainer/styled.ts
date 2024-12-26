import styled from "styled-components"

import themeStyles from "utilities/themeStyles"

interface containerProps {
  fullWidth?: boolean,
}

export const Container = styled.div<containerProps>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  grid-column: span 4;
  background: ${themeStyles.colors.white};
  border: 2px solid ${themeStyles.colors.grey3};
  border-radius: 0.75rem;
  box-sizing: border-box;
  padding: 2rem 24px;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    grid-column: span ${props => props.fullWidth ? 4 : 2};
    padding: 60px;
  }
`