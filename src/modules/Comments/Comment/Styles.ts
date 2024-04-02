import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	item: {
		color: theme.palette.secondary.light,
		'&:not(:first-child)': {
			paddingTop: theme.spacing(25 / 4),
		},
		'&:not(:last-child)': {
			borderBottom: `1px solid ${theme.palette.secondary.lighter}`,
			paddingBottom: theme.spacing(25 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			display: 'grid',
			gridTemplateColumns: `${theme.spacing(220 / 4)} minmax(0, 1fr)`,
			gap: theme.spacing(20 / 4),
			'&:not(:first-child)': {
				paddingTop: theme.spacing(60 / 4),
			},
			'&:not(:last-child)': {
				paddingBottom: theme.spacing(60 / 4),
			},
		},
	},
	header: {
		display: 'grid',
		gap: theme.spacing(16 / 4),
		gridTemplateColumns: `${theme.spacing(48 / 4)} minmax(0, 1fr)`,
		[theme.breakpoints.up('lg')]: {
			display: 'block',
			textAlign: 'center',
		},
	},
	headerCont: {
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'column',
		justifyContent: 'center',
		[theme.breakpoints.up('lg')]: {
			justifyContent: 'flex-start',
		},
	},
	avatar: {
		width: theme.spacing(48 / 4),
		height: theme.spacing(48 / 4),
		position: 'relative',
		overflow: 'hidden',
		zIndex: 2,
		borderRadius: '50%',
		'& img': {
			display: 'block',
			width: '100%',
			height: '100%',
			objectFit: 'cover',
		},
		[theme.breakpoints.up('lg')]: {
			width: theme.spacing(100 / 4),
			height: theme.spacing(100 / 4),
			margin: 'auto',
		},
	},
	name: {
		fontSize: theme.spacing(14 / 4),
		[theme.breakpoints.up('lg')]: {
			marginTop: theme.spacing(20 / 4),
			fontSize: theme.spacing(16 / 4),
		},
	},
	date: {
		fontSize: theme.spacing(12 / 4),
		marginTop: theme.spacing(4 / 4),
		color: theme.palette.secondary.gray,
		[theme.breakpoints.up('lg')]: {
			fontSize: theme.spacing(14 / 4),
			marginTop: theme.spacing(10 / 4),
		},
	},
	cont: {
		marginTop: theme.spacing(16 / 4),
		[theme.breakpoints.up('lg')]: {
			marginTop: 0,
		},
	},
	verified: {
		color: theme.palette.info.light,
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		columnGap: theme.spacing(4 / 4),
		fontSize: theme.spacing(12 / 4),
		marginTop: theme.spacing(4 / 4),
		'& svg': {
			width: theme.spacing(20 / 4),
			height: theme.spacing(20 / 4),
			display: 'block',
			fill: 'currentColor',
		},
		[theme.breakpoints.up('lg')]: {
			marginTop: theme.spacing(10 / 4),
			'& svg': {
				width: theme.spacing(24 / 4),
				height: theme.spacing(24 / 4),
			},
		},
	},
	description: {
		marginTop: theme.spacing(10 / 4),
		fontSize: theme.spacing(14 / 4),
		[theme.breakpoints.up('lg')]: {
			marginTop: theme.spacing(20 / 4),
		},
	},
	review: {
		marginTop: theme.spacing(10 / 4),
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		columnGap: theme.spacing(10 / 4),
		rowGap: theme.spacing(10 / 4),
		[theme.breakpoints.up('lg')]: {
			columnGap: theme.spacing(40 / 4),
		},
	},
	reviewTitle: {
		color: theme.palette.secondary.gray,
		marginRight: 'auto',
		fontSize: theme.spacing(12 / 4),
		[theme.breakpoints.up('lg')]: {
			marginRight: 0,
			fontSize: theme.spacing(14 / 4),
		},
	},
	reviewBtnGroup: {
		display: 'inline-flex',
		flexWrap: 'wrap',
		alignItems: 'center',
	},
	reviewBtnItem: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		columnGap: theme.spacing(6 / 4),
		paddingInline: theme.spacing(6 / 4),
		color: theme.palette.secondary.gray,
		fontSize: theme.spacing(12 / 4),
		'&:first-child': {
			paddingLeft: 0,
		},
		'&:last-child': {
			borderLeft: `2px solid ${theme.palette.secondary.lightGray}`,
			paddingRight: 0,
		},
		[theme.breakpoints.up('lg')]: {
			paddingInline: theme.spacing(10 / 4),
		},
	},
	reviewBtn: {
		border: 0,
		outline: 'transparent',
		background: 'transparent',
		padding: 0,
		margin: 0,
		transition: '0.3s all ease',
		display: 'block',
		color: theme.palette.secondary.gray,
		cursor: 'pointer',
		'& svg': {
			width: theme.spacing(20 / 4),
			height: theme.spacing(20 / 4),
			display: 'block',
			fill: 'currentColor',
		},
		[theme.breakpoints.up('lg')]: {
			'& svg': {
				width: theme.spacing(24 / 4),
				height: theme.spacing(24 / 4),
			},
		},
	},
	reviewBtnLike: {
		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
	reviewBtnDislike: {
		'&:hover': {
			color: theme.palette.error.main,
		},
	},
}));
