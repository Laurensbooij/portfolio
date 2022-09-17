import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import { H4, BodyText, BodyTextSmall } from 'components/atoms/TextElements'

interface containerProps {
  indented: boolean,
}

export const Container = styled.div<containerProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  transform: ${props => props.indented ? `translateX(24px)` : `translateX(0)`};
  width: ${props => props.indented ? `calc(100% - 24px)` : `100%`};
  padding: ${props => props.indented ? `8px 0` : `0`};

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    gap: 12px;
  }


  &:before {
    display: ${props => props.indented ? `inline-block` : `none`};
    content: "";
    position: absolute;
    top: 0;
    left: -24px;
    width: 4px;
    height: 100%;
    border-radius: 20px;
    background: ${themeStyles.colors.grey2};
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const Title = styled(H4)`
  margin: 0;
`

export const Subtitle = styled(BodyTextSmall)`
  margin: 0;
  color: ${themeStyles.colors.grey1};
`

export const Text = styled(BodyText)`
  margin: 0;
`