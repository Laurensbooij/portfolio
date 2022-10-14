import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

import bookIcon from "media/icons/icon-book_light.png"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -40px;
  height: 80px;
  width: 80px;
  background: ${themeStyles.colors.primary};
  border-radius: 50%;

  @media (min-width: ${themeStyles.breakpoints.desktop}) {
    top: -50px;
    height: 100px;
    width: 100px;
  }
`
export const BookIcon = styled.div`
  height: 50%;
  width: 50%;
  background-image: url(${bookIcon.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`