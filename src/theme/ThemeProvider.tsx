import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider as JssThemeProvider } from 'react-jss';
import { themes, type ThemeMode } from './tokens';
import { ThemeContext, type ThemeContextValue } from './themeContext';

const STORAGE_KEY = 'theme';

function isMode(value: string | null): value is ThemeMode {
  return value === 'dark' || value === 'light';
}

/**
 * Read the mode synchronously so the first React paint matches what the
 * inline script in index.html already applied to <html data-theme>.
 */
function readInitialMode(): ThemeMode {
  const attr = document.documentElement.getAttribute('data-theme');
  if (isMode(attr)) return attr;

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isMode(saved)) return saved;
  } catch {
    /* localStorage unavailable */
  }

  if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
  return 'dark';
}

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(readInitialMode);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', mode);
    root.style.backgroundColor = themes[mode].bg;
    root.style.colorScheme = mode;
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* ignore write failures (private mode, full quota) */
    }
  }, [mode]);

  const toggle = useCallback(() => {
    setMode((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({ mode, theme: themes[mode], toggle }),
    [mode, toggle],
  );

  return (
    <ThemeContext.Provider value={value}>
      <JssThemeProvider theme={themes[mode]}>{children}</JssThemeProvider>
    </ThemeContext.Provider>
  );
}
