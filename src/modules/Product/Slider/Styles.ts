import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	mainSlider: {
		[theme.breakpoints.up('md')]: {},
	},
	mainSliderImgWrap: {
		maxHeight: theme.spacing(650 / 4),
		position: 'relative',
		paddingBottom: '74%',
	},
	mainSliderImg: {
		display: 'block',
		width: '100%',
		height: '100%',
		objectFit: 'contain',
		position: 'absolute',
		top: 0,
		left: 0,
	},
	thumbsSliderWrap: {
		overflowX: 'clip',
		marginInline: theme.spacing(-15 / 4),
		paddingInline: theme.spacing(15 / 4),
		[theme.breakpoints.up('md')]: {
			marginInline: 0,
			paddingInline: 0,
		},
	},
	thumbsSlider: {
		overflow: 'visible',
		marginTop: theme.spacing(10 / 4),
		[theme.breakpoints.up('lg')]: {
			marginTop: theme.spacing(20 / 4),
		},
		'& .swiper-slide': {
			width: theme.spacing(80 / 4),

			[theme.breakpoints.up('xl')]: {
				width: theme.spacing(139 / 4),
			},

			'&.swiper-slide-thumb-active $thumbsSliderItem': {
				borderColor: theme.palette.primary.main,
				cursor: 'default',
			},
		},
	},
	thumbsSliderItemInner: {
		position: 'relative',
		paddingBottom: '82%',
	},
	thumbsSliderItem: {
		borderRadius: theme.spacing(8 / 4),
		position: 'absolute',
		top: 0,
		left: 0,
		overflow: 'hidden',
		border: `1px solid ${theme.palette.secondary.ultraLightGray}`,
		transition: '0.3s all ease',
		cursor: 'pointer',
		[theme.breakpoints.up('lg')]: {
			borderRadius: theme.spacing(10 / 4),
		},
	},
	thumbsSliderImg: {
		display: 'block',
		width: '100%',
		height: '100%',
		objectFit: 'contain',
	},
}));
