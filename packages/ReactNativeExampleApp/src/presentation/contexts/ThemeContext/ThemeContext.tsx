import React, { memo, useMemo, useState } from 'react';

import { ThemeVariant } from '../../../core';
import { ThemeContext, ThemeContextType, ThemeProps } from './ThemeContext.types';

const ThemeProviderComponent: React.FC<ThemeProps> = ({ children }) => {
  const [theme, setTheme] = useState(ThemeVariant.Default);
  const value = useMemo<ThemeContextType>(() => [theme, setTheme], [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const ThemeProvider = memo<ThemeProps>(ThemeProviderComponent);
