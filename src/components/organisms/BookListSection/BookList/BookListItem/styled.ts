import { Container } from './../../../PageNotFoundSection/styled';
import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import CardContainer from 'components/atoms/CardContainer'
import { H5, BodyText, BodyTextSmall } from 'components/atoms/TextElements'

import chevronIcon from 'media/icons/icon-chevron-grey2.png'

interface styledCardContainerProps {
  contentContainerHeight: number,
  expanded: boolean,
}

export const StyledCardContainer = styled(CardContainer)<styledCardContainerProps>`
  position: relative;
  overflow: hidden;
  max-height: ${props => props.expanded ? `calc(${props.contentContainerHeight}px + 120px)` : `214px`};
  padding: 2rem 24px;
  padding-bottom: ${props => props.expanded ? `94px` : `24px`};
  transition: 600ms all ease;

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    grid-column: span 2;
    max-height: 650px;
  }

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    padding: 2.5rem;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const MetaDataContainer = styled.div`
  display: grid;
  grid-template-areas:
    "image titlecontainer"
    "summary summary";
  grid-template-columns: 100px auto;
  grid-template-rows: 150px auto;
  column-gap: 1.25rem;
  row-gap: 24px;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    grid-template-areas:
      "image titlecontainer"
      "image summary";
    grid-template-columns: 120px auto;
    grid-template-rows: auto 1fr;
    column-gap: 24px;
    row-gap: 0.75rem;
  }
`

export const CoverImage = styled.img`
  grid-area: image;
  width: 100px;
  border: 2px solid ${themeStyles.colors.grey3};
  border-radius: 0.5rem;
  box-shadow: ${themeStyles.shadows.dropShadow};

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    width: 120px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  grid-area: titlecontainer;
`

export const Title = styled(H5)`
  margin: 0;
`

export const Authors = styled(BodyTextSmall)`
  margin: 0;
  color: ${themeStyles.colors.grey1};
`

export const Summary = styled(BodyText)`
  grid-area: summary;
  margin: 0;
`

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: ${themeStyles.colors.grey3};
  border-radius: 1.25rem;
`

interface seeMoreButtonProps {
  expanded: boolean,
}

export const ExpandButton = styled(BodyTextSmall)<seeMoreButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
  right: 1.25rem;
  bottom: 1.25rem;
  margin: 0;
  padding: 0.75rem;
  color: ${themeStyles.colors.grey1};
  cursor: pointer;

  &:after {
    content: "";
    display: inline-block;
    height: 0.75rem;
    width: 0.75rem;
    background: url(${chevronIcon.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    rotate: ${props => props.expanded ? '-90deg' : '90deg'};
    transition: 600ms all ease;
  }

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    display: none;
  }
`