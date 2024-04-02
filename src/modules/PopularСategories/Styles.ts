import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	section: {
		marginBlock: theme.spacing(30 / 4),
		[theme.breakpoints.up('md')]: {
			marginBlock: theme.spacing(60 / 4),
		},
	},
	list: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
		gap: theme.spacing(8 / 4),
		marginTop: theme.spacing(8 / 4),
		[theme.breakpoints.up('sm')]: {
			gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
			gap: theme.spacing(10 / 4),
			marginTop: theme.spacing(10 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
			gap: theme.spacing(15 / 4),
			marginTop: theme.spacing(15 / 4),
		},
		[theme.breakpoints.up('xl')]: {
			gap: theme.spacing(20 / 4),
			marginTop: theme.spacing(20 / 4),
		},
	},
	listHero: {
		display: 'grid',
		gridTemplateColumns: '1fr',
		gap: theme.spacing(8 / 4),
		[theme.breakpoints.up('sm')]: {
			gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
			gap: theme.spacing(10 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			gap: theme.spacing(15 / 4),
		},
		[theme.breakpoints.up('xl')]: {
			gap: theme.spacing(20 / 4),
		},
	},
	item: {
		display: 'block',
		textDecoration: 'none',
		position: 'relative',
		paddingBottom: '70%',
		borderRadius: theme.spacing(6 / 4),
		overflow: 'hidden',
		[theme.breakpoints.up('md')]: {
			borderRadius: theme.spacing(10 / 4),
		},
		[theme.breakpoints.only('sm')]: {
			paddingBottom: '48.78%',
		},
		[theme.breakpoints.only('md')]: {
			paddingBottom: '48.78%',
		},
		[theme.breakpoints.up('lg')]: {
			paddingBottom: '73.78%',
		},
		'& $bg': {
			'&:before': {
				opacity: 0.4,
			},
		},
		'& $inner': {
			position: 'absolute',
			top: 0,
			left: 0,
			justifyContent: 'center',
			padding: theme.spacing(10 / 4),
		},
		'&:hover': {
			'& $bg': {
				transform: 'scale(1.05)',
			},
			'& $inner': {
				color: theme.palette.primary.main,
			},
		},
	},
	itemHero: {
		cursor: 'pointer',
		position: 'relative',
		borderRadius: theme.spacing(6 / 4),
		overflow: 'hidden',
		height: theme.spacing(200 / 4),
		[theme.breakpoints.up('md')]: {
			height: theme.spacing(220 / 4),
			borderRadius: theme.spacing(10 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			height: theme.spacing(260 / 4),
		},
		[theme.breakpoints.up('xl')]: {
			height: theme.spacing(300 / 4),
		},
		'& $inner': {
			paddingLeft: theme.spacing(15 / 4),
			paddingRight: theme.spacing(15 / 4),
			columnGap: theme.spacing(10 / 4),
			[theme.breakpoints.up('lg')]: {
				columnGap: theme.spacing(15 / 4),
			},
			[theme.breakpoints.up('xl')]: {
				columnGap: theme.spacing(20 / 4),
				paddingLeft: theme.spacing(25 / 4),
				paddingRight: theme.spacing(25 / 4),
			},

		},
		'&:nth-child(even)': {
			'& $img': {
				order: 1,
			},
			'& $itemHeroName': {
				order: 0,
			},
			'& $inner': {
				columnGap: 0,
			},
			'& $btn': {
				right: 'auto',
				left: theme.spacing(15 / 4),
				[theme.breakpoints.up('xl')]: {
					left: theme.spacing(25 / 4),
				},
			},
		},
		'&:hover': {
			'& $bg': {
				transform: 'scale(1.05)',
			},
			'& $inner': {
				color: theme.palette.primary.main,
			},
		},
	},
	bg: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		transition: '1.1s all ease',
		display: 'block',
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
		'& img': {
			display: 'block',
			width: '100%',
			height: '100%',
			objectFit: 'cover',
		},
	},
	inner: {
		position: 'relative',
		zIndex: 20,
		width: '100%',
		height: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		color: theme.palette.primary.white,
		transition: '0.3s all ease',
	},
	img: {
		width: theme.spacing(100 / 4),
		display: 'block',
		[theme.breakpoints.up('md')]: {
			width: theme.spacing(110 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			width: theme.spacing(150 / 4),
		},
		[theme.breakpoints.up('xl')]: {
			width: theme.spacing(180 / 4),
		},
	},
	itemHeroName: {
		flex: 1,
		fontWeight: 300,
		fontSize: theme.spacing(26 / 4),
		[theme.breakpoints.up('lg')]: {
			fontSize: theme.spacing(30 / 4),
		},
		[theme.breakpoints.up('xl')]: {
			fontSize: theme.spacing(40 / 4),
		}
	},
	itemName: {
		display: 'block',
		fontSize: theme.spacing(16 / 4),
		fontWeight: 300,
		textShadow: theme.spacing(0, 0, 15 / 4) + ' ' + theme.palette.secondary.dark,
		textAlign: 'center',
		[theme.breakpoints.up('md')]: {
			fontSize: theme.spacing(20 / 4),
		},
		[theme.breakpoints.up('xl')]: {
			fontSize: theme.spacing(24 / 4),
		},
	},
	btn: {
		position: 'absolute',
		right: theme.spacing(15 / 4),
		bottom: theme.spacing(15 / 4),
		zIndex: 20,
		textTransform: 'uppercase',
		backdropFilter: 'blur(8px)',
		[theme.breakpoints.up('xl')]: {
			right: theme.spacing(25 / 4),
			bottom: theme.spacing(25 / 4),
		},
	},
	more: {
		width: '100%',
		marginTop: theme.spacing(10 / 4),
		[theme.breakpoints.up('lg')]: {
			marginTop: theme.spacing(15 / 4),
		},
		[theme.breakpoints.up('xl')]: {
			marginTop: theme.spacing(20 / 4),
		},
	},
}));
