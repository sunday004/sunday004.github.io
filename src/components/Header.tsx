import { createUseStyles } from 'react-jss';
import { Container } from './ui/Container';
import { navLinks, profile } from '../data/profile';
import { useThemeMode } from '../theme/themeContext';
import type { Theme } from '../theme/tokens';

const useStyles = createUseStyles((theme: Theme) => ({
  header: {
    borderBottom: `1px solid ${theme.line}`,
  },
  inner: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '8px 24px',
  },
  brand: {
    fontFamily: theme.fonts.heading,
    fontWeight: 700,
    fontSize: 20,
    color: theme.fg,
    textDecoration: 'none',
    minHeight: 44,
    display: 'inline-flex',
    alignItems: 'center',
    '&:hover': { opacity: 0.82 },
  },
  nav: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '0 20px',
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '0 20px',
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  link: {
    color: theme.muted,
    textDecoration: 'none',
    fontSize: 15,
    minHeight: 44,
    display: 'inline-flex',
    alignItems: 'center',
    '&:hover': { opacity: 0.82 },
  },
  toggle: {
    minHeight: 44,
    padding: '0 16px',
    borderRadius: 999,
    border: `1px solid ${theme.line}`,
    background: 'transparent',
    color: theme.fg,
    fontFamily: 'inherit',
    fontSize: 14,
    cursor: 'pointer',
    '&:hover': { opacity: 0.82 },
  },
}));

export function Header() {
  const classes = useStyles();
  const { mode, toggle } = useThemeMode();

  return (
    <header className={classes.header}>
      <Container variant="header" className={classes.inner}>
        <a className={classes.brand} href="#top">
          {profile.name}
        </a>
        <nav className={classes.nav} aria-label="Main">
          <ul className={classes.list}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className={classes.link} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={classes.toggle}
            onClick={toggle}
            aria-label="Switch between light and dark mode"
          >
            {mode === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
        </nav>
      </Container>
    </header>
  );
}
