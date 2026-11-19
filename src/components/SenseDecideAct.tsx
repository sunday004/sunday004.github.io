import { createUseStyles } from 'react-jss';
import { Container } from './ui/Container';
import { Card } from './ui/Card';
import { SectionHeading } from './ui/SectionHeading';
import { loopHeading, loopIntro, loopSteps } from '../data/loop';
import type { Theme } from '../theme/tokens';

const useStyles = createUseStyles((theme: Theme) => ({
  inner: {
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
    gap: 16,
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  card: {
    gap: 8,
  },
  step: {
    margin: 0,
    fontFamily: theme.fonts.heading,
    fontWeight: 700,
    color: theme.accent,
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

export function SenseDecideAct() {
  const classes = useStyles();

  return (
    <section aria-labelledby="flow-h">
      <Container variant="section" className={classes.inner}>
        <SectionHeading id="flow-h" title={loopHeading} intro={loopIntro} />
        <ul className={classes.grid}>
          {loopSteps.map((item) => (
            <Card as="li" key={item.step} className={classes.card}>
              <p className={classes.step} aria-hidden="true">
                {item.step}
              </p>
              <h3 className={classes.title}>{item.title}</h3>
              <p className={classes.text}>{item.description}</p>
            </Card>
          ))}
        </ul>
      </Container>
    </section>
  );
}
