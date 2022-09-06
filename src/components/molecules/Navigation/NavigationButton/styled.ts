import styled from "styled-components"

import themeStyles from "utilities/themeStyles"

import { H4 } from "components/atoms/TextElements"

interface containerProps {
  active: boolean,
}

interface iconProps {
  iconUrl: string,
}

interface textProps {
  active: boolean,
}

export const Container = styled.div<containerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 12px;
  background: ${themeStyles.colors.white};
  box-shadow: ${themeStyles.shadows.dropShadow};
  border-radius: 8px;
  cursor: pointer;

  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${themeStyles.colors.gradient};
    opacity: 0;
    transition: all 0.3s ease;

    ${props => props.active && `
    opacity: 1;
  `}
  }

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
      flex-direction: row;
      justify-content: flex-start;
      padding: 32px 24px;
    }
`

export const Icon = styled.div<iconProps>`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background-image: url(${props => props.iconUrl});
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`

export const Text = styled(H4)<textProps>`
  z-index: 1;
  font-family: 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-size: 0.687rem;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
  margin: 0.5rem 0 0 0;

  ${props => props.active && `
    color: ${themeStyles.colors.white};
  `}

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 0 1.5rem;
  }
`