import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	section: {
		overflowX: 'clip',
		marginBlock: theme.spacing(30 / 4),
		[theme.breakpoints.up('md')]: {
			marginBlock: theme.spacing(60 / 4),
		},
	},
	item: {
		display: 'block',
		textDecoration: 'none',
		'&:hover': {
			'& $imgWrap': {
				border: '1px solid' + theme.palette.primary.light,
			},

			'& $name span': {
				borderColor: theme.palette.primary.light,
			},
		},
	},
	slider: {
		overflow: 'visible',
		'& .swiper-slide': {
			width: theme.spacing(169 / 4),
			[theme.breakpoints.up('md')]: {
				width: theme.spacing(220 / 4),
			},
		},
	},
	imgWrap: {
		borderRadius: theme.spacing(10 / 4),
		border: '1px solid' + theme.palette.secondary.lighter,
		transition: '0.3s all ease',
		height: theme.spacing(269 / 4),
		position: 'relative',
		overflow: 'hidden',
		zIndex: 2,
		[theme.breakpoints.up('md')]: {
			height: theme.spacing(350 / 4),
		},
	},
	img: {
		display: 'block',
		width: '100%',
		height: '100%',
		objectFit: 'contain',
	},
	name: {
		margin: 0,
		paddingTop: theme.spacing(15 / 4),
		lineHeight: 1.25,
		fontSize: theme.spacing(14 / 4),
		color: theme.palette.secondary.dark,
		textAlign: 'center',
		fontWeight: 'normal',
		'& span': {
			borderBottom: '1px solid transparent',
			transition: '0.3s all ease',
			paddingBottom: theme.spacing(2 / 4),
		},
		[theme.breakpoints.up('md')]: {
			fontSize: theme.spacing(16 / 4),
			paddingTop: theme.spacing(20 / 4),
		},
	},
}));
