import styled from 'styled-components'

import themeStyles from 'utilities/themeStyles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  * {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    b {
      color: ${themeStyles.colors.secondary};
    }
  }
`

export const Ul = styled.ul`
  font-family: 'Montserrat', Roboto, Helvetica Neue, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  padding-left: 20px;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 5px;
    position: relative;
  }

  li b {
    color: ${themeStyles.colors.primaryText};
  }

  li:before {
    content: "";
    display: inline-block;
    position: absolute;
    left: -20px;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: ${themeStyles.colors.secondary};
  }
`

