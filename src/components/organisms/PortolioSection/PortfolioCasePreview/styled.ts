import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import { H3, BodyText, BodyTextSmall } from 'components/atoms/TextElements'

interface containerProps {
  fullWidth: boolean,
}

export const Container = styled.div<containerProps>`
  display: flex;
  flex-direction: column;
  grid-column: span 4;
  height: 440px;
  background: ${themeStyles.colors.white};
  border: 2px solid ${themeStyles.colors.grey3};
  border-radius: 12px;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;

  
  @media (min-width: ${themeStyles.breakpoints.tablet}) {
    grid-column: span ${props => props.fullWidth ? 4 : 2};
  }

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    &:hover div:nth-of-type(2) {
      max-height: 400px;
    }
  }

`

interface coverImageProps {
  imageSrc: string,
}

export const CoverImage = styled.div<coverImageProps>`
  width: 100%;
  height: 100%;
  background: url(${props => props.imageSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

interface metaDataContainerProps {
  mainContentHeight: number,
}

export const MetadataContainer = styled.div<metaDataContainerProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
  background: ${themeStyles.colors.white};
  border-top: 2px solid ${themeStyles.colors.grey3};


  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    max-height: ${props => props.mainContentHeight + 48}px;
    transition: all 800ms ease;
  }
`

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 24px;
`

export const Title = styled(H3)`
  margin: 0 0 2px;
`

export const Subtitle  = styled(BodyTextSmall)`
  margin: 0 0 16px;
  color: ${themeStyles.colors.grey1};
`

export const CaseSummary = styled(BodyText)`
  display: none;
  margin: 0 0 16px;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    display: block;
  }
`