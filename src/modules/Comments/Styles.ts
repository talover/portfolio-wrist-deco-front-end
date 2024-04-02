import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	section: {
		marginBottom: theme.spacing(40 / 4),
		marginTop: theme.spacing(12 / 4),
		paddingTop: theme.spacing(12 / 4),
		borderTop: `1px solid ${theme.palette.secondary.lighter}`,
		[theme.breakpoints.up('lg')]: {
			paddingTop: theme.spacing(20 / 4),
			marginBottom: theme.spacing(72 / 4),
		},
	},
	row: {
		display: 'grid',
		[theme.breakpoints.up('md')]: {
			gridTemplateColumns: `${theme.spacing(260 / 4)} minmax(0, 1fr)`,
			gap: theme.spacing(10 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			gridTemplateColumns: `${theme.spacing(298 / 4)} minmax(0, 1fr)`,
			gap: theme.spacing(20 / 4),
		},
	},
	sideBar: {
		[theme.breakpoints.down('md')]: {
			order: 1,
			marginTop: theme.spacing(15 / 4),
		},
	},
	content: {
		[theme.breakpoints.down('md')]: {
			order: 0,
		},
	},
	list: {
		marginTop: theme.spacing(30 / 4),
	},
	btnMore: {
		fontSize: theme.spacing(12 / 4),
		width: '100%',
		marginTop: theme.spacing(25 / 4),
		background: theme.palette.primary.white,
		[theme.breakpoints.up('lg')]: {
			marginTop: theme.spacing(60 / 4),
			fontSize: theme.spacing(14 / 4),
		},
	},
	pagination: {
		marginTop: theme.spacing(15 / 4),
		'& .MuiPagination-ul': {
			justifyContent: 'center',
		},
		[theme.breakpoints.up('lg')]: {
			marginTop: theme.spacing(35 / 4),
			marginBottom: theme.spacing(15 / 4),
		},
	},
}));
