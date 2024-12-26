import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

export const Container = styled.section`
  overflow: hidden;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    padding: 24px 0 0;
  }
`

interface scrollContainer {
  toggled: boolean,
}

export const ScrollContainer = styled.div<scrollContainer>`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  width: calc(200% + 24px);
  translate: ${props => props.toggled ? `calc(-50% - 0.75rem) 0` : '0 0'};
  transition: all 0.6s ease;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    gap: 80px;
    width: calc(200% + 80px);
    translate: ${props => props.toggled ? `calc(-50% - 2.5rem) 0` : '0 0'};
  }
`