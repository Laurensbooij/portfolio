import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

const Image = styled.img`
  display: block;
  height: 200px;
  width: 100%;
  margin: 2rem 0;
  border: 2px solid ${themeStyles.colors.grey3};
  border-radius: 0.75rem;
  object-fit: cover;

  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    height: 320px;
  }

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    height: 340px;
    margin: 2.5rem 0;
  }
`

export default Image