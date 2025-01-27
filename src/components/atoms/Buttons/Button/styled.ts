import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

export const Anchor = styled.a`
  display: inline-block;
  width: fit-content;
  font-family: 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 160%;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  color: ${themeStyles.colors.white};
  background: ${themeStyles.colors.primary};
  cursor: pointer;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    font-size: 1rem;
    padding: 1rem 1.5rem;
  }
`
