import { createContext, useContext } from 'react';
import type { Theme, ThemeMode } from './tokens';

export interface ThemeContextValue {
  mode: ThemeMode;
  theme: Theme;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useThemeMode(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useThemeMode must be used inside AppThemeProvider');
  return context;
}
