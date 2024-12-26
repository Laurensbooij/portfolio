import styled from "styled-components"

import themeStyles from "utilities/themeStyles"

import { H3, BodyText } from "components/atoms/TextElements"

interface iconProps {
  iconUrl: string,
}

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

export const IconContainer = styled.div`
  height: 48px;
  width: 48px;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: ${themeStyles.colors.primary};

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    height: 60px;
    width: 60px;
  }

`

export const Icon = styled.div<iconProps>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.iconUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const Title = styled(H3)`
  margin: 0;
`