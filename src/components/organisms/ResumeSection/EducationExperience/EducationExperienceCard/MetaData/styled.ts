import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import { H3, H4, BodyText } from 'components/atoms/TextElements'

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas:
    "title title"
    "subtitle daterange";
  grid-gap: 12px;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    grid-template-columns: max-content auto auto;
    grid-template-areas:
      "title subtitle daterange";
    align-items: start;
    grid-gap: 16px;
  }
`

export const Title = styled(H3)`
  margin: 0;
  grid-area: title;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    max-width: 600px;
  }
`

export const Subtitle = styled(H4)`
  display: flex;
  align-items: center;
  justify-self: start;
  margin: 0 !important;
  color: ${themeStyles.colors.grey1};

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    display: flex;
    align-items: center;
    gap: 16px;
    grid-area: subtitle;
    
    &:before {
      content: "";
      height: 32px;
      width: 4px;
      border-radius: 50px;
      background: ${themeStyles.colors.grey3};
    }
  }
`

export const DateRange = styled(BodyText)`
  grid-area: daterange;
  justify-self: end;
  font-weight: 500; 
  margin: 0;
  color: ${themeStyles.colors.grey1};
`