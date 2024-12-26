import styled, { css, keyframes } from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import { H3, BodyText } from 'components/atoms/TextElements'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem 60px;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem 60px;
  }
`

const hoverAnimation = keyframes`
  0% {
    width: calc(100% - 48px + 1px);
  }
  50% {
    width: 0%;
    right: -1px;
    left: inherit;
  }
  50.1% {
    left: 47px;
    right: inherit;
  }
  100% {
    width: calc(100% - 48px + 1px);
    left: 47px;
    right: inherit;
  }
`

interface infoTextProps {
  iconUrl: string,
  isLink?: boolean,
}

export const InfoText = styled(BodyText)<infoTextProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  width: fit-content;
  margin: 0 !important;

  &::before {
    content: "";
    width: 2rem;
    height: 2rem;
    background-image: url(${props => props.iconUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  ${props => props.isLink && css`
    cursor: pointer;

    &:hover {
      color: ${themeStyles.colors.grey1};
    }

    &::after {
      content: "";
      position: absolute;
      right: -1px;
      bottom: 3px;
      width: calc(100% - 48px + 1px);
      height: 2px;
      background: ${themeStyles.colors.primary};
      border-radius: 1.25rem;
      transition: all 300ms ease;
    }

    &:hover:after {
      animation: 600ms ease ${hoverAnimation};
    }
  `}
`
