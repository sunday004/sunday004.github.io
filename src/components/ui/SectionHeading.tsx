import { createUseStyles } from 'react-jss';
import type { Theme } from '../../theme/tokens';

const useStyles = createUseStyles((theme: Theme) => ({
  group: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  heading: {
    margin: 0,
    fontFamily: theme.fonts.heading,
    fontWeight: 700,
    fontSize: 'clamp(28px, 4vw, 38px)',
    letterSpacing: '-0.01em',
  },
  intro: {
    margin: 0,
    color: theme.muted,
    maxWidth: 640,
  },
}));

interface SectionHeadingProps {
  id: string;
  title: string;
  intro?: string;
}

export function SectionHeading({ id, title, intro }: SectionHeadingProps) {
  const classes = useStyles();

  if (!intro) {
    return (
      <h2 id={id} className={classes.heading}>
        {title}
      </h2>
    );
  }

  return (
    <div className={classes.group}>
      <h2 id={id} className={classes.heading}>
        {title}
      </h2>
      <p className={classes.intro}>{intro}</p>
    </div>
  );
}
