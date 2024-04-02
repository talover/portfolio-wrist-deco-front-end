import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	wishlist: {
		width: theme.spacing(400 / 4),
		maxWidth: '100vw',
		[theme.breakpoints.up('lg')]: {
			width: theme.spacing(550 / 4),
		},
	},
	wishlistHeader: {
		position: 'sticky',
		top: 0,
		left: 0,
		background: theme.palette.primary.white,
		paddingBlock: theme.spacing(20 / 4),
		zIndex: 20,
		[theme.breakpoints.up('xl')]: {
			paddingBlock: theme.spacing(30 / 4),
		},
	},
	wishlistTitle: {
		textAlign: 'center',
		color: theme.palette.secondary.light,
		margin: 0,
		lineHeight: 1.2666,
		fontWeight: 500,
		fontSize: theme.spacing(26 / 4),
		[theme.breakpoints.up('xl')]: {
			fontSize: theme.spacing(30 / 4),
		},
	},
	wishlistClose: {
		position: 'absolute',
		top: '50%',
		right: theme.spacing(20 / 4),
		transform: 'translateY(-50%)',
		display: 'block',
		color: theme.palette.secondary.light,
		transition: '0.3s color ease',
		border: 0,
		outline: 'transparent',
		background: 'transparent',
		padding: 0,
		margin: 0,
		cursor: 'pointer',
		'& svg': {
			width: theme.spacing(24 / 4),
			height: theme.spacing(24 / 4),
			fill: 'currentColor',
			display: 'block',
		},
		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
	wishlistList: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
		gap: theme.spacing(10 / 4),
		padding: theme.spacing(0, 10 / 4, 10 / 4),
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(0, 20 / 4, 20 / 4, 20 / 4),
			gap: theme.spacing(16 / 4),
		},
	},
}));
