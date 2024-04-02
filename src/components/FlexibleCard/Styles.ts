import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	list: {
		display: 'grid',
		gap: theme.spacing(8 / 4),
		gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
		[theme.breakpoints.up('sm')]: {
			gap: theme.spacing(10 / 4),
		},
		[theme.breakpoints.up('md')]: {
			gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
			gap: theme.spacing(18 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
		},
	},
	slider: {
		position: 'relative',
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
}));
