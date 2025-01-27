import { DefaultTheme } from 'styled-components'

const themeStyles: DefaultTheme = {
  colors: {
    primary: 'rgba(146,174,160,1)',
    secondary: 'rgba(169,188,178,1)',
    primaryText: 'rgba(55,50,67,1)',
    grey1: 'rgba(179,179,179,1)',
    grey2: 'rgba(214,214,214,1)',
    grey3: 'rgba(232,232,232,1)',
    grey4: 'rgba(250,250,250,1)',
    white: 'rgba(255,255,255,1)',
    overlayBackground: 'rgba(0,0,0,0.1)',
  },
  shadows: {
    dropShadow: '2px 2px 1.25rem 0 rgba(61, 61, 61, 0.12)',
  },
  breakpoints: {
    tablet: '768px',
    desktop: '1280px',
    desktopXL: '1640px',
  },
};

export default themeStyles;