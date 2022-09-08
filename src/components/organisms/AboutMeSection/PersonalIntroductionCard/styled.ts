import styled from "styled-components"

import themeStyles from "utilities/themeStyles"

import CardContainer from 'components/atoms/CardContainer'
import  { H3, H5, BodyText } from "components/atoms/TextElements"

export const StyledCardContainer = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    flex-direction: row;
    gap: 80px;
  }
`

export const Image = styled.img`
  width: 40%;
  aspect-ratio: 1 / 1;
  min-width: 160px;
  max-width: 320px;
  object-fit: cover;
  border-radius: 50%;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    order: 2;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled(H3)`
  margin: 0 0 0.25rem 0;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    margin: 0 0 0.5rem 0;
  }
`

export const Subtitle = styled(H5)`
  font-size: 0.875rem;
  color: ${themeStyles.colors.secondary};
  margin: 0 0 1rem 0;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    font-size: 1rem;
    margin: 0 0 1.25rem 0;
  }
`

export const Text = styled(BodyText)`
  margin: 0;
`