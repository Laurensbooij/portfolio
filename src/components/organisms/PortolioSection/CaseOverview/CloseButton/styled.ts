import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles';

import crossIcon from "media/icons/icon-cross_gradient.png"

export const IconContainer = styled.div`
  position: fixed;
  left: 50vw;
  bottom: 32px;
  translate: -50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  margin: 0 auto;
  border: 4px solid transparent;
  background: 
  linear-gradient(${themeStyles.colors.white}, ${themeStyles.colors.grey4}) padding-box,
  ${themeStyles.colors.primary} border-box;
  background-size: 200% 200%;
  border-radius: 50%;
  cursor: pointer;

  &:before {
    content: "";
    height: 20px;
    width: 20px;
    background: url(${crossIcon.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    left: inherit;
    bottom: inherit;
    top: 140px;
    right: 140px;
    height: 52px;
    width: 52px;
    margin: 0 0 0 auto;
    translate: 0;
  }

  @media (min-width: 1520px) {
    right: calc(((100vw - 1400px) / 2) + 80px);
  }
`