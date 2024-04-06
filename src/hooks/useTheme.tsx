import { useContext } from 'react';
import { ThemeContext, DefaultTheme } from 'styled-components';

const useTheme: () => DefaultTheme = () => {
  const theme = useContext(ThemeContext);
  if (theme === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
};

export default useTheme;
