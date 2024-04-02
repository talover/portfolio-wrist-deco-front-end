import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	list: {
		display: 'grid',
		gap: theme.spacing(10 / 4),
		padding: 0,
		mafrin: 0,
		listStyle: 'none',
		gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
		[theme.breakpoints.up('md')]: {
			gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
			gap: theme.spacing(15 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			gap: theme.spacing(17 / 4),
		},
	},
	item: {},
	icon: {
		height: theme.spacing(150 / 4),
		borderRadius: theme.spacing(10 / 4),
		background: theme.palette.primary.whiteLight,
		border: '1px solid' + theme.palette.secondary.lighter,
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
		[theme.breakpoints.up('xl')]: {
			height: theme.spacing(200 / 4),
		},
		'& svg': {
			width: theme.spacing(100 / 4),
			height: theme.spacing(100 / 4),
			display: 'block',

			[theme.breakpoints.up('xl')]: {
				width: theme.spacing(150 / 4),
				height: theme.spacing(150 / 4),
			},
		},
	},
	name: {
		padding: theme.spacing(8 / 4, 4 / 4),
		textAlign: 'center',
		lineHeight: 1.25,
		fontWeight: 300,
		fontSize: theme.spacing(12 / 4),
		['& br']: {
			display: 'none',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: theme.spacing(14 / 4),
			padding: theme.spacing(15 / 4, 10 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			padding: theme.spacing(20 / 4),
			fontSize: theme.spacing(16 / 4),
		},
	},
}));
