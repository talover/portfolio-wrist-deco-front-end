import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	section: {
		marginTop: theme.spacing(40 / 4),
		marginBottom: theme.spacing(60 / 4),
		position: 'relative',
		zIndex: 10,
		overflow: 'hidden',
		borderRadius: theme.spacing(10 / 4),
		padding: theme.spacing(30 / 4, 20 / 4),
		[theme.breakpoints.up('md')]: {
			marginTop: theme.spacing(60 / 4),
			marginBottom: theme.spacing(100 / 4),
			padding: theme.spacing(20 / 4),
		},
	},
	imgWrap: {
		display: 'block',
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		'&:before': {
			content: '""',
			display: 'block',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: theme.palette.secondary.dark,
			opacity: 0.6,
		},
	},
	img: {
		width: '100%',
		height: '100%',
		display: 'block',
		objectFit: 'cover',
	},
	inner: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignContent: 'center',
		position: 'relative',
		zIndex: 20,
		color: theme.palette.primary.white,
		lineHeight: 'normal',
		[theme.breakpoints.up('md')]: {
			minHeight: theme.spacing(310 / 4),
		},
	},
	label: {
		fontSize: theme.spacing(13 / 4),
		marginBottom: theme.spacing(10 / 4),
		fontWeight: 300,
		[theme.breakpoints.up('md')]: {
			fontSize: theme.spacing(16 / 4),
			fontWeight: 400,
			marginBottom: theme.spacing(20 / 4),
		},
	},
	title: {
		margin: theme.spacing(0, 0, 15 / 4),
		fontWeight: 400,
		fontSize: theme.spacing(18 / 4),
		[theme.breakpoints.up('sm')]: {
			marginBottom: theme.spacing(20 / 4),
			fontSize: theme.spacing(22 / 4),
			fontWeight: 500,
		},
		[theme.breakpoints.up('md')]: {
			fontSize: theme.spacing(30 / 4),
		},
	},
	row: {
		paddingBottom: theme.spacing(10 / 4),
		borderBottom: `1px solid ${theme.palette.primary.white}`,
		display: 'grid',
		gap: theme.spacing(10 / 4),
		gridTemplateColumns: `1fr ${theme.spacing(80 / 4)}`,
		[theme.breakpoints.up('md')]: {
			gridTemplateColumns: `1fr ${theme.spacing(110 / 4)}`,
		},
	},
	input: {
		'& input': {
			fontWeight: 300,
			color: theme.palette.primary.white,
			fontFamily: `'Lexend', sans-serif`,
			fontSize: theme.spacing(14 / 4),
			[theme.breakpoints.up('md')]: {
				fontSize: theme.spacing(16 / 4),
			},
			'&::placeholder': {
				color: `${theme.palette.primary.white} !important`,
				opacity: 1,
			},
		},
	},
	submit: {
		borderRadius: theme.spacing(6 / 4),
		width: '100%',
		padding: 0,
		[theme.breakpoints.down('md')]: {
			height: theme.spacing(38 / 4),
		},
	},
}));
