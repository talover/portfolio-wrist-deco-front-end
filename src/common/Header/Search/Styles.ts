import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';
import { alpha } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
	search: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		zIndex: 300,
		background: alpha(theme.palette.secondary.dark, 0.3),
		padding: theme.spacing(7 / 4),
		visibility: 'hidden',
		transform: 'translateX(-100%)',
		transition: '0.3s visibility ease, 0.3s transform ease',
		backdropFilter: 'blur(4px)',
		[theme.breakpoints.up('lg')]: {
			background: 'transparent',
			top: theme.spacing(15 / 4),
			left: '50%',
			transform: 'translateX(-50%)',
			visibility: 'visible',
			width: theme.spacing(105),
			padding: theme.spacing(8 / 4, 0),
		}, 
		[theme.breakpoints.up('xl')]: {
			top: theme.spacing(6 / 4),
			width: theme.spacing(160),
			padding: theme.spacing(11 / 4, 0),
		},
	},
	searchActive: {
		visibility: 'visible',
		transform: 'translateX(0)',
	},
	searchOpen: {
		'& $searchOverlay ': {
			display: 'block',
		},
		'& $searchDrop': {
			display: 'block',
		},
	},
	searchRow: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		columnGap: theme.spacing(8 / 4),
		position: 'relative',
		zIndex: 20,
	},
	searchCont: {
		height: theme.spacing(50 / 4),
		position: 'relative',
		zIndex: 20,
		background: theme.palette.primary.whiteLight,
		padding: theme.spacing(5 / 4),
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		columnGap: theme.spacing(12 / 4),
		borderRadius: theme.spacing(8 / 4),
		flex: '1',
		[theme.breakpoints.up('xl')]: {
			height: theme.spacing(60 / 4),
			borderRadius: theme.spacing(10 / 4),
			padding: theme.spacing(9 / 4, 10 / 4),
		},
	},
	searchInput: {
		width: '100%',
		flex: '1',
		'& input': {
			fontSize: theme.spacing(14 / 4),
			fontFamily: `'Lexend', sans-serif`,
			whiteSpace: 'nowrap',
			textOverflow: 'ellipsis',
			overflow: 'hidden',
			[theme.breakpoints.up('xl')]: {
				fontSize: theme.spacing(16 / 4),
			},

			'&:placeholder': {
				color: theme.palette.secondary.gray,
			},
		},
	},
	searchBtn: {
		height: theme.spacing(40 / 4),
		paddingInline: theme.spacing(10 / 4),
		fontSize: theme.spacing(14 / 4),
		[theme.breakpoints.up('xl')]: {
			height: theme.spacing(42 / 4),
			fontSize: theme.spacing(16 / 4),
			paddingInline: theme.spacing(12 / 4),
			minWidth: theme.spacing(120 / 4),
		},
		'& svg': {
			[theme.breakpoints.down('xl')]: {
				width: theme.spacing(20 / 4),
				height: theme.spacing(20 / 4),
			},
		},
	},
	searchOverlay: {
		position: 'fixed',
		zIndex: 10,
		top: 0,
		left: 0,
		width: '100%',
		height: '100vh',
		background: alpha(theme.palette.secondary.dark, 0.3),
		display: 'none',
		backdropFilter: 'blur(4px)',
	},
	searchClose: {
		border: 0,
		outline: 'transparent',
		background: 'transparent',
		padding: 0,
		margin: theme.spacing(0, 0, 0, 1 / 4),
		color: theme.palette.primary.white,
		'& svg': {
			width: theme.spacing(24 / 4),
			height: theme.spacing(24 / 4),
			display: 'block',
			fill: 'currentColor',
		},
		[theme.breakpoints.up('lg')]: {
			display: 'none',
		},
	},
	searchDrop: {
		position: 'absolute',
		top: '100%',
		left: theme.spacing(7 / 4),
		right: theme.spacing(7 / 4),
		marginInline: 'auto',
		background: theme.palette.primary.white,
		minHeight: theme.spacing(100 / 4),
		maxHeight: `calc(100vh - ${theme.spacing(70 / 4)})`,
		overflow: 'auto',
		borderRadius: theme.spacing(8 / 4),
		padding: theme.spacing(15 / 4),
		display: 'none',
		zIndex: 20,
		[theme.breakpoints.up('lg')]: {
			left: 0,
			right: 'auto',
			width: '100%',
		},
		[theme.breakpoints.up('xl')]: {
			borderRadius: theme.spacing(10 / 4),
		},
	},
	searchHeader: {
		display: 'flex',
		flexWrap: 'wrap',
		marginBottom: theme.spacing(20 / 4),
	},
	searchTitle: {
		color: theme.palette.secondary.dark,
		lineHeight: 1.25,
		fontWeight: 500,
		margin: 0,
		fontSize: theme.spacing(16 / 4),
	},
	searchClear: {
		fontSize: theme.spacing(14 / 4),
		color: theme.palette.info.main,
		fontWeight: 300,
		padding: 0,
		margin: '0 0 0 auto',
		border: 0,
		outline: 'transparent',
		background: 'transparent',
		transition: '0.3s color ease',
		cursor: 'pointer',
		'&:hover': {
			color: theme.palette.info.dark,
		},
	},
	searchList: {
		padding: 0,
		margin: 0,
		listStyle: 'none',
		display: 'grid',
		gap: theme.spacing(10 / 4),
	},
	searchListItem: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		columnGap: theme.spacing(10 / 4),
	},
	searchListLink: {
		display: 'block',
		flex: '1',
		textDecoration: 'none',
		fontSize: theme.spacing(14 / 4),
		color: theme.palette.secondary.light,
		fontWeight: 300,
		transition: '0.3s color ease',
		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
	searchListRemove: {
		padding: 0,
		margin: 0,
		border: 0,
		outline: 'transparent',
		background: 'transparent',
		color: theme.palette.secondary.darkGray,
		transition: '0.3s color ease',
		cursor: 'pointer',
		'& svg': {
			width: theme.spacing(24 / 4),
			height: theme.spacing(24 / 4),
			fill: 'currentColor',
			display: 'block',
		},
		'&:hover': {
			color: theme.palette.error.main,
		},
	},
	searchTags: {
		marginTop: theme.spacing(30 / 4),
	},
	searchTagsList: {
		padding: 0,
		margin: 0,
		listStyle: 'none',
		display: 'flex',
		flexWrap: 'wrap',
		columnGap: theme.spacing(8 / 4),
		rowGap: theme.spacing(8 / 4),
		[theme.breakpoints.up('xl')]: {
			columnGap: theme.spacing(10 / 4),
			rowGap: theme.spacing(10 / 4),
		},
	},
	searchTagsListItem: {},
	searchTagsListBtn: {
		fontSize: theme.spacing(14 / 4),
		paddingInline: theme.spacing(10 / 4),
	},
}));
