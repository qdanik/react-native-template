import React, { memo, useMemo, useState } from 'react';

import { ThemeVariant } from '../../../core';
import { ThemeContext, ThemeContextType, ThemeProps } from './ThemeContext.types';

export const ThemeProvider: React.FC<ThemeProps> = memo(({ children }) => {
  const [theme, setTheme] = useState(ThemeVariant.Default);
  const value = useMemo<ThemeContextType>(() => [theme, setTheme], [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
});
