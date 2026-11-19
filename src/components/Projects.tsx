import { createUseStyles } from 'react-jss';
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { projects, projectsHeading, projectsIntro } from '../data/projects';

const useStyles = createUseStyles({
  inner: {
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
    gap: 20,
  },
});

export function Projects() {
  const classes = useStyles();

  return (
    <section id="projects" aria-labelledby="projects-h">
      <Container variant="sectionFirst" className={classes.inner}>
        <SectionHeading id="projects-h" title={projectsHeading} intro={projectsIntro} />
        <div className={classes.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
