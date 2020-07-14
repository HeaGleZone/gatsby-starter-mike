import { useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';

import { mainTheme } from '../themes/main-theme';
import { secondaryTheme } from '../themes/secondary-theme';

interface Theme {
  [key: string]: DefaultTheme;
}

const themes: Theme = {
  main: secondaryTheme,
  dark: mainTheme,
};

export const useTheme = (newTheme?: 'main' | 'dark'): DefaultTheme => {
  const [currentTheme, setTheme] = useState(getSavedTheme() || 'main');

  function getSavedTheme() {
    return typeof window !== undefined
      ? window.localStorage.getItem('theme')
      : 'main';
  }

  useEffect(() => {
    if (newTheme) {
      window.localStorage.setItem('theme', newTheme);
      setTheme(newTheme);
    }
  }, [newTheme]);

  return themes[currentTheme];
};
