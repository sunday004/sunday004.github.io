export type ThemeMode = 'dark' | 'light';

export interface Theme {
  mode: ThemeMode;
  /** Page background. */
  bg: string;
  /** Alternate band background (focus strip). */
  bg2: string;
  /** Card surface. */
  card: string;
  /** Hairline borders. */
  line: string;
  /** Primary text. */
  fg: string;
  /** Secondary text. */
  muted: string;
  /** Brand accent. */
  accent: string;
  /** Text on an accent background. */
  onAccent: string;

  /** Layout + type scale shared by both modes. */
  maxWidth: number;
  sidePadding: number;
  radius: number;
  radiusLarge: number;
  cardPadding: number;
  fonts: {
    body: string;
    heading: string;
  };
}

const shared = {
  maxWidth: 1120,
  sidePadding: 24,
  radius: 16,
  radiusLarge: 20,
  cardPadding: 24,
  fonts: {
    body: "'Inter', system-ui, sans-serif",
    heading: "'Space Grotesk', sans-serif",
  },
} as const;

export const darkTheme: Theme = {
  mode: 'dark',
  bg: '#1a1a2e',
  bg2: '#15152a',
  card: '#222244',
  line: '#37375f',
  fg: '#eceef8',
  muted: '#b4b6cf',
  accent: '#5eead4',
  onAccent: '#0b1f1d',
  ...shared,
};

export const lightTheme: Theme = {
  mode: 'light',
  bg: '#f7f8fc',
  bg2: '#eceef7',
  card: '#ffffff',
  line: '#d5d8e8',
  fg: '#16162b',
  muted: '#4b4e6b',
  accent: '#0f766e',
  onAccent: '#ffffff',
  ...shared,
};

export const themes: Record<ThemeMode, Theme> = {
  dark: darkTheme,
  light: lightTheme,
};
