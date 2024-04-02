import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	section: {
		background: theme.palette.primary.whiteLight,
		marginBlock: theme.spacing(40 / 4),
		paddingBlock: theme.spacing(30 / 4),
		position: 'relative',

		[theme.breakpoints.up('md')]: {
			marginBlock: theme.spacing(60 / 4),
			paddingTop: theme.spacing(46 / 4),
			paddingBottom: theme.spacing(63 / 4),
		},
	},
	wrap: {
		[theme.breakpoints.up('md')]: {
			display: 'grid',
			gridTemplateColumns: '40% 60%',
		},
		[theme.breakpoints.up('lg')]: {
			gridTemplateColumns: '50.729% calc(100% - 50.729%)',
		},
	},
	icon: {
		position: 'absolute',
		inset: '50%',
		transform: 'translate(-50%,-50%)',
		zIndex: 20,
		width: '80%',
		height: '80%',
		fill: 'currentcolor',
		color: 'rgba(255, 255, 255, 0.40)',
	},
	imageWrap: {
		position: 'relative',
		overflow: 'hidden',
		borderRadius: theme.spacing(10 / 4),
	},
	image: {
		display: 'block',
		width: '100%',
	},
	content: {
		paddingTop: theme.spacing(20 / 4),
		['&>div']: {
			width: '100%',
		},
		[theme.breakpoints.up('md')]: {
			paddingTop: 0,
			paddingLeft: theme.spacing(30 / 4),
			display: 'flex',
			flexWrap: 'wrap',
			alignItems: 'center',
		},
		[theme.breakpoints.up('lg')]: {
			paddingLeft: theme.spacing(50 / 4),
		},
		[theme.breakpoints.up('xl')]: {
			paddingLeft: theme.spacing(77 / 4),
		},
	},
	title: {
		margin: theme.spacing(0, 0, 20 / 4),

		[theme.breakpoints.up('lg')]: {
			marginBottom: theme.spacing(30 / 4),
			textAlign: 'center',
		},
		[theme.breakpoints.up('xl')]: {
			marginBottom: theme.spacing(40 / 4),
		},
	},
	btnWrap: {
		marginTop: theme.spacing(20 / 4),
		[theme.breakpoints.up('lg')]: {
			marginTop: theme.spacing(30 / 4),
		},
		[theme.breakpoints.up('xl')]: {
			marginTop: theme.spacing(40 / 4),
			textAlign: 'center',
		},
	},
	btn: {
		[theme.breakpoints.up('lg')]: {
			paddingInline: theme.spacing(50 / 4),
		},
	},
}));
