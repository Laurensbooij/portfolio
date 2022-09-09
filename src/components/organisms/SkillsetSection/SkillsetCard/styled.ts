import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import { H3, BodyTextSmall } from 'components/atoms/TextElements'

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled(H3)`
  margin: 0 0 0.25rem 0;
`

export const Subtitle = styled(BodyTextSmall)`
  margin: 0;
  color: ${themeStyles.colors.grey1};
`

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`