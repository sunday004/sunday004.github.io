import { createUseStyles } from 'react-jss';
import type { ReactNode } from 'react';
import type { Theme } from '../../theme/tokens';

/**
 * The 1120px / 24px content column shared by every band of the page.
 * `variant` carries the vertical rhythm from the reference design so the
 * values live in one place instead of being repeated per section.
 */
export type ContainerVariant =
  | 'header'
  | 'hero'
  | 'band'
  | 'sectionFirst'
  | 'section'
  | 'sectionLast'
  | 'footer';

const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    maxWidth: theme.maxWidth,
    margin: '0 auto',
    paddingLeft: theme.sidePadding,
    paddingRight: theme.sidePadding,
    boxSizing: 'border-box',
  },
  header: { paddingTop: 12, paddingBottom: 12 },
  hero: { paddingTop: 72, paddingBottom: 64 },
  band: { paddingTop: 40, paddingBottom: 40 },
  sectionFirst: { paddingTop: 72, paddingBottom: 24 },
  section: { paddingTop: 56, paddingBottom: 24 },
  sectionLast: { paddingTop: 56, paddingBottom: 72 },
  footer: { paddingTop: 24, paddingBottom: 24 },
}));

interface ContainerProps {
  variant: ContainerVariant;
  className?: string;
  children: ReactNode;
}

export function Container({ variant, className, children }: ContainerProps) {
  const classes = useStyles();
  return (
    <div className={[classes.container, classes[variant], className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
}
