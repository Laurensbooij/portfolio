import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import { H6 } from 'components/atoms/TextElements'
import SearchBox from 'components/atoms/SearchBox'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  padding: calc(44px + 16px) 0 0;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    gap: 80px;
    padding: 24px 0 0;
  }
`

interface styledSearchBoxProps {
  clientWidth: number,
  offsetTop: number,
}

export const EmptySearchNotification = styled(H6)`
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: 40px 0 0;
  color: ${themeStyles.colors.primaryText};
`

export const StyledSearchBox = styled(SearchBox)<styledSearchBoxProps>`
  z-index: 1;
  position: fixed;
  top: ${props => props.offsetTop + 32}px;
  width: calc(100vw - 24px);
  box-shadow: ${themeStyles.shadows.dropShadow};
    
  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    width: 100%;
  }

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    left: ${props => ((props.clientWidth - 400) / 2) + 320}px;
    translate: -50% 0;
    margin: 0;
  }
`
