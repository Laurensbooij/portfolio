import styled, { keyframes } from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import { BodyTextSmall } from 'components/atoms/TextElements'

import chevronIcon from 'media/icons/icon-chevron-primarytext.png'

const hoverAnimation = keyframes`
  0% {
    width: calc(100% + 1px);
  }
  50% {
    width: 0%;
    right: -1px;
    left: inherit;
  }
  50.1% {
    left: -1px;
    right: inherit;
  }
  100% {
    width: calc(100% + 1px);
    left: -1px;
    right: inherit;
  }
`

export const LinkBody = styled(BodyTextSmall)`
  display: flex;
  align-items: center;
  position: relative;
  width: fit-content;
  align-self: flex-end;
  height: 40px;
  margin: 0;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    right: -1px;
    bottom: 4px;
    width: calc(100% + 1px);
    height: 2px;
    background: ${themeStyles.colors.primary};
    border-radius: 20px;
    transition: all 300ms ease;
  }

  
  &:hover:before {
    animation: 600ms ease ${hoverAnimation};
  }

  &:after {
    content: "";
    display: inline-block;
    align-self: center;
    height: 12px;
    width: 12px;
    margin-left: 4px;
    background: url(${chevronIcon.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    translate: 0 1px;
  }
`
