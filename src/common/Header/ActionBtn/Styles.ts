import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	actionBtn: {
		display: 'block',
		cursor: 'pointer',
		border: 0,
		outline: 'transparent',
		background: 'transparent',
		padding: 0,
		margin: 0,
		transition: '0.3s all ease',
		color: theme.palette.secondary.light,
		'& svg': {
			width: theme.spacing(24 / 4),
			height: theme.spacing(24 / 4),
			display: 'block',
			fill: 'currentcolor',
		},
		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
	actionBtnIcon: {
		display: 'block',
		width: theme.spacing(24 / 4),
		height: theme.spacing(24 / 4),
		position: 'relative',
		margin: 'auto',
		'& svg': {
			width: '100%',
			height: '100%',
			display: 'block',
			fill: 'currentcolor',
		},
	},
	actionBtnName: {
		display: 'none',
		[theme.breakpoints.up('lg')]: {
			display: 'block',
			textAlign: 'center',
			fontSize: theme.spacing(12 / 4),
			lineHeight: 1.25,
			marginTop: theme.spacing(3 / 4),
		},
	},
	actionBtnBadge: {
		position: 'absolute',
		top: theme.spacing(-9 / 4),
		left: theme.spacing(-9 / 4),
		height: theme.spacing(18 / 4),
		minWidth: theme.spacing(18 / 4),
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		padding: theme.spacing(0, 2 / 4),
		color: theme.palette.primary.white,
		background: theme.palette.primary.main,
		fontSize: theme.spacing(10 / 4),
	},
}));
