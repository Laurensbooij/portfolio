import styled from "styled-components"

import themeStyles from "utilities/themeStyles"

import { H3 } from "components/atoms/TextElements"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    gap: 24px;
  }
`

export const Title = styled(H3)`
  margin: 0;
  text-align: center;
`