import { createUseStyles } from 'react-jss';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FocusStrip } from './components/FocusStrip';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import type { Theme } from './theme/tokens';

const useStyles = createUseStyles((theme: Theme) => ({
  '@global': {
    body: {
      background: theme.bg,
      color: theme.fg,
      fontFamily: theme.fonts.body,
      fontSize: 17,
      lineHeight: 1.6,
    },
    'a:focus-visible, button:focus-visible': {
      outline: `3px solid ${theme.accent}`,
      outlineOffset: 3,
    },
  },
  skipLink: {
    position: 'absolute',
    left: -9999,
    top: 0,
    zIndex: 10,
    minHeight: 44,
    padding: '0 16px',
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: 10,
    background: theme.accent,
    color: theme.onAccent,
    fontWeight: 600,
    textDecoration: 'none',
    '&:focus': {
      left: 12,
      top: 12,
    },
  },
}));

export function App() {
  const classes = useStyles();

  return (
    <div id="top">
      <a className={classes.skipLink} href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <FocusStrip />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
