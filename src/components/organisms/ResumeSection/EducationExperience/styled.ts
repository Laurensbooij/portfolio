import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

interface containerProps {
  inView: boolean
}

export const Container = styled.div<containerProps>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 50%;
  max-height: ${props => props.inView ? `10000px` : `0px`};
  transition: 400ms all ease;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    gap: 32px;
    opacity: ${props => props.inView ? 1 : 0};
  }
`