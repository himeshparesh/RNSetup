export interface themeType {
  name: string;
  primaryText: string;
  color: string;
  layoutBg: string;
  containerGray: string;
  cardBg: string;
  accent: string;
  error: string;
  inputBg: string;
  primaryOrange: string;
  trasparent: string;
}

interface themesType {
  light: themeType;
  dark: themeType;
}

// Themes:- Can alter values here. Can only be consumed through Context (see useTheme.js file)
const themes: themesType = {
  light: {
    name: 'light',
    primaryText: '#000',
    color: 'rgb(58, 58, 60)',
    layoutBg: '#f0f0f0',
    containerGray: '#F6F6F6',
    cardBg: '#E5E5E5',
    accent: '#0071ff',
    error: '#B00020',
    inputBg: '#F7F7FC',
    primaryOrange: '#F58223',
    trasparent: '#00000000',
  },
  dark: {
    name: 'dark',
    primaryText: '#FFF',
    color: '#ffffff',
    layoutBg: '#121212',
    containerGray: '#F6F6F6',
    cardBg: '#1e1e1e',
    accent: '#0071ff',
    error: '#B00020',
    inputBg: '#F7F7FC',
    primaryOrange: '#F68E39',
    trasparent: '#00000000',
  },
};

const colors = {
  appBg: '#F5F5F5',
  primaryGreen: '#00A99D',
  black: '#000000',
  white: '#FFFFFF',
  greenLight: '#00A99D1A',
  red: '#cd0000',
  red1: '#FF4A4A',
  gray: '#999999',
};

export {themes, colors};
