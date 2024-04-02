import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	section: {
		overflowX: 'clip',
		marginBottom: theme.spacing(60 / 4),
		[theme.breakpoints.up('md')]: {
			marginBottom: theme.spacing(140 / 4),
		},
	},
	wrap: {},
	sliderWrap: {
		width: theme.spacing(320 / 4),
		maxWidth: '100%',
		margin: 'auto',
		position: 'relative',
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(420 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			width: theme.spacing(490 / 4),
		},

		'& .swiper': {
			overflow: 'visible',

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
	slide: {
		height: 'auto',
		'&.swiper-slide': {
			paddingBlock: theme.spacing(20 / 4),
			transition: '0.3s all ease',
			[theme.breakpoints.up('sm')]: {
				paddingBlock: theme.spacing(33 / 4),
			},
			'&.swiper-slide-prev': {
				'& $item': {
					[theme.breakpoints.up('sm')]: {
						marginLeft: theme.spacing(40 / 4),
					},
					[theme.breakpoints.up('lg')]: {
						marginLeft: theme.spacing(60 / 4),
					},
				},
			},
			'&.swiper-slide-next': {
				'& $item': {
					[theme.breakpoints.up('sm')]: {
						marginRight: theme.spacing(40 / 4),
					},
					[theme.breakpoints.up('lg')]: {
						marginRight: theme.spacing(60 / 4),
					},
				},
			},
			'&.swiper-slide-active': {
				paddingBlock: 0,
				margin: 0,
				'& $item': {
					maxWidth: '100%',
					opacity: 1,
					padding: theme.spacing(25 / 4, 20 / 4),
					margin: '0 !important',
					[theme.breakpoints.up('sm')]: {
						padding: theme.spacing(42 / 4, 50 / 4, 50 / 4),
					},
					[theme.breakpoints.up('lg')]: {
						padding: theme.spacing(63 / 4, 75 / 4, 75 / 4),
					},
				},
			},
		},
	},
	item: {
		height: '100%',
		maxWidth: theme.spacing(390 / 4),
		background: theme.palette.primary.whiteLight,
		border: `1px solid ${theme.palette.secondary.lighter}`,
		transition: '0.3s all ease',
		borderRadius: theme.spacing(10 / 4),
		opacity: 0.3,
		padding: theme.spacing(20 / 4, 30 / 4, 30 / 4),
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'column',
		[theme.breakpoints.up('lg')]: {
			padding: theme.spacing(30 / 4, 45 / 4, 42 / 4),
			maxWidth: theme.spacing(430 / 4),
		},
	},
	inner: {
		flex: '1',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'column',
	},
	header: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	date: {
		fontSize: theme.spacing(14 / 4),
		fontWeight: 300,
		color: theme.palette.secondary.dark,
		[theme.breakpoints.up('sm')]: {
			fontSize: theme.spacing(16 / 4),
		},
	},
	descriptionWrap: {
		flex: '1',
		display: 'flex',
		flexWrap: 'wrap',
		alignContent: 'center',
		justifyContent: 'center',
	},
	description: {
		fontWeight: 300,
		fontSize: theme.spacing(14 / 4),
		lineHeight: 1.875,
		maxWidth: theme.spacing(278 / 4),
		margin: theme.spacing(30 / 4, 'auto'),
		[theme.breakpoints.up('sm')]: {
			fontSize: theme.spacing(16 / 4),
			margin: theme.spacing(40 / 4, 'auto'),
		},
		[theme.breakpoints.up('lg')]: {
			margin: theme.spacing(57 / 4, 'auto'),
		},
	},
	author: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		columnGap: theme.spacing(10 / 4),
		fontSize: theme.spacing(14 / 4),
		[theme.breakpoints.up('sm')]: {
			fontSize: theme.spacing(16 / 4),
			columnGap: theme.spacing(20 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			columnGap: theme.spacing(30 / 4),
		},
	},
	authorName: {
		color: theme.palette.secondary.dark,
	},
	authorCity: {
		color: theme.palette.secondary.dark,
		fontWeight: 300,
	},
	authorAvatar: {
		width: theme.spacing(50 / 4),
		height: theme.spacing(50 / 4),
		borderRadius: '50%',
		overflow: 'hidden',
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(60 / 4),
			height: theme.spacing(60 / 4),
		},
		'& img': {
			display: 'block',
			width: '100%',
			height: '100%',
			objectFit: 'cover',
		},
	},
	authorCont: {
		flex: '1',
		lineHeight: 1.25,
	},
	arrow: {
		border: 0,
		outline: 'transparent',
		padding: 0,
		margin: 0,
		color: theme.palette.secondary.dark,
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
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
		[theme.breakpoints.up('lg')]: {
			width: theme.spacing(74 / 4),
			height: theme.spacing(74 / 4),
		},
	},
	arrowPrev: {
		left: theme.spacing(-50 / 4),
		[theme.breakpoints.up('lg')]: {
			left: theme.spacing(-124 / 4),
		},
	},
	arrowNext: {
		right: theme.spacing(-50 / 4),
		[theme.breakpoints.up('lg')]: {
			right: theme.spacing(-124 / 4),
		},
	},
}));
