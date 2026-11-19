import { createUseStyles } from 'react-jss';
import { Container } from './ui/Container';
import { profile } from '../data/profile';
import type { Theme } from '../theme/tokens';

const useStyles = createUseStyles((theme: Theme) => ({
  footer: {
    borderTop: `1px solid ${theme.line}`,
  },
  inner: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
    color: theme.muted,
    fontSize: 14,
  },
  link: {
    color: theme.muted,
    textDecoration: 'none',
    '&:hover': { opacity: 0.82 },
  },
}));

export function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container variant="footer" className={classes.inner}>
        <span>{profile.copyright}</span>
        <a className={classes.link} href="#top">
          Back to top
        </a>
      </Container>
    </footer>
  );
}
