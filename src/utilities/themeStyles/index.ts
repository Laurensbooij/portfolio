import { DefaultTheme } from 'styled-components';

const gradientSetAngleHandler = (angle: number) => {
  return `linear-gradient(${angle}deg, rgba(95,36,221,1) 0%, rgba(101,81,236,1) 100%)`
}

const themeStyles: DefaultTheme = {
  colors: {
    primary: 'rgba(101,81,236,1)',
    secondary: 'rgba(246,166,0,1)',
    gradient: 'linear-gradient(5deg, rgba(95,36,221,1) 0%, rgba(101,81,236,1) 100%)',
    gradientWithCustomAngle: gradientSetAngleHandler,
    primaryText: 'rgba(55,50,67,1)',
    grey1: 'rgba(179,179,179,1)',
    grey2: 'rgba(214,214,214,1)',
    grey3: 'rgba(232,232,232,1)',
    grey4: 'rgba(250,250,250,1)',
    white: 'rgba(255,255,255,1)',
    overlayBackground: 'rgba(0,0,0,0.1)',
  },
  shadows: {
    dropShadow: '2px 2px 20px 0 rgba(61, 61, 61, 0.12)',
  },
  breakpoints: {
    tablet: '768px',
    desktop: '1280px',
  },
};

export default themeStyles;