import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import CardContainer from 'components/atoms/CardContainer'
import { H3, BodyText } from 'components/atoms/TextElements'

export const StyledCardContainer = styled(CardContainer)`
  align-items: center;
  gap: 32px;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 40px 0 0;
  padding: 80px 32px 24px;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    margin: 50px 0 0;
    padding: 90px 60px 60px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

export const Title = styled(H3)`
  text-align: center;
  margin: 0;
`

export const Subtitle = styled(BodyText)`
  text-align: center;
  margin: 0;
`


