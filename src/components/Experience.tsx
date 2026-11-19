import { createUseStyles } from 'react-jss';
import { Container } from './ui/Container';
import { Card } from './ui/Card';
import { SectionHeading } from './ui/SectionHeading';
import { experience, experienceHeading } from '../data/experience';
import type { Theme } from '../theme/tokens';

const useStyles = createUseStyles((theme: Theme) => ({
  inner: {
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
    gap: 20,
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  card: {
    gap: 10,
  },
  meta: {
    margin: 0,
    fontSize: 13,
    color: theme.muted,
  },
  role: {
    margin: 0,
    fontFamily: theme.fonts.heading,
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 1.25,
  },
  text: {
    margin: 0,
    color: theme.muted,
    fontSize: 15,
  },
}));

export function Experience() {
  const classes = useStyles();

  return (
    <section id="experience" aria-labelledby="exp-h">
      <Container variant="section" className={classes.inner}>
        <SectionHeading id="exp-h" title={experienceHeading} />
        <ul className={classes.grid}>
          {experience.map((item) => (
            <Card as="li" key={item.role} className={classes.card}>
              <p className={classes.meta}>{item.meta}</p>
              <h3 className={classes.role}>{item.role}</h3>
              <p className={classes.text}>{item.description}</p>
            </Card>
          ))}
        </ul>
      </Container>
    </section>
  );
}
