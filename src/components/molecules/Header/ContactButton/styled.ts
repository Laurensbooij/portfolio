import styled, { keyframes } from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import { BodyTextSmall } from 'components/atoms/TextElements'

import contactIcon from 'media/icons/icon-contact.png'


const collapseAnimation = (containerWidth: number) => keyframes`
  0% {
    right: -2px;
  }
  94% {
    right: -2px;
  }
  100% {
    right: calc(${-containerWidth}px + 40px)
  }
`

interface containerProps {
  containerWidth: number,
}

export const Container = styled.div<containerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: -56px;
  right: calc(${props => -props.containerWidth}px + 40px);
  gap: 12px;
  height: 40px;
  padding: 0 18px 0 8px;
  background: ${themeStyles.colors.grey4};
  border: 2px solid ${themeStyles.colors.primary};
  border-radius: 50px 0 0 50px;
  cursor: pointer;
  animation: ${props => collapseAnimation(props.containerWidth)} 6400ms ease 1 normal;

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    position: static;
    gap: 16px;
    height: 52px;
    padding: 0 10px 0 24px;
    border: none;
    border-radius: 50px;

    &:hover div {
      background: ${themeStyles.colors.primary};
    }
  }
`

export const Text = styled(BodyTextSmall)`
  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    font-size: 1rem;
    font-weight: 500;
  }
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  background: ${themeStyles.colors.primary};
  border-radius: 50px;
  transition: all 300ms ease;

  &:before {
    content: "";
    height: 14px;
    width: 14px;
    background: url(${contactIcon.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    height: 32px;
    width: 32px;
    background: ${themeStyles.colors.secondary};
    order: 2;

    &:before {
      height: 20px;
      width: 20px;
    }
  }
`