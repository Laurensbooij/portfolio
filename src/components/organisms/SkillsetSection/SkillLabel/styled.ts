import styled from "styled-components"

import themeStyles from 'utilities/themeStyles'

import { BodyText, BodyTextSmall } from 'components/atoms/TextElements'

interface containerProps {
  fullWidth?: boolean,
}

interface indicatorProps {
  active: boolean,
}

export const Container = styled.div<containerProps>`
  display: flex;
  flex-direction: column;
`

export const Label = styled(BodyText)`
  font-weight: 600;
  margin: 0 0 0.5rem;
`

export const IndicatorContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const Indicator = styled.div<indicatorProps>`
  width: 2rem;
  height: 6px;
  border-radius: 50px;
  background: ${props => props.active ? themeStyles.colors.secondary : themeStyles.colors.grey3};
`

export const Annotation = styled(BodyTextSmall)`
  margin: 0.75rem 0 0;
  color: ${themeStyles.colors.grey1};
`