import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    gap: 24px;
  }
`