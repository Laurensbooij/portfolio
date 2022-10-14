import styled from "styled-components"

import themeStyles from "utilities/themeStyles"

export const H1 = styled.h1`
  font-family: 'Rubik', 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 140%;
  margin: 0 0 1rem;
  color: ${themeStyles.colors.primaryText};

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
  margin: 0 0 0.75rem;
  color: ${themeStyles.colors.primaryText};

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
  margin: 0 0 0.5rem;
  color: ${themeStyles.colors.primaryText};

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
  margin: 0 0 0.375rem;
  color: ${themeStyles.colors.primaryText};

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    font-size: 1.25rem;
    margin: 2.125rem 0 0.5rem;
  }
`

export const H5 = styled.h5`
  font-family: 'Rubik', 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 160%;
  margin: 0 0 0.25rem;
  color: ${themeStyles.colors.primaryText};

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    font-size: 1rem;
    margin: 2rem 0 0.5rem;
  }
`

export const H6 = styled.h6`
  font-family: 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 160%;
  margin: 1.75rem 0 0.5rem;
  color: ${themeStyles.colors.primaryText};
`

export const BodyText = styled.p`
  font-family: 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 180%;
  margin: 1rem 0;
  color: ${themeStyles.colors.primaryText};
`

export const BodyTextSmall = styled.p`
  font-family: 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 160%;
  margin: 1rem 0;
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

