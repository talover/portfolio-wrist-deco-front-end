import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	card: {
		position: 'relative',
		border: '1px solid #E5E5E5',
		borderRadius: theme.spacing(8 / 4),
		overflow: 'hidden',
		zIndex: 2,
		transition: '0.3s border-color ease',
		height: '100%',
		'&:hover': {
			borderColor: '#DF9F40',

			'& .arrow-swiper, & .swiper-pagination': {
				opacity: 1,
			},
		},
		[theme.breakpoints.up('sm')]: {
			borderRadius: theme.spacing(10 / 4),
		},
	},
	name: {
		color: '#171717',
		fontSize: theme.spacing(14 / 4),
		textDecoration: 'none',
		marginBottom: theme.spacing(5 / 4),
		display: 'block',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		'&:hover': {
			textDecoration: 'underline',
		},
		[theme.breakpoints.up('sm')]: {
			fontSize: theme.spacing(16 / 4),
		},
	},
	cont: {
		padding: theme.spacing(10 / 4),
		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(10 / 4, 15 / 4, 15 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			padding: theme.spacing(10 / 4, 22 / 4, 15 / 4),
		},
	},
	description: {
		margin: 0,
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		fontSize: theme.spacing(14 / 4),
		fontWeight: 300,
		whiteSpace: 'nowrap',
		[theme.breakpoints.up('sm')]: {
			fontSize: theme.spacing(12 / 4),
		},
	},
	infoList: {
		display: 'grid',
		gap: theme.spacing(5 / 4),
		gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
		marginTop: theme.spacing(10 / 4),
		color: '#171717',
		fontWeight: 300,
		fontSize: theme.spacing(12 / 4),
		'& > div:nth-child(even)': {
			textAlign: 'right',
		},
	},
	price: {
		fontWeight: 500,
		fontSize: theme.spacing(16 / 4),
	},
	country: {
		textTransform: 'uppercase',
	},
	btnsLike: {
		position: 'absolute',
		top: theme.spacing(10 / 4),
		right: theme.spacing(10 / 4),
		zIndex: 10,
		display: 'flex',
		flexDirection: 'column',
		rowGap: theme.spacing(10 / 4),
		[theme.breakpoints.down('sm')]: {
			rowGap: theme.spacing(8 / 4),
			'& > *': {
				width: `${theme.spacing(32 / 4)} !important`,
				height: `${theme.spacing(32 / 4)} !important`,
				'& svg': {
					width: `${theme.spacing(20 / 4)} !important`,
					height: `${theme.spacing(20 / 4)} !important`,
				},
			},
		},
	},
	img: {
		width: '100%',
		height: '100%',
		display: 'block',
		objectFit: 'contain',
	},
	imgLink: {
		display: 'block',
	},
	sliderWrap: {
		position: 'relative',
		'& .swiper-pagination': {
			bottom: theme.spacing(12 / 4),
			transition: '0.3s all ease',
			opacity: 0,

			'& .swiper-pagination-bullet': {
				width: theme.spacing(30 / 4),
				height: theme.spacing(2 / 4),
				borderRadius: theme.spacing(30 / 4),
				background: '#E5E5E5',
				opacity: 1,
				margin: theme.spacing(0, 5 / 4),

				'&.swiper-pagination-bullet-active': {
					background: '#DF9F40',
				},
			},
		},
	},
	arrow: {
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		zIndex: 5,
		width: theme.spacing(40 / 4),
		height: theme.spacing(40 / 4),
		color: '#404040',
		transition: '0.3s all ease',
		opacity: 0,
		padding: 0,
		margin: 0,
		outline: 'transparent',
		background: 'transparent',
		border: 0,
		marginTop: theme.spacing(58 / 4),

		cursor: 'pointer',
		'& svg': {
			fill: 'currentColor',
			display: 'block',
			width: '100%',
			heigth: '100%',
		},
		'&:hover': {
			color: '#DF9F40',
		},
	},
	arrowPrev: { left: 0 },
	arrowNext: { right: 0 },
	cardRemove: {
		position: 'absolute',
		top: theme.spacing(10 / 4),
		left: theme.spacing(10 / 4),
		border: 0,
		outline: 'transparent',
		padding: 0,
		margin: 0,
		background: 'transparent',
		display: 'block',
		color: theme.palette.secondary.light,
		transition: '0.3s color ease',
		cursor: 'pointer',
		'&:hover': {
			color: theme.palette.error.main,
		},
		'& svg': {
			display: 'block',
			fill: 'currentColor',
			width: theme.spacing(24 / 4),
			height: theme.spacing(24 / 4),
		},
	},
	cardRemoveRight: {
		left: 'auto',
		right: theme.spacing(10 / 4),
	},
	compareItem: {
		borderRadius: 0,
		border: 0,
		'& $cont': {
			paddingInline: 0,
			paddingBottom: 0,
		},
		'& $cardRemove': {
			top: theme.spacing(5 / 4),
			left: theme.spacing(5 / 4),
			opacity: 0,
		},
		'& $btnsLike': {
			top: theme.spacing(5 / 4),
			right: theme.spacing(5 / 4),
		},
		'&:hover': {
			'& $cardRemove': {
				opacity: 1,
			},
		},
	},
}));
