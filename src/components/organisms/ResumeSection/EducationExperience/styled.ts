import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    gap: 32px;
  }
`