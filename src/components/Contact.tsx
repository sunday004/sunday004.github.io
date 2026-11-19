import { createUseStyles } from 'react-jss';
import { Container } from './ui/Container';
import { Card } from './ui/Card';
import { ButtonLink } from './ui/ButtonLink';
import { contact } from '../data/contact';
import { profile } from '../data/profile';
import type { Theme } from '../theme/tokens';

const useStyles = createUseStyles((theme: Theme) => ({
  card: {
    gap: 20,
  },
  heading: {
    margin: 0,
    fontFamily: theme.fonts.heading,
    fontWeight: 700,
    fontSize: 'clamp(28px, 4vw, 38px)',
    letterSpacing: '-0.01em',
  },
  body: {
    margin: 0,
    color: theme.muted,
    maxWidth: 620,
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
  },
}));

export function Contact() {
  const classes = useStyles();
  const resumeHref = `${import.meta.env.BASE_URL}${profile.resumePath}`;

  return (
    <section id="contact" aria-labelledby="contact-h">
      <Container variant="sectionLast">
        <Card large className={classes.card}>
          <h2 id="contact-h" className={classes.heading}>
            {contact.heading}
          </h2>
          <p className={classes.body}>{contact.body}</p>
          <div className={classes.actions}>
            <ButtonLink
              href={`mailto:${profile.email}`}
              label={profile.email}
              variant="primary"
            />
            <ButtonLink href={profile.linkedin} label="LinkedIn" external />
            <ButtonLink href={profile.github} label="GitHub" external />
            <ButtonLink href={resumeHref} label="Resume (PDF)" />
          </div>
        </Card>
      </Container>
    </section>
  );
}
