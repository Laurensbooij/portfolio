import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import { BodyTextSmall } from 'components/atoms/TextElements'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

interface categoryItemProps {
  isOverviewPage?: boolean,
}

export const CategoryItem = styled(BodyTextSmall)<categoryItemProps>`
  font-size: 0.75rem;
  margin: 0;
  padding: 4px 12px;
  color: ${themeStyles.colors.white};
  background: ${themeStyles.colors.secondary};
  border-radius: 4px;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    font-size: ${props => props.isOverviewPage ? `0.875rem` : `0.75rem`};
  }
`