import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  * {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    b {
      color: ${themeStyles.colors.secondary};
    }
  }
`

