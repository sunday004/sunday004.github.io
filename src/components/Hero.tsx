import { createUseStyles } from 'react-jss';
import { Container } from './ui/Container';
import { ButtonLink } from './ui/ButtonLink';
import { Eyebrow } from './ui/Eyebrow';
import { Headshot } from './Headshot';
import { profile } from '../data/profile';
import type { Theme } from '../theme/tokens';

const useStyles = createUseStyles((theme: Theme) => ({
  inner: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 48,
  },
  copy: {
    flex: '1 1 480px',
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  name: {
    margin: 0,
    fontFamily: theme.fonts.heading,
    fontWeight: 700,
    fontSize: 'clamp(40px, 7vw, 68px)',
    lineHeight: 1.05,
    letterSpacing: '-0.02em',
  },
  headline: {
    margin: 0,
    fontFamily: theme.fonts.heading,
    fontWeight: 500,
    fontSize: 'clamp(22px, 3vw, 30px)',
    lineHeight: 1.3,
    maxWidth: 660,
  },
  subline: {
    margin: 0,
    color: theme.muted,
    maxWidth: 620,
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 8,
  },
}));

export function Hero() {
  const classes = useStyles();
  const resumeHref = `${import.meta.env.BASE_URL}${profile.resumePath}`;

  return (
    <section aria-labelledby="hero-name">
      <Container variant="hero" className={classes.inner}>
        <div className={classes.copy}>
          <Eyebrow>{profile.eyebrow}</Eyebrow>
          <h1 id="hero-name" className={classes.name}>
            {profile.name}
          </h1>
          <p className={classes.headline}>{profile.headline}</p>
          <p className={classes.subline}>{profile.subline}</p>
          <div className={classes.actions}>
            <ButtonLink href="#projects" label="View projects" variant="primary" />
            <ButtonLink href={resumeHref} label="Download resume" variant="secondary" />
            <ButtonLink href="#contact" label="Get in touch" variant="quiet" />
          </div>
        </div>
        <Headshot />
      </Container>
    </section>
  );
}
