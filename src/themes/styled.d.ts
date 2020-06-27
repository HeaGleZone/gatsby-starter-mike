import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryAlternative: string;
      secondary: string;
      secondaryAlternative: string;
      links: string;
    };

    backgrounds: {
      primary: string;
      secondary: string;
    };

    linearGradients: {
      primary: string;
    };
  }
}
