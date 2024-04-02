import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	section: {
		fontWeight: 300,
		fontSize: theme.spacing(14 / 4),
		color: theme.palette.secondary.light,
		lineHeight: 1.25,
		padding: theme.spacing(15 / 4),
		borderRadius: theme.spacing(10 / 4),
		border: `1px solid ${theme.palette.secondary.lighter}`,
		background: theme.palette.primary.whiteLight,
		marginBottom: theme.spacing(10 / 4),
		[theme.breakpoints.up('lg')]: {
			marginBottom: theme.spacing(20 / 4),
			padding: theme.spacing(20 / 4),
			fontSize: theme.spacing(16 / 4),
		},
		'& p': {
			margin: '0 0 1em',
			'&:last-child': {
				margin: 0,
			},
		},
	},
	title: {
		margin: `0 0 ${theme.spacing(10 / 4)}`,
		fontSize: theme.spacing(16 / 4),
		color: theme.palette.secondary.light,
		[theme.breakpoints.up('md')]: {
			marginBottom: theme.spacing(20 / 4),
			fontSize: theme.spacing(20 / 4),
		},
	},
	twoColumns: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
		padding: 0,
	},
	twoColumnsItem: {
		padding: theme.spacing(7 / 4, 9 / 4),
		'&:first-child': {
			borderRight: `1px solid ${theme.palette.secondary.lighter}`,
		},
	},
}));
