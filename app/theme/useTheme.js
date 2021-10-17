/**
 * For Dark/Light Mode
 * @exports ThemeContext, ThemeProvider, useTheme
 */

import React, {useState, createContext, useContext} from 'react';

// Import preconfigured themes from theme file
import {themes} from './theme';

// Context
export const ThemeContext = createContext(null);

// Provider to be used in index/App/or top of any parent
export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

// useTheme hook for easy access to theme and setTheme
export const useTheme = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = v => {
    setTheme(v ? themes.dark : themes.light);
  };

  return {theme, toggleTheme};
};
