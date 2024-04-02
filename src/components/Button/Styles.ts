import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';
import { alpha } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
	button: {
		display: 'inline-flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
		columnGap: theme.spacing(10 / 4),
		transition: '0.3s all ease',
		height: theme.spacing(42 / 4),
		background: 'transparent',
		outline: 'transparent',
		border: 0,
		padding: theme.spacing(0, 25 / 4),
		cursor: 'pointer',
		fontSize: theme.spacing(16 / 4),
		borderRadius: theme.spacing(8 / 4),
		textDecoration: 'none',
		'& svg': {
			width: theme.spacing(24 / 4),
			height: theme.spacing(24 / 4),
			fill: 'currentcolor',
		},
		[theme.breakpoints.up('lg')]: {
			borderRadius: theme.spacing(10 / 4),
		},
	},
	small: {
		height: theme.spacing(38 / 4),
		padding: theme.spacing(0, 15 / 4),
		fontSize: theme.spacing(12 / 4),
	},
	medium: {
		height: theme.spacing(48 / 4),
	},
	large: {
		height: theme.spacing(58 / 4),
		padding: theme.spacing(0, 35 / 4),
	},
	buttonCircle: {
		width: theme.spacing(40 / 4),
		height: theme.spacing(40 / 4),
		borderRadius: '50%',
		backdropFilter: 'blur(8px)',
		background: 'rgba(0, 0, 0, 0.20)',
		color: '#fff',
		'&:hover': {
			background: 'rgba(0, 0, 0, 0.10)',
			color: '#DF9F40',
		},
		'& svg': {
			width: theme.spacing(24 / 4),
			height: theme.spacing(24 / 4),
			display: 'block',
			fill: 'currentColor',
		},
		padding: 0,
	},
	buttonMain: {
		position: 'relative',
		zIndex: 2,
		borderRadius: theme.spacing(10 / 4),
		overflow: 'hidden',
		height: theme.spacing(50 / 4),
		paddingInline: theme.spacing(25 / 4),
		color: theme.palette.primary.white,
		fontWeight: 400,
		fontSize: theme.spacing(16 / 4),
		'&:hover': {
			'& $buttonMainBg': {
				left: '70%',
			},
		},
	},
	buttonMainBg: {
		position: 'absolute',
		top: 0,
		left: '50%',
		width: '140%',
		height: '100%',
		transform: 'translateX(-50%)',
		transition: '0.4s all ease',
		background: theme.palette.primary.mainGradient,
	},
	buttonMainContent: {
		position: 'relative',
		zIndex: 20,
	},
	buttonOutline: {
		border: '1px solid' + theme.palette.secondary.light,
		color: theme.palette.secondary.light,

		'&:hover': {
			background: theme.palette.secondary.main,
			borderColoe: theme.palette.secondary.main,
			color: theme.palette.primary.white,
		},
		'&$small': {
			borderRadius: theme.spacing(6 / 4),
		},
	},
	buttonOutlineWhite: {
		color: theme.palette.primary.white,
		borderColor: theme.palette.primary.white,
		'&:hover': {
			color: theme.palette.primary.main,
			borderColor: theme.palette.primary.main,
			background: 'transparent',
		},
	},
	buttonOutlineSecondary: {
		color: theme.palette.secondary.gray,
		borderColor: theme.palette.secondary.gray,
		'&:hover': {
			color: theme.palette.secondary.gray,
			background: alpha(theme.palette.secondary.gray, 0.1),
		},
	},
	buttonOutlineSecondaryLight: {
		color: theme.palette.secondary.light,
		borderColor: theme.palette.secondary.lighter,
		'&:hover': {
			color: theme.palette.secondary.dark,
			background: alpha(theme.palette.secondary.lighter, 0.3),
		},
	},
	buttonOutlinePrimary: {},
	buttonOutlineSuccess: {},
	buttonOutlineError: {},
	buttonFilled: {},
	buttonPrimary: {
		color: theme.palette.primary.white,
		background: theme.palette.primary.main,
	},
	buttonWhite: {
		background: theme.palette.primary.white,
		color: theme.palette.secondary.light,
		'&:hover': {
			background: theme.palette.primary.main,
			color: theme.palette.primary.white,
		},
	},
	buttonSecondary: {},
	buttonSecondaryLight: {},
	buttonSuccess: {
		color: theme.palette.primary.white,
		background: theme.palette.success.main,
		'&:hover': {
			background: theme.palette.success.dark,
		},
	},
	buttonError: {
		color: theme.palette.primary.white,
		background: theme.palette.error.light,
		'&:hover': {
			background: theme.palette.error.main,
		},
	},
	disabled: {
		opacity: 0.5,
		cursor: 'default',
		pointerEvents: 'none',
	},
	'&:disabled': {
		opacity: 0.5,
		cursor: 'default',
		pointerEvents: 'none',
	},
}));
