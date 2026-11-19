import { createUseStyles } from 'react-jss';
import { profile } from '../data/profile';
import type { Theme } from '../theme/tokens';

const SIZE = 260;

const useStyles = createUseStyles((theme: Theme) => ({
  wrap: {
    flex: '0 1 280px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    margin: '0 auto',
  },
  frame: {
    width: SIZE,
    height: SIZE,
    maxWidth: '100%',
    borderRadius: '50%',
    background: theme.card,
    border: `2px solid ${theme.line}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.fonts.heading,
    fontWeight: 700,
    fontSize: 72,
    color: theme.accent,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  note: {
    margin: 0,
    fontSize: 13,
    color: theme.muted,
  },
}));

/**
 * Shows the "SO" monogram until `profile.headshotSrc` is set; then it renders
 * that image instead, with no other changes needed.
 */
export function Headshot() {
  const classes = useStyles();
  const { headshotSrc, headshotAlt, initials, headshotNote } = profile;

  if (headshotSrc) {
    return (
      <div className={classes.wrap}>
        <div className={classes.frame}>
          <img
            className={classes.image}
            src={`${import.meta.env.BASE_URL}${headshotSrc}`}
            alt={headshotAlt}
            width={SIZE}
            height={SIZE}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={classes.wrap}>
      <div className={classes.frame} role="img" aria-label="Headshot placeholder">
        <span aria-hidden="true">{initials}</span>
      </div>
      <p className={classes.note}>{headshotNote}</p>
    </div>
  );
}
