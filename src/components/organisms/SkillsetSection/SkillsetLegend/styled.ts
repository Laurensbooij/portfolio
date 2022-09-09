import styled from "styled-components"

import { H3, BodyText } from "components/atoms/TextElements"

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled(H3)`
  margin: 0 0 1rem 0;
`

export const Text = styled(BodyText)`
  margin: 0;
`

export const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`