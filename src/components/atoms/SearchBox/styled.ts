import styled, { css, keyframes } from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import searchIcon from 'media/icons/icon-search.png' 

const focusAnimation = keyframes`
  0% {
    background-position: 0% 0%; 
  }
  50% {
    background-position: 100% 50%; 
  }
  100% {
    background-position: 0% 0%;
  }
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 44px;
  max-width: 440px;
  border-radius: 50px;
`

interface inputProps {
  value: string,
}

export const Input = styled.input<inputProps>`
  display: flex;
  align-items: center;
  font-family: 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-size: 1rem;
  height: 100%;
  width: 100%;
  padding: 0 16px;
  border-radius: 50px;
  border: 2px solid ${themeStyles.colors.grey3};
  outline: none;

  &::placeholder {
    color: ${themeStyles.colors.grey1};
  }

  ${props => props.value.length > 0 && css`
    border-color: transparent;
    background: 
    linear-gradient(${themeStyles.colors.white}, ${themeStyles.colors.white}) padding-box,
    ${themeStyles.colors.gradientWithCustomAngle(90)} border-box;
    background-size: 200% 200%;
    animation: ${focusAnimation} 2s ease infinite;
  `}


  &:focus {
      border-color: transparent;
      background: 
      linear-gradient(${themeStyles.colors.white}, ${themeStyles.colors.white}) padding-box,
      ${themeStyles.colors.gradientWithCustomAngle(90)} border-box;
      background-size: 200% 200%;
      animation: ${focusAnimation} 2s ease infinite;
    }
`

export const SearchButton = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  right: 4px;
  height: 100%;
  width: 40px;
  padding: 16px;
  background: url(${searchIcon.src});
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: center;
  cursor: pointer;
`