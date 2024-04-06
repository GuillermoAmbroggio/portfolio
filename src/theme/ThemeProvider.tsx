import React, { ReactNode } from 'react';
import { ThemeProvider as StyleThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { Wrapper } from './wrapper/Wrapper.style';
import useStore from '../hooks/useStore';
import useDispatch from '../hooks/useDispatch';

interface ThemeProvider {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProvider> = ({ children }) => {
  const dispatch = useDispatch();

  if (localStorage.getItem('modeTheme')) {
    dispatch({ type: 'SET_DARK_THEME' });
  }
  if (localStorage.getItem('language')) {
    dispatch({ type: 'SET_EN_LANGUAGE' });
  }
  const { modeTheme } = useStore();

  return (
    <StyleThemeProvider theme={modeTheme === 'light' ? lightTheme : darkTheme}>
      <Wrapper />
      {children}
    </StyleThemeProvider>
  );
};

export default ThemeProvider;
