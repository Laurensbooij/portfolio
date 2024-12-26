import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

export const SubmitInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 160%;
  height: 2.5rem;
  width: 100%;
  padding: 0 1.25rem;
  border: none;
  border-radius: 0.5rem;
  color: ${themeStyles.colors.white};
  background: ${themeStyles.colors.primary};
  cursor: pointer;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
  }
`
