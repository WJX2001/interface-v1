import { ThemeProvider, useMediaQuery } from '@mui/material';
import React, { ReactNode, useMemo, useState } from 'react';
import { MODE } from '../src/types/enum';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const AppGlobalStyles = ({ children }: { children: ReactNode }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<MODE>(prefersDarkMode ? 'dark' : 'light');
  const theme = useMemo(() => {});

  return <ThemeProvider></ThemeProvider>;
};

export default AppGlobalStyles;
