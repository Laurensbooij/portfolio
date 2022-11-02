import styled, { keyframes } from "styled-components"

import themeStyles from "utilities/themeStyles"

export const H1 = styled.h1`
  font-family: 'Rubik', 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 140%;
  margin: 3rem 0 0.5rem;
  color: ${themeStyles.colors.primaryText};

  + h2, + h3, + h4, + h5, + h6 {
    margin: 2rem 0 0.5rem;
  }

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    font-size: 3rem;
    margin: 3rem 0 0.5rem;
  }
`

export const H2 = styled.h2`
  font-family: 'Rubik', 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 140%;
  margin: 2.5rem 0 0.5rem;
  color: ${themeStyles.colors.primaryText};

  + h3, + h4, + h5, + h6 {
    margin: 1.875rem 0 0.5rem;
  }

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    font-size: 2rem;
    margin: 2.5rem 0 0.5rem;
  }
`

export const H3 = styled.h3`
  font-family: 'Rubik', 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 140%;
  margin: 2.25rem 0 0.5rem;
  color: ${themeStyles.colors.primaryText};

  + h4, + h5, + h6 {
    margin: 1.25rem 0 0.5rem;
  }

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    font-size: 1.5rem;
    margin: 2.25rem 0 0.5rem;
  }

`

export const H4 = styled.h4`
  font-family: 'Rubik', 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 140%;
  margin: 2.125rem 0 0.5rem;
  color: ${themeStyles.colors.primaryText};

  + h5, + h6 {
    margin: 1.125rem 0 0.5rem;
  }

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    margin: 2.125rem 0 0.5rem;
  }
`

export const H5 = styled.h5`
  font-family: 'Rubik', 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  line-height: 160%;
  margin: 2rem 0 0.5rem;
  color: ${themeStyles.colors.primaryText};

  + h6 {
    margin: 1rem 0 0.5rem;
  }

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    margin: 2rem 0 0.5rem;
  }
`

export const H6 = styled.h6`
  font-family: 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 160%;
  margin: 1.75rem 0 0.5rem;
  color: ${themeStyles.colors.grey1};
`

const hoverAnimation = keyframes`
  0% {
    width: calc(100% + 1px);
  }
  50% {
    width: 0%;
    right: 0px;
    left: inherit;
  }
  50.1% {
    left: 0px;
    right: inherit;
  }
  100% {
    width: calc(100% + 1px);
    left: 0px;
    right: inherit;
  }
`

export const BodyText = styled.p`
  font-family: 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 180%;
  margin: 0;
  color: ${themeStyles.colors.primaryText};

  & + p {
    margin: 1.2rem 0 0;
  }

  a {
    position: relative;
    width: fit-content;
    font-weight: 500;
    padding: 0 4px 0;
    cursor: pointer;
  }

  a:before {
    content: "";
    position: absolute;
    right: 0px;
    bottom: -2px;
    width: calc(100% - 2px);
    height: 2px;
    background: ${themeStyles.colors.primary};
    border-radius: 20px;
    transition: all 300ms ease;
  }

  a:hover {
    color: ${themeStyles.colors.grey1};
  }
  
  a:hover:before {
    animation: 600ms ease ${hoverAnimation};
  }

`

export const BodyTextSmall = styled.p`
  font-family: 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 160%;
  margin: 0;
  color: ${themeStyles.colors.primaryText};
`

interface inputLabelProps {
  required?: boolean,
}

export const InputLabel = styled.label<inputLabelProps>`
  font-family: 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;
  color: ${themeStyles.colors.primaryText};

  &:after {
    display: ${props => props.required ? 'inline-block' : 'none'};
    content:"(required)";
    color: ${themeStyles.colors.grey1};
    margin: 0 0 0 5px;
  }
`

export const UnorderedList = styled.ul`
  font-family: 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 1.25rem 0;
  padding-left: 32px;
  list-style: none;

  li {
    line-height: 160%;
    display: flex;
    align-items: center;
    gap: 5px;
    position: relative;
    color: ${themeStyles.colors.primaryText};
  }

  li b {
    color: ${themeStyles.colors.primaryText};
  }

  li:before {
    content: "";
    display: inline-block;
    position: absolute;
    left: -20px;
    top: 0.5rem;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: ${themeStyles.colors.secondary};
  }
`

