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
  padding: 0.75rem;
  background: ${props => props.active ? themeStyles.colors.primary : themeStyles.colors.white};
  box-shadow: ${themeStyles.shadows.dropShadow};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 400ms ease, border 0ms ease;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 24px 1rem 2.75rem;
    border-radius: 0 0.5rem 0.5rem 0;
    border: 0.25rem solid ${props => props.active ? themeStyles.colors.primary : themeStyles.colors.white};

    &:hover {
      border-color: ${themeStyles.colors.primary};
  }
  }

  @media (min-width: ${themeStyles.breakpoints.desktopXL}) {
    border-radius: 0.5rem;
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
    order: 2;
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
    margin: 0;
  }
`