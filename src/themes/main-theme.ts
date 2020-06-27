import { DefaultTheme } from 'styled-components';

const mainTheme: DefaultTheme = {
  colors: {
    primary: 'white',
    primaryAlternative: 'black',
    secondary: 'rgba(255, 255, 255, 0.8)',
    secondaryAlternative: 'rgba(0, 0, 0, 0.8)',
    links: 'red',
  },

  backgrounds: {
    primary: '#111d5e',
    secondary: '#c70039',
  },

  linearGradients: {
    primary:
      'linear-gradient(to bottom, #111d5e, #511767, #820062, #aa0052, #c70039)',
  },
};

export { mainTheme };
