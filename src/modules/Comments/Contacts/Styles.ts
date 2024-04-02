import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	section: {},
	list: {
		display: 'grid',
		gap: theme.spacing(20 / 4),
	},
	item: {
		display: 'grid',
		gap: theme.spacing(10 / 4),
		gridTemplateColumns: `${theme.spacing(24 / 4)} minmax(0, 1fr)`,
		[theme.breakpoints.up('lg')]: {
			gap: theme.spacing(20 / 4),
		},
	},
	icon: {
		width: theme.spacing(24 / 4),
		height: theme.spacing(24 / 4),
		'& svg': {
			display: 'block',
			width: '100%',
			height: '100%',
			fill: 'currentColor',
		},
	},
	name: {
		fontSize: theme.spacing(14 / 4),
		color: theme.palette.secondary.light,
		paddingTop: theme.spacing(4 / 4),
		[theme.breakpoints.up('lg')]: {
			fontSize: theme.spacing(16 / 4),
			paddingTop: theme.spacing(2 / 4),
		},
		'& a': {
			color: 'inherit',
			textDecoration: 'none',
		},
	},
	languageList: {
		padding: 0,
		margin: `${theme.spacing(10 / 4)} 0 0`,
		listStyle: 'none',
		display: 'flex',
		flexWrap: 'wrap',
		columnGap: theme.spacing(20 / 4),
		rowGap: theme.spacing(20 / 4),
	},
}));
