import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import crossIcon from 'media/icons/icon-cross_white.png'

export const HitboxContainer = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 4px;
  height: 100%;
  width: 40px;
  cursor: pointer;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  background: ${themeStyles.colors.gradient};
  border-radius: 50%;

  &:before {
    content: "";
    display: inline-block;
    height: 10px;
    width: 10px;
    background-image: url(${crossIcon.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`