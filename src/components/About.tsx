import { createUseStyles } from 'react-jss';
import { Container } from './ui/Container';
import { Card } from './ui/Card';
import { SectionHeading } from './ui/SectionHeading';
import { aboutHeading, aboutParagraphs, education, recognition } from '../data/recognition';
import type { Theme } from '../theme/tokens';

const useStyles = createUseStyles((theme: Theme) => ({
  inner: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 40,
  },
  copy: {
    flex: '1 1 480px',
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  paragraph: {
    margin: 0,
    color: theme.muted,
  },
  aside: {
    flex: '1 1 320px',
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    alignSelf: 'flex-start',
  },
  cardTight: {
    gap: 6,
  },
  cardLoose: {
    gap: 10,
  },
  cardHeadingTight: {
    margin: '0 0 6px',
    fontFamily: theme.fonts.heading,
    fontWeight: 700,
    fontSize: 18,
  },
  cardHeadingLoose: {
    margin: '0 0 4px',
    fontFamily: theme.fonts.heading,
    fontWeight: 700,
    fontSize: 18,
  },
  degree: {
    margin: 0,
    fontWeight: 600,
  },
  detail: {
    margin: 0,
    color: theme.muted,
    fontSize: 15,
  },
  list: {
    margin: 0,
    paddingLeft: 20,
    color: theme.muted,
    fontSize: 15,
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
}));

export function About() {
  const classes = useStyles();

  return (
    <section id="about" aria-labelledby="about-h">
      <Container variant="section" className={classes.inner}>
        <div className={classes.copy}>
          <SectionHeading id="about-h" title={aboutHeading} />
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className={classes.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className={classes.aside}>
          <Card className={classes.cardTight}>
            <h3 className={classes.cardHeadingTight}>{education.heading}</h3>
            <p className={classes.degree}>{education.degree}</p>
            <p className={classes.detail}>{education.detail}</p>
          </Card>
          <Card className={classes.cardLoose}>
            <h3 className={classes.cardHeadingLoose}>{recognition.heading}</h3>
            <ul className={classes.list}>
              {recognition.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
