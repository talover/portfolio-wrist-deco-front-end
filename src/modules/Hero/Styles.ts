import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	section: {
		marginInline: 'auto',
		maxWidth: theme.spacing(1400 / 4),
		[theme.breakpoints.up('sm')]: {
			paddingInline: theme.spacing(15 / 4),
		},
	},
	inner: {
		position: 'relative',
		overflow: 'hidden',
		zIndex: 2,
		[theme.breakpoints.up('sm')]: {
			borderRadius: theme.spacing(10 / 4),
		},
	},
	item: {
		display: 'block',
		textDecoration: 'none',
	},
	slider: {
		'&.swiper': {
			overflow: 'visible',
			overflowX: 'clip',

			'& > .swiper-pagination': {
				bottom: theme.spacing(12 / 4),
				transition: '0.3s all ease',

				'&.swiper-pagination-bullets-dynamic': {
					overflow: 'visible',
				},

				'& .swiper-pagination-bullet': {
					width: theme.spacing(30 / 4),
					height: theme.spacing(2 / 4),
					borderRadius: theme.spacing(30 / 4),
					background: theme.palette.primary.white,
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
						background: theme.palette.primary.white,
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
						opacity: 0.3,
					},
					'&.swiper-pagination-bullet-active-prev-prev': {
						marginLeft: '-8px',
						opacity: 0.3,
					},
					'&.swiper-pagination-bullet-active-next': {
						marginRight: '-7px',
						opacity: 0.3,
					},
					'&.swiper-pagination-bullet-active-next-next': {
						marginRight: '-8px',
						opacity: 0.3,
					},
				},
			},
		},
	},

	img: {
		display: 'block',
		width: '100%',
	},
	arrow: {
		border: 0,
		outline: 'transparent',
		padding: 0,
		margin: 0,
		color: theme.palette.primary.white,
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
		[theme.breakpoints.up('lg')]: {
			width: theme.spacing(74 / 4),
			height: theme.spacing(74 / 4),
		},
	},
	arrowPrev: {
		left: theme.spacing(10 / 4),
		[theme.breakpoints.up('lg')]: {
			left: theme.spacing(20 / 4),
		},
	},
	arrowNext: {
		right: theme.spacing(10 / 4),
		[theme.breakpoints.up('lg')]: {
			right: theme.spacing(20 / 4),
		},
	},
}));
