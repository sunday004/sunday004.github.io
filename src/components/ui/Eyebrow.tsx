import { createUseStyles } from 'react-jss';
import type { Theme } from '../../theme/tokens';

/**
 * The small uppercase label used for the hero eyebrow, the focus-strip
 * heading, and project kickers. `tone` picks accent or muted text.
 */
const useStyles = createUseStyles((theme: Theme) => ({
  base: {
    margin: 0,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontSize: 13,
  },
  small: {
    fontSize: 12,
    letterSpacing: '0.08em',
  },
  accent: { color: theme.accent },
  muted: { color: theme.muted },
}));

interface EyebrowProps {
  children: string;
  tone?: 'accent' | 'muted';
  /** 12px / 0.08em variant used by project kickers. */
  small?: boolean;
  as?: 'p' | 'h2';
  id?: string;
}

export function Eyebrow({ children, tone = 'accent', small = false, as = 'p', id }: EyebrowProps) {
  const classes = useStyles();
  const Tag = as;
  return (
    <Tag
      id={id}
      className={[classes.base, small ? classes.small : null, classes[tone]]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  );
}
