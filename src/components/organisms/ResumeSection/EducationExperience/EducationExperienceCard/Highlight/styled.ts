import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import { StaticImageData } from 'next/image'

import { BodyText } from 'components/atoms/TextElements'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

interface iconProps {
  iconUrl: string,
}

export const Icon = styled.div<iconProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${themeStyles.colors.secondary};
  background-image: url(${props => props.iconUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    width: 40px;
    height: 40px;
  }
`

export const Text = styled(BodyText)`
  font-weight: 600;
  margin: 0;
  color: ${themeStyles.colors.secondary};

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    font-size: 1.125rem;
  }
`