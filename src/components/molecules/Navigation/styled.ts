import styled from "styled-components"

import themeStyles from "utilities/themeStyles"

import { BodyTextSmall } from 'components/atoms/TextElements'

interface containerProps {
  offsetTop: number,
}

export const Container = styled.nav<containerProps>`
  z-index: 10;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 1.25rem 0.75rem 0.75rem;
  background: linear-gradient(180deg, rgba(250,250,250,0) 0%, rgba(250,250,250,1) 45%);

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    gap: 1rem;
    top: calc(80px + ${props => props.offsetTop}px);
    left: 0;
    width: 244px;
    padding: 0;
    background: none;
    translate: -0.25rem 0;
  }

  @media (min-width: ${themeStyles.breakpoints.desktopXL}) {
    left: calc((100vw - 1400px) / 2);
    translate: 0 0;
  }
`

export const Label = styled(BodyTextSmall)`
  display: none;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    color: ${themeStyles.colors.grey1};
    padding: 0 24px 0 1.75rem;

    &:before, &:after {
      content: "";
      width: -webkit-fill-available;
      height: 2px;
      background: ${themeStyles.colors.grey3};
    }
  }
`

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0 0.75rem;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    grid-gap: 1.25rem 0;
  }
`
