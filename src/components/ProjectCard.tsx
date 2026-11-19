import { createUseStyles } from 'react-jss';
import { Card } from './ui/Card';
import { Chip } from './ui/Chip';
import { Eyebrow } from './ui/Eyebrow';
import type { Project } from '../data/projects';
import type { Theme } from '../theme/tokens';

const useStyles = createUseStyles((theme: Theme) => ({
  card: {
    gap: 14,
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: 10,
    border: `1px solid ${theme.line}`,
  },
  title: {
    margin: 0,
    fontFamily: theme.fonts.heading,
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 1.25,
  },
  highlight: {
    margin: 0,
    fontFamily: theme.fonts.heading,
    fontWeight: 700,
    fontSize: 15,
  },
  description: {
    margin: 0,
    color: theme.muted,
    fontSize: 15,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 'auto',
    marginBottom: 0,
    padding: 0,
    listStyle: 'none',
  },
}));

export function ProjectCard({ project }: { project: Project }) {
  const classes = useStyles();
  const titleId = `project-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <Card as="article" className={classes.card} aria-labelledby={titleId}>
      {project.image ? (
        <img
          className={classes.image}
          src={`${import.meta.env.BASE_URL}${project.image.src}`}
          alt={project.image.alt}
          loading="lazy"
        />
      ) : null}
      <Eyebrow small>{project.kicker}</Eyebrow>
      <h3 id={titleId} className={classes.title}>
        {project.title}
      </h3>
      <p className={classes.highlight}>{project.highlight}</p>
      <p className={classes.description}>{project.description}</p>
      <ul className={classes.tags} aria-label={`${project.title} technologies`}>
        {project.tags.map((tag) => (
          <Chip key={tag} label={tag} />
        ))}
      </ul>
    </Card>
  );
}
