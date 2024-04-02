import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	section: {
		marginBottom: theme.spacing(60 / 4),
		[theme.breakpoints.up('md')]: {
			marginBottom: theme.spacing(100 / 4),
		},
	},
	filter: {
		display: 'grid',
		gap: theme.spacing(4 / 4),
		alignItems: 'center',
		gridTemplateColumns: `minmax(0, 1fr) ${theme.spacing(36 / 4)} ${theme.spacing(150 / 4)}`,
		position: 'sticky',
		left: 0,
		top: theme.spacing(63 / 4),
		zIndex: 3,
		background: theme.palette.primary.white,
		paddingBlock: theme.spacing(8 / 4),
		[theme.breakpoints.up('md')]: {
			gridTemplateColumns: `minmax(0, 1fr) ${theme.spacing(36 / 4)} ${theme.spacing(223 / 4)}`,
		},
		[theme.breakpoints.up('lg')]: {
			gap: theme.spacing(20 / 4),
			gridTemplateColumns: `minmax(0, 1fr)  ${theme.spacing(223 / 4)}`,
			top: 0,
		},
	},
	filterCont: {
		[theme.breakpoints.up('lg')]: {
			display: 'flex',
			flexWrap: 'wrap',
			columnGap: theme.spacing(20 / 4),
			alignItems: 'center',
		},
	},
	filterTags: {
		display: 'flex',
		flexWrap: 'wrap',
		flex: 1,
		columnGap: theme.spacing(10 / 4),
		rowGap: theme.spacing(10 / 4),
	},
	filterSelectBox: {
		[theme.breakpoints.down('lg')]: {
			'& .MuiSelect-select ': {
				fontSize: theme.spacing(14 / 4),
				paddingBlock: `0 !important`,
				height: `${theme.spacing(36 / 4)} !important`,
				display: 'flex',
				flexWrap: 'wrap',
				alignItems: 'center',
			},
			'& .MuiInputBase-root': {
				fontSize: theme.spacing(14 / 4),
				borderRadius: theme.spacing(8 / 4),
			},
			'& .MuiFormLabel-root': {
				fontSize: theme.spacing(14 / 4),
				top: theme.spacing(-4 / 4),
			},
		},
	},
	filterFound: {
		color: theme.palette.secondary.light,
		fontSize: theme.spacing(14 / 4),
		[theme.breakpoints.down('md')]: {
			'& span': {
				display: 'none',
			},
		},
		[theme.breakpoints.up('md')]: {
			fontSize: theme.spacing(16 / 4),
		},
	},
	catalog: {
		marginTop: theme.spacing(26 / 4),
		[theme.breakpoints.up('lg')]: {
			display: 'grid',
			gap: theme.spacing(10 / 4),
			gridTemplateColumns: `${theme.spacing(280 / 4)} minmax(0, 1fr)`,
		},
		[theme.breakpoints.up('xl')]: {
			gridTemplateColumns: `${theme.spacing(330 / 4)} minmax(0, 1fr)`,
		},
	},
	content: {},
	catalogList: {
		display: 'grid',
		gap: theme.spacing(8 / 4),
		gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
		[theme.breakpoints.up('sm')]: {
			gap: theme.spacing(10 / 4),
		},
		[theme.breakpoints.up('md')]: {
			gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
		},
		[theme.breakpoints.up('xl')]: {
			gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
		},
	},
	aside: {},

	btnFilter: {
		height: theme.spacing(36 / 4),
		width: theme.spacing(36 / 4),
		background: theme.palette.secondary.main,
		color: theme.palette.primary.white,
		padding: 0,
		'& svg': {
			height: theme.spacing(20 / 4),
			width: theme.spacing(20 / 4),
		},
	},
	asideDrawer: {
		width: theme.spacing(400 / 4),
		maxWidth: '100vw',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'column',
		height: '100%',
	},
	asideDrawerClose: {
		position: 'absolute',
		top: '50%',
		left: theme.spacing(10 / 4),
		transform: 'translateY(-50%)',
		display: 'block',
		color: theme.palette.secondary.light,
		transition: '0.3s color ease',
		border: 0,
		outline: 'transparent',
		background: 'transparent',
		padding: 0,
		margin: 0,
		cursor: 'pointer',
		'& svg': {
			width: theme.spacing(24 / 4),
			height: theme.spacing(24 / 4),
			fill: 'currentColor',
			display: 'block',
		},
		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
	asideDrawerHeader: {
		position: 'sticky',
		top: 0,
		left: 0,
		background: theme.palette.primary.white,
		paddingBlock: theme.spacing(20 / 4),
		zIndex: 20,
	},
	asideDrawerTitle: {
		textAlign: 'center',
		color: theme.palette.secondary.light,
		margin: 0,
		lineHeight: 1.2666,
		fontWeight: 500,
		fontSize: theme.spacing(26 / 4),
	},
	asideDrawerContent: {
		flex: 1,
		overflow: 'auto',
		padding: theme.spacing(10 / 4),
	},
	asideDrawerFooter: {
		padding: theme.spacing(10 / 4),
		borderTop: `1px solid ${theme.palette.secondary.lighter}`,
	},
	asideDrawerButton: {
		width: '100%',
	},
	asideDrawerClearAll: {
		right: theme.spacing(10 / 4),
		top: '50%',
		transform: 'translateY(-50%)',
		position: 'absolute',
	},
	more: {
		marginTop: theme.spacing(8 / 4),
		'& > *': {
			width: '100%',
		},
		[theme.breakpoints.up('sm')]: {
			marginTop: theme.spacing(10 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			// marginTop: theme.spacing(20 / 4),
		},
	},
	pagination: {
		marginTop: theme.spacing(20 / 4),
	},
	paginationList: {
		'& .MuiPagination-ul': {
			justifyContent: 'center',
		},
	},
}));
