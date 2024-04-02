import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	section: {
		position: 'relative',
		marginBottom: theme.spacing(60 / 4),
		[theme.breakpoints.up('md')]: {
			marginBottom: theme.spacing(100 / 4),
		},
		'& > .swiper': {
			overflow: 'visible',
			overflowX: 'clip',

			'& > .swiper-pagination': {
				bottom: theme.spacing(-25 / 4),
				transition: '0.3s all ease',
				[theme.breakpoints.up('md')]: {
					bottom: theme.spacing(-35 / 4),
				},

				'&.swiper-pagination-bullets-dynamic': {
					overflow: 'visible',
				},

				'& .swiper-pagination-bullet': {
					width: theme.spacing(30 / 4),
					height: theme.spacing(2 / 4),
					borderRadius: theme.spacing(30 / 4),
					background: theme.palette.primary.pagination,
					opacity: 0,
					transition: '0.3s all ease',
					margin: 0,
					position: 'relative',
					'&::before': {
						content: '""',
						display: 'block',
						transform: 'scale(0.3)',
						opacity: 0,
						width: theme.spacing(10 / 4),
						height: theme.spacing(10 / 4),
						position: 'absolute',
						inset: '50%',
						borderRadius: '50%',
						background: theme.palette.primary.main,
						transition: '0.3s all ease',
						margin: theme.spacing(-5 / 4, 0, 0, -5 / 4),
					},

					'&.swiper-pagination-bullet-active': {
						background: 'transparent',
						width: theme.spacing(20 / 4),
						opacity: 1,
						'&:before': {
							transform: 'scale(1)',
							opacity: 1,
						},
					},
					'&.swiper-pagination-bullet-active-prev': {
						marginLeft: '-7px',
						opacity: 1,
					},
					'&.swiper-pagination-bullet-active-prev-prev': {
						marginLeft: '-8px',
						opacity: 1,
					},
					'&.swiper-pagination-bullet-active-next': {
						marginRight: '-7px',
						opacity: 1,
					},
					'&.swiper-pagination-bullet-active-next-next': {
						marginRight: '-8px',
						opacity: 1,
					},
				},
			},
		},
	},
	item: {
		background: theme.palette.primary.whiteLight,
		borderRadius: theme.spacing(8 / 4),
		position: 'relative',
		paddingBottom: '62%',
		transition: '0.3s all ease',
		'&:hover': {
			background: theme.palette.secondary.ultraLightGray,
		},
		[theme.breakpoints.up('md')]: {
			borderRadius: theme.spacing(10 / 4),
		},
	},
	itemImg: {
		display: 'block',
		width: '100%',
		height: '100%',
		objectFit: 'contain',
	},
	itemInner: {
		display: 'block',
		padding: theme.spacing(15 / 4),
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(20 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			padding: theme.spacing(30 / 4),
		},
		[theme.breakpoints.up('xl')]: {
			padding: theme.spacing(40 / 4),
		},
	},
	arrow: {
		border: 0,
		outline: 'transparent',
		padding: 0,
		margin: 0,
		color: theme.palette.secondary.darkGray,
		transition: '0.3s color ease',
		width: theme.spacing(40 / 4),
		height: theme.spacing(40 / 4),
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		background: 'transparent',
		zIndex: 10,
		cursor: 'pointer',
		display: 'none',
		'& svg': {
			fill: 'currentcolor',
		},
		'&:hover': {
			color: theme.palette.primary.main,
		},
		[theme.breakpoints.up('md')]: {
			display: 'block',
		},
		[theme.breakpoints.up('xl')]: {
			width: theme.spacing(74 / 4),
			height: theme.spacing(74 / 4),
		},
	},
	arrowPrev: {
		left: theme.spacing(10 / 4),
		[theme.breakpoints.up('xl')]: {
			left: 0,
		},
	},
	arrowNext: {
		right: theme.spacing(10 / 4),
		[theme.breakpoints.up('xl')]: {
			right: 0,
		},
	},
}));
