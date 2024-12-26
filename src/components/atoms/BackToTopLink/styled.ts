import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import { BodyTextSmall } from 'components/atoms/TextElements'

import chevronIcon from 'media/icons/icon-chevron-grey1.png'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
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
    height: 0.75rem;
    width: 0.75rem;
    margin-left: 0.5rem;
    rotate: -90deg;
    background: url(${chevronIcon.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`