import { createUseStyles } from 'react-jss';
import { Container } from './ui/Container';
import { Eyebrow } from './ui/Eyebrow';
import { focusAreas, focusHeading } from '../data/focusAreas';
import type { Theme } from '../theme/tokens';

const useStyles = createUseStyles((theme: Theme) => ({
  section: {
    borderTop: `1px solid ${theme.line}`,
    borderBottom: `1px solid ${theme.line}`,
    background: theme.bg2,
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(230px, 100%), 1fr))',
    gap: '24px 16px',
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    minWidth: 0,
  },
  title: {
    margin: 0,
    fontFamily: theme.fonts.heading,
    fontWeight: 700,
    fontSize: 20,
  },
  text: {
    margin: 0,
    color: theme.muted,
    fontSize: 15,
  },
}));

export function FocusStrip() {
  const classes = useStyles();

  return (
    <section className={classes.section} aria-labelledby="focus-h">
      <Container variant="band" className={classes.inner}>
        <Eyebrow as="h2" id="focus-h" tone="muted">
          {focusHeading}
        </Eyebrow>
        <ul className={classes.grid}>
          {focusAreas.map((area) => (
            <li key={area.title} className={classes.item}>
              <h3 className={classes.title}>{area.title}</h3>
              <p className={classes.text}>{area.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
