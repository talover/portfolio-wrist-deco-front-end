import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	compare: {
		position: 'relative',
	},
	container: {
		border: `1px solid ${theme.palette.secondary.lighter}`,
		display: 'grid',
		gridTemplateColumns: `${theme.spacing(273 / 4)} minmax(0, 1fr)`,
		[theme.breakpoints.down('lg')]: {
			gridTemplateColumns: `${theme.spacing(246 / 4)} minmax(0, 1fr)`,
		},
		[theme.breakpoints.down('md')]: {
			gridTemplateColumns: `0 minmax(0, 1fr)`,
			overflowX: 'clip',
		},
	},
	aside: {
		borderRight: `1px solid ${theme.palette.secondary.lighter}`,
		[theme.breakpoints.down('md')]: {
			border: 0,
		},
	},
	asideHeader: {
		height: theme.spacing(324 / 4),
		position: 'sticky',
		background: theme.palette.primary.white,
		top: 0,
		left: 0,
		padding: theme.spacing(30 / 4),
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'flex-end',
		'&:after, &:before': {
			position: 'absolute',
			left: 0,
			right: 0,
			width: '100%',
			height: theme.spacing(1 / 4),
			display: 'block',
			content: '""',
			background: theme.palette.secondary.lighter,
		},
		'&:after': {
			top: '100%',
		},
		'&:before': {
			bottom: '100%',
		},
		[theme.breakpoints.down('lg')]: {
			padding: theme.spacing(20 / 4),
			height: theme.spacing(315 / 4),
			top: theme.spacing(64 / 4),
			'& .MuiFormControlLabel-root': {
				'& .MuiTypography-root': {
					paddingLeft: 0,
				},
			},
		},
		[theme.breakpoints.down('md')]: {
			height: theme.spacing(256 / 4),
		},
	},
	sliderWrap: {
		overflowX: 'clip',
		'& .swiper': {
			overflow: 'visible',
			[theme.breakpoints.down('md')]: {
				zIndex: 20,
			},
		},
	},
	item: {
		width: theme.spacing(274 / 4),
		position: 'relative',
		borderRight: `1px solid ${theme.palette.secondary.lighter}`,
		[theme.breakpoints.down('lg')]: {
			width: theme.spacing(246 / 4),
		},
		[theme.breakpoints.down('md')]: {
			width: theme.spacing(172 / 4),
		},
	},
	header: {
		position: 'sticky',
		top: 0,
		left: 0,
		padding: theme.spacing(10 / 4),
		height: theme.spacing(324 / 4),
		background: theme.palette.primary.white,
		'&:after, &:before': {
			position: 'absolute',
			left: 0,
			right: 0,
			width: '100%',
			height: theme.spacing(1 / 4),
			display: 'block',
			content: '""',
			background: theme.palette.secondary.lighter,
		},
		'&:after': {
			top: '100%',
		},
		'&:before': {
			bottom: '100%',
		},
		[theme.breakpoints.down('lg')]: {
			height: theme.spacing(315 / 4),
			top: theme.spacing(64 / 4),
		},
		[theme.breakpoints.down('md')]: {
			padding: theme.spacing(5 / 4),
			height: theme.spacing(256 / 4),
			zIndex: 60,
		},
	},
	content: {},
	attributesItem: {
		height: theme.spacing(38 / 4),
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: theme.spacing(14 / 4),
		color: theme.palette.secondary.light,
		[theme.breakpoints.down('md')]: {
			height: theme.spacing(46 / 4),
			fontSize: theme.spacing(13 / 4),
			alignItems: 'flex-start',
			justifyContent: 'flex-start',
			paddingTop: theme.spacing(20 / 4),
			paddingInline: theme.spacing(15 / 4),
		},
	},
	attributesItemHeader: {
		height: theme.spacing(46 / 4),
		background: theme.palette.secondary.lighter,
		[theme.breakpoints.down('md')]: {
			background: 'transparent',
		},
	},
	attributesHead: {
		height: theme.spacing(46 / 4),
		'& span': {
			height: theme.spacing(46 / 4),
			background: theme.palette.secondary.lighter,
			display: 'flex',
			flexWrap: 'wrap',
			alignItems: 'center',
			paddingLeft: theme.spacing(30 / 4),
			fontSize: theme.spacing(14 / 4),
			fontWeight: 500,
		},
		[theme.breakpoints.down('lg')]: {
			'& span': {
				paddingLeft: theme.spacing(20 / 4),
			},
		},
		[theme.breakpoints.down('md')]: {
			position: 'relative',
			'& span': {
				position: 'absolute',
				top: 0,
				left: 0,
				width: `calc(100vw - ${theme.spacing(30 / 4)})`,
				paddingInline: theme.spacing(15 / 4),
			},
		},
	},
	attributesHeadItem: {
		height: theme.spacing(38 / 4),
		'& span': {
			height: theme.spacing(38 / 4),
			display: 'flex',
			flexWrap: 'wrap',
			alignItems: 'center',
			fontSize: theme.spacing(14 / 4),
			color: theme.palette.secondary.light,
			paddingLeft: theme.spacing(30 / 4),
		},
		[theme.breakpoints.down('lg')]: {
			'& span': {
				paddingLeft: theme.spacing(20 / 4),
			},
		},
		[theme.breakpoints.down('md')]: {
			position: 'relative',
			height: theme.spacing(46 / 4),
			'& span': {
				position: 'absolute',
				top: 0,
				left: 0,
				width: `calc(100vw - ${theme.spacing(30 / 4)})`,
				paddingInline: theme.spacing(15 / 4),
				paddingTop: theme.spacing(5 / 4),
				alignItems: 'flex-start',
				fontSize: theme.spacing(12 / 4),
				height: theme.spacing(46 / 4),
				color: theme.palette.secondary.gray,
			},
		},
	},
}));
