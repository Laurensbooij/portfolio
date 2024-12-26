import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import { H3, H4, BodyText } from 'components/atoms/TextElements'

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas:
    "title title"
    "subtitle daterange";
  grid-gap: 0.75rem;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    grid-template-columns: max-content auto auto;
    grid-template-areas:
      "title subtitle daterange";
    align-items: start;
    grid-gap: 1rem;
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
    gap: 1rem;
    grid-area: subtitle;

    &:before {
      content: "";
      height: 2rem;
      width: 0.25rem;
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