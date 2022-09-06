import styled from "styled-components"

import themeStyles from "utilities/themeStyles"

export const H1 = styled.h1`
  font-family: 'Rubik', 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 140%;
  color: ${themeStyles.colors.primaryText};

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    font-size: 3rem;
  }
`

export const H2 = styled.h2`
  font-family: 'Rubik', 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 140%;
  color: ${themeStyles.colors.primaryText};

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    font-size: 2rem;
  }
`

export const H3 = styled.h3`
  font-family: 'Rubik', 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 140%;
  color: ${themeStyles.colors.primaryText};

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`

export const H4 = styled.h4`
  font-family: 'Rubik', 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 140%;
  color: ${themeStyles.colors.primaryText};

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    font-size: 1.25rem;
  }
`

export const H5 = styled.h5`
  font-family: 'Rubik', 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 160%;
  color: ${themeStyles.colors.primaryText};

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    font-size: 1rem;
  }
`

export const H6 = styled.h6`
  font-family: 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 160%;
  color: ${themeStyles.colors.primaryText};
`

export const BodyText = styled.p`
  font-family: 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;
  color: ${themeStyles.colors.primaryText};

`

export const BodyTextSmall = styled.p`
  font-family: 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 160%;
  color: ${themeStyles.colors.primaryText};
`

