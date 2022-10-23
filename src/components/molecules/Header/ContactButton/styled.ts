import styled, { keyframes } from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import { BodyTextSmall } from 'components/atoms/TextElements'

import contactIcon from 'media/icons/icon-contact.png'

interface containerProps {
  containerWidth: number,
}

export const Container = styled.div<containerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 48px;
  width: 48px;
  background: none;
  border-radius: 50px;
  box-shadow: ${themeStyles.shadows.dropShadow};
  cursor: pointer;

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    justify-content: space-between;
    gap: 16px;
    height: 52px;
    width: fit-content;
    padding: 0 10px 0 24px;
    background: ${themeStyles.colors.grey4};

    &:hover div {
      background: ${themeStyles.colors.primary};
    }
  }
`

export const Text = styled(BodyTextSmall)`
  display: none;

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    display: block;
    font-size: 1rem;
    font-weight: 500;
  }
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: ${themeStyles.colors.secondary};
  border: 2px solid ${themeStyles.colors.grey4};
  border-radius: 50px;
  transition: all 300ms ease;

  &:before {
    content: "";
    height: 24px;
    width: 24px;
    background: url(${contactIcon.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    height: 32px;
    width: 32px;
    border: none;

    &:before {
      height: 20px;
      width: 20px;
    }
  }
`