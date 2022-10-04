import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import CardContainer from 'components/atoms/CardContainer'

import { H3, H4, BodyText } from 'components/atoms/TextElements'

export const StyledCardContainer = styled(CardContainer)`
  gap: 32px;
`

export const MetadataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width:${themeStyles.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (min-width:${themeStyles.breakpoints.desktop}) {
    gap: 32px;
  }
`

interface logoProps {
  src: string,
}

export const Logo = styled.div<logoProps>`
  height: 60px;
  width: 60px;
  border-radius: 8px;
  background: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .125rem;

  @media (min-width:${themeStyles.breakpoints.desktop}) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`

export const Title = styled(H3)`
  margin: 0;
`

export const Subtitle = styled(BodyText)`
  margin: 0;

  @media (min-width:${themeStyles.breakpoints.desktop}) {
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    &:before {
      content: "";
      height: 32px;
      width: 4px;
      border-radius: 50px;
      background: ${themeStyles.colors.grey3};
    }
  }
`

export const DurationContainer = styled.div`
  gap: .25rem;

  @media (min-width:${themeStyles.breakpoints.desktop}) {
    order: 2;
  }
`

export const Duration = styled(H4)`
  color: ${themeStyles.colors.grey1};
  margin: 0;
`

export const Daterange = styled(BodyText)`
  color: ${themeStyles.colors.grey1};
  margin: 0;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`
