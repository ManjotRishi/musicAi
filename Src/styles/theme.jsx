import React, { createContext, useContext, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';

const light = { bg: '#fff', text: '#111' };
const dark = { bg: '#111', text: '#fff' };

const ThemeCtx = createContext({
  pref: 'system',
  setPref: () => {},
  theme: light,
});

export function ThemeProvider({ children }) {
  const system = useColorScheme(); 
  const [pref, setPref] = useState('system');

  const mode = pref === 'system' ? (system ?? 'light') : pref;
  const theme = mode === 'dark' ? dark : light;

  console.log('Theme mode:', mode,"====ss>>>",theme);

  const value = useMemo(() => {
    return { pref, setPref, theme };
  }, [pref, theme]);

  return (
    <ThemeCtx.Provider value={value}>
      {children}
    </ThemeCtx.Provider>
  );
}

export const useAppTheme = () => useContext(ThemeCtx);