import { createUseStyles } from 'react-jss';
import type { Theme } from '../../theme/tokens';

const useStyles = createUseStyles((theme: Theme) => ({
  base: {
    minHeight: 48,
    borderRadius: 10,
    fontWeight: 600,
    fontSize: 17,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 24px',
    '&:hover': { opacity: 0.82 },
  },
  primary: {
    background: theme.accent,
    color: theme.onAccent,
  },
  secondary: {
    border: `1px solid ${theme.line}`,
    color: theme.fg,
    background: 'transparent',
  },
  quiet: {
    color: theme.accent,
    padding: '0 12px',
  },
}));

export type ButtonVariant = 'primary' | 'secondary' | 'quiet';

interface ButtonLinkProps {
  href: string;
  label: string;
  variant?: ButtonVariant;
  /** Adds target=_blank plus rel=noopener noreferrer. */
  external?: boolean;
}

export function ButtonLink({
  href,
  label,
  variant = 'secondary',
  external = false,
}: ButtonLinkProps) {
  const classes = useStyles();
  const externalProps = external
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : undefined;

  return (
    <a className={`${classes.base} ${classes[variant]}`} href={href} {...externalProps}>
      {label}
    </a>
  );
}
