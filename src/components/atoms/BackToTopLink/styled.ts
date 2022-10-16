import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import { BodyTextSmall } from 'components/atoms/TextElements'

import chevronIcon from 'media/icons/icon-chevron-grey1.png'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`

export const ScrollButton = styled(BodyTextSmall)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 160px;
  color: ${themeStyles.colors.grey1};
  cursor: pointer;

  &:after {
    content: "";
    display: inline-block;
    align-self: center;
    height: 12px;
    width: 12px;
    margin-left: 8px;
    rotate: -90deg;
    background: url(${chevronIcon.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`