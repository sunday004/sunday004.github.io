import { createUseStyles } from 'react-jss';
import type { Theme } from '../../theme/tokens';

const useStyles = createUseStyles((theme: Theme) => ({
  chip: {
    margin: 0,
    padding: '4px 10px',
    border: `1px solid ${theme.line}`,
    borderRadius: 999,
    fontSize: 13,
    color: theme.muted,
    listStyle: 'none',
  },
}));

export function Chip({ label }: { label: string }) {
  const classes = useStyles();
  return <li className={classes.chip}>{label}</li>;
}

const useListStyles = createUseStyles({
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  pinned: {
    marginTop: 'auto',
  },
});

interface ChipListProps {
  items: string[];
  label: string;
  /** Push the list to the bottom of a flex card. */
  pinned?: boolean;
}

export function ChipList({ items, label, pinned = false }: ChipListProps) {
  const classes = useListStyles();
  return (
    <ul className={[classes.list, pinned ? classes.pinned : null].filter(Boolean).join(' ')}
        aria-label={label}>
      {items.map((item) => (
        <Chip key={item} label={item} />
      ))}
    </ul>
  );
}
