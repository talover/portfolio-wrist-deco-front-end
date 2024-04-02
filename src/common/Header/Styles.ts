import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';
import { alpha } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
	section: {
		position: 'sticky',
		top: 0,
		left: 0,
		zIndex: 200,
		background: theme.palette.primary.white,
		[theme.breakpoints.up('lg')]: {
			position: 'static',
		},
	},
	container: {
		[theme.breakpoints.down('lg')]: {
			paddingInline: theme.spacing(12 / 4),
		},
	},
	cont: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		padding: theme.spacing(16 / 4, 0),
		[theme.breakpoints.up('lg')]: {
			position: 'relative',
		},
	},
	logo: {
		width: theme.spacing(114 / 4),
		height: theme.spacing(31 / 4),
		display: 'block',
		[theme.breakpoints.up('lg')]: {
			width: theme.spacing(200 / 4),
			height: theme.spacing(62 / 4),
		},
		[theme.breakpoints.up('xl')]: {
			width: theme.spacing(231 / 4),
		},
	},
	menuBtn: {
		display: 'block',
		margin: theme.spacing(0, 20 / 4, 0, 0),
		border: 0,
		outline: 'transparent',
		padding: 0,
		color: theme.palette.secondary.light,
		background: 'transparent',
		[theme.breakpoints.up('lg')]: {
			display: 'none',
		},
		'& svg': {
			width: theme.spacing(24 / 4),
			height: theme.spacing(24 / 4),
			display: 'block',
			fill: 'currentcolor',
		},
	},
	actions: {
		display: 'flex',
		alignItems: 'center',
		columnGap: theme.spacing(24 / 4),
		marginLeft: 'auto',
		[theme.breakpoints.up('lg')]: {
			columnGap: theme.spacing(40 / 4),
		},
	},
	actionBtnSearch: {
		[theme.breakpoints.up('lg')]: {
			display: 'none',
		},
	},
	actionBtnRegistration: {
		display: 'none',
		[theme.breakpoints.up('lg')]: {
			display: 'block',
		},
	},
	overlay: {
		background: theme.palette.secondary.dark,
		position: 'fixed',
		zIndex: -10,
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		transition: '0.3s all ease',
		opacity: 0,
		pointerEvents: 'none',
		visibility: 'hidden',
		cursor: 'pointer',
		[theme.breakpoints.up('lg')]: {
			display: 'none',
		},
	},
	overlayActive: {
		opacity: 0.3,
		pointerEvents: 'all',
		visibility: 'visible',
		zIndex: 99,
	},
	searchOverlay: {
		position: 'fixed',
		zIndex: 199,
		top: 0,
		left: 0,
		width: '100%',
		height: '100vh',
		background: alpha(theme.palette.secondary.dark, 0.3),
		backdropFilter: 'blur(4px)',
	},
}));
