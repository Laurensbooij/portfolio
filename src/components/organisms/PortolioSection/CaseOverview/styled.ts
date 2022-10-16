import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import { H1, BodyTextSmall } from 'components/atoms/TextElements'


export const BackgroundOverlay = styled.div`
  z-index: 99;
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: ${themeStyles.colors.overlayBackground};
  cursor: pointer;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    display: block;
  }
`

interface contentContainerProps {
  headerHeight: number,
}

export const ContentContainer = styled.section<contentContainerProps>`
  z-index: 100;
  position: fixed;
  width: 100vw;
  height: ${props => `calc(100vh - ${props.headerHeight}px)`};
  top: ${props => props.headerHeight}px;
  left: 0;
  max-width: 1400px;
  background: ${themeStyles.colors.white};
  overflow-y: scroll;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    width: calc(100vw - 120px);
    height: ${props => `calc(100vh - 120px)`};
    top: 60px;
    left: 60px;
    border: solid 4px ${themeStyles.colors.grey3};
    border-radius: 16px;
  }

  @media (min-width: 1520px) {
    left: calc((100vw - 1400px) / 2);
  }
`
export const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  padding: 32px 24px 160px;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    gap: 60px;
    padding: 80px;
  }
`

export const MetaDataContainer = styled.div`
`

export const Title = styled(H1)`
  margin: 0 0 4px;
`

export const Subtitle = styled(BodyTextSmall)`
  margin: 0 0 20px;
  color: ${themeStyles.colors.grey1};

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    margin: 0 0 24px;
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 3px;
  background: ${themeStyles.colors.grey3};
  border-radius: 20px;
`