import { createUseStyles } from 'react-jss';
import { Container } from './ui/Container';
import { Card } from './ui/Card';
import { SectionHeading } from './ui/SectionHeading';
import { ChipList } from './ui/Chip';
import { skillGroups, skillsHeading } from '../data/skills';
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
    gap: 14,
  },
  title: {
    margin: 0,
    fontFamily: theme.fonts.heading,
    fontWeight: 700,
    fontSize: 18,
  },
}));

export function Skills() {
  const classes = useStyles();

  return (
    <section id="skills" aria-labelledby="skills-h">
      <Container variant="section" className={classes.inner}>
        <SectionHeading id="skills-h" title={skillsHeading} />
        <ul className={classes.grid}>
          {skillGroups.map((group) => (
            <Card as="li" key={group.title} className={classes.card}>
              <h3 className={classes.title}>{group.title}</h3>
              <ChipList items={group.items} label={group.title} />
            </Card>
          ))}
        </ul>
      </Container>
    </section>
  );
}
