import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	section: {},
	bg: {
		height: theme.spacing(120 / 4),
		marginBottom: theme.spacing(-30 / 4),
		[theme.breakpoints.up('md')]: {
			height: theme.spacing(180 / 4),
			marginBottom: theme.spacing(-50 / 4),
		},
		[theme.breakpoints.up('xl')]: {
			height: theme.spacing(272 / 4),
			marginBottom: theme.spacing(-74 / 4),
		},
	},
	bgImg: {
		display: 'block',
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	},
	inner: {
		position: 'relative',
		display: 'grid',
		gridTemplateColumns: `${theme.spacing(120 / 4)} minmax(0, 1fr)`,
		columnGap: theme.spacing(10 / 4),
		zIndex: 20,
		[theme.breakpoints.up('md')]: {
			gridTemplateColumns: `${theme.spacing(180 / 4)} minmax(0, 1fr)`,
			columnGap: theme.spacing(20 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			columnGap: theme.spacing(30 / 4),
		},
		[theme.breakpoints.up('xl')]: {
			columnGap: theme.spacing(62 / 4),
			gridTemplateColumns: `${theme.spacing(266 / 4)} minmax(0, 1fr)`,
		},
	},
	logoBox: {
		background: theme.palette.primary.white,
		borderRadius: '50%',
		width: theme.spacing(120 / 4),
		height: theme.spacing(120 / 4),
		padding: theme.spacing(4 / 4),
		[theme.breakpoints.up('md')]: {
			width: theme.spacing(180 / 4),
			height: theme.spacing(180 / 4),
			padding: theme.spacing(6 / 4),
		},
		[theme.breakpoints.up('xl')]: {
			width: theme.spacing(266 / 4),
			height: theme.spacing(266 / 4),
			padding: theme.spacing(8 / 4),
		},
	},
	logoBoxInner: {
		borderRadius: '50%',
		width: '100%',
		height: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		alignContent: 'center',
		justifyContent: 'center',
		background: theme.palette.primary.whiteLight,
		border: `1px solid ${theme.palette.secondary.lighter}`,
		padding: theme.spacing(6 / 4),
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(8 / 4),
		},
		[theme.breakpoints.up('xl')]: {
			padding: theme.spacing(10 / 4),
		},
	},
	logoImage: {
		width: '100%',
		height: '100%',
		display: 'block',
		objectFit: 'contain',
	},
	cont: {
		paddingTop: theme.spacing(45 / 4),
		[theme.breakpoints.up('md')]: {
			paddingTop: theme.spacing(80 / 4),
		},
		[theme.breakpoints.up('xl')]: {
			paddingTop: theme.spacing(133 / 4),
		},
	},
	contInner: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
	},
	header: {
		flex: '1',
	},
	title: {
		margin: 0,
		fontWeight: 500,
		lineHeight: 'normal',
		fontSize: theme.spacing(16 / 4),
		[theme.breakpoints.up('sm')]: {
			fontSize: theme.spacing(20 / 4),
		},
		[theme.breakpoints.up('md')]: {
			fontSize: theme.spacing(26 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			fontSize: theme.spacing(30 / 4),
		},
	},
	since: {
		marginTop: theme.spacing(5 / 4),
		lineHeight: 'normal',
		fontSize: theme.spacing(12 / 4),
		color: theme.palette.secondary.light,
		[theme.breakpoints.up('sm')]: {
			marginTop: theme.spacing(10 / 4),
		},
		[theme.breakpoints.up('md')]: {
			fontSize: theme.spacing(14 / 4),
		},
	},
	button: {
		marginLeft: 'auto',
		width: '100%',
		marginTop: theme.spacing(10 / 4),
		letterSpacing: '0.01em',

		[theme.breakpoints.down('md')]: {
			fontSize: theme.spacing(14 / 4),
			height: theme.spacing(38 / 4),
			borderRadius: theme.spacing(8 / 4),
		},
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(180 / 4),
			marginTop: 0,
		},
		[theme.breakpoints.up('md')]: {
			width: theme.spacing(220 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			width: theme.spacing(276 / 4),
		},
	},
}));
