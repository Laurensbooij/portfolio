import styled, { css, keyframes } from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import searchIcon from 'media/icons/icon-search.png'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 2.75rem;
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
  color: ${themeStyles.colors.primaryText};
  height: 100%;
  width: 100%;
  padding: 0 1rem;
  background: ${themeStyles.colors.white};
  border-radius: 50px;
  border: 2px solid ${themeStyles.colors.grey3};
  outline: none;

  &::placeholder {
    color: ${themeStyles.colors.grey1};
  }

  ${props => props.value.length > 0 && css`
    border-color: ${themeStyles.colors.primary};
  `}

  &:focus {
    border-color: ${themeStyles.colors.primary};
  }
`

export const SearchButton = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0.25rem;
  height: 100%;
  width: 2.5rem;
  padding: 1rem;
  background: url(${searchIcon.src});
  background-repeat: no-repeat;
  background-size: 1.25rem;
  background-position: center;
  cursor: pointer;
`