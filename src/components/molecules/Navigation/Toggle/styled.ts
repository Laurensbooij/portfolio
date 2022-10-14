import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import { BodyTextSmall } from 'components/atoms/TextElements'

interface containerProps {
  clientWidth: number,
  showToggle: boolean,
  offsetTop: number,
}

export const Container = styled.div<containerProps>`
  display: flex;
  align-items: center ;
  align-self: center;
  position: relative;
  height: 40px;
  width: calc(100vw - 24px);
  max-width: 500px;
  background: ${themeStyles.colors.white};
  border: 2px solid ${themeStyles.colors.grey3};
  border-radius: 50px;
  box-shadow: ${themeStyles.shadows.dropShadow};
  translate: ${props => props.showToggle ? '0 0' : '0 100%'};
  opacity: ${props => props.showToggle ? '1' : '0'};
  transition: all 400ms ease;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    position: fixed;
    left: ${props => ((props.clientWidth - 500) / 2) + 420}px;
    top: -50px;
    height: 48px;
    translate: -50% 0;
    display: ${props => props.showToggle ? 'flex' : 'none'};
    transition: none;
  }
`

interface activeIndicatorProps {
  toggled?: boolean,
}

export const ActiveIndicator = styled.div<activeIndicatorProps>`
  position: absolute;
  width: 50%;
  height: 100%;
  border-radius: 50px;
  background: ${themeStyles.colors.primary};
  transition: 400ms all ease;
  left: ${props => props.toggled ? `50%` : `0`};
`

interface labelProps {
  active?: boolean,
}

export const Label = styled(BodyTextSmall)<labelProps>`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  color: ${props => props.active ? themeStyles.colors.white : themeStyles.colors.primaryText};
  cursor: pointer;
  transition: 400ms all ease;
`