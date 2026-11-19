import { createUseStyles } from 'react-jss';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import type { Theme } from '../../theme/tokens';

const useStyles = createUseStyles((theme: Theme) => ({
  card: {
    background: theme.card,
    border: `1px solid ${theme.line}`,
    borderRadius: theme.radius,
    padding: theme.cardPadding,
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
  },
  large: {
    borderRadius: theme.radiusLarge,
    padding: '40px 32px',
  },
}));

interface CardProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  /** Rendered element; use 'article' for project cards. */
  as?: ElementType;
  /** Large variant: 20px radius and roomier padding (the contact card). */
  large?: boolean;
  children: ReactNode;
}

export function Card({ as: Tag = 'div', large = false, className, children, ...rest }: CardProps) {
  const classes = useStyles();
  return (
    <Tag
      className={[classes.card, large ? classes.large : null, className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  );
}
