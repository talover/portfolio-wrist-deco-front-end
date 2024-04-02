import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	section: {
		[theme.breakpoints.up('md')]: {
			display: 'flex',
			flexWrap: 'wrap',
		},
	},
	sliderWrap: {
		[theme.breakpoints.up('md')]: {
			width: `calc(100% - ${theme.spacing(340 / 4)})`,
			paddingRight: theme.spacing(20 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			width: `calc(100% - ${theme.spacing(435 / 4)})`,
			paddingRight: theme.spacing(57 / 4),
		},
	},
	cont: {
		marginTop: theme.spacing(20 / 4),
		color: theme.palette.secondary.light,
		[theme.breakpoints.up('md')]: {
			width: theme.spacing(340 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			width: theme.spacing(435 / 4),
		},
	},
	infoRow: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		columnGap: theme.spacing(10 / 4),
		rowGap: theme.spacing(10 / 4),
		marginBottom: theme.spacing(4 / 4),
	},
	infoRowText: {
		display: 'flex',
		flexWrap: 'wrap',
		columnGap: theme.spacing(15 / 4),
		marginRight: 'auto',
		fontSize: theme.spacing(14 / 4),
		fontWeight: 300,
		[theme.breakpoints.up('lg')]: {
			columnGap: theme.spacing(30 / 4),
		},
	},
	infoRowIcons: {
		display: 'flex',
		flexWrap: 'wrap',
		columnGap: theme.spacing(10 / 4),
		alignItems: 'center',
		'& svg': {
			display: 'block',
			width: theme.spacing(50 / 4),
			height: theme.spacing(30 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			columnGap: theme.spacing(20 / 4),
		},
	},
	infoRowStock: {
		color: theme.palette.success.main,
	},
	infoRowViews: {
		color: theme.palette.info.lighter,
	},
	title: {
		color: theme.palette.secondary.light,
		margin: `0 0 ${theme.spacing(10 / 4)}`,
		fontSize: theme.spacing(24 / 4),
	},
	category: {
		fontSize: theme.spacing(14 / 4),
		marginBottom: theme.spacing(15 / 4),
	},
	info: {
		marginBlock: theme.spacing(10 / 4),
		fontWeight: 300,
		fontSize: theme.spacing(14 / 4),
		display: 'grid',
		gap: theme.spacing(5 / 4),
		'& b': {
			fontWeight: 500,
		},
		'& a': {
			color: 'inherit',
		},
	},
	price: {
		fontWeight: 700,
		fontSize: theme.spacing(24 / 4),
		marginBlock: theme.spacing(15 / 4),
	},
	paymentMethodsList: {
		display: 'flex',
		flexWrap: 'wrap',
		columnGap: theme.spacing(10 / 4),
		rowGap: theme.spacing(10 / 4),
		marginTop: theme.spacing(20 / 4),
		[theme.breakpoints.up('md')]: {
			justifyContent: 'space-between',
		},
		[theme.breakpoints.up('lg')]: {
			columnGap: theme.spacing(16 / 4),
			rowGap: theme.spacing(16 / 4),
			marginTop: theme.spacing(50 / 4),
		},
	},
	paymentMethodsImg: {
		display: 'block',
		width: theme.spacing(48 / 4),
		// [theme.breakpoints.up('md')]: {
		// 	width: theme.spacing(44 / 4),
		// },
		[theme.breakpoints.up('lg')]: {
			width: theme.spacing(58 / 4),
		},
	},
	btnGroup: {
		display: 'grid',
		gap: theme.spacing(10 / 4),
		marginTop: theme.spacing(15 / 4),
		'& > *': {
			width: '100%',
		},
		[theme.breakpoints.up('lg')]: {
			marginTop: theme.spacing(20 / 4),
			gap: theme.spacing(15 / 4),
			'& > *': {
				height: theme.spacing(50 / 4),
			},
		},
	},
	actionList: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		marginTop: theme.spacing(15 / 4),
		marginBottom: theme.spacing(20 / 4),
		columnGap: theme.spacing(25 / 4),
		[theme.breakpoints.up('lg')]: {
			columnGap: theme.spacing(40 / 4),
			justifyContent: 'flex-start',
			marginTop: theme.spacing(20 / 4),
			marginBottom: theme.spacing(30 / 4),
		},
	},
	actionListBtn: {
		padding: 0,
		margin: 0,
		border: 0,
		outline: 'transparent',
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		columnGap: theme.spacing(5 / 4),
		fontSize: theme.spacing(12 / 4),
		background: 'transparent',
		cursor: 'pointer',
		transition: '0.3s all ease',
		'&:hover': {
			// color: theme.palette.primary.main,
		},
		[theme.breakpoints.up('lg')]: {
			columnGap: theme.spacing(10 / 4),
			fontSize: theme.spacing(14 / 4),
		},
	},
	actionListIcon: {
		width: theme.spacing(24 / 4),
		height: theme.spacing(24 / 4),
		fill: 'currentColor',
	},
	boxInfo: {
		position: 'relative',
		border: 0,
		'& h3': {
			fontSize: theme.spacing(16 / 4),
			marginBottom: theme.spacing(15 / 4),
		},
	},
	boxInfoFooter: {
		marginTop: theme.spacing(15 / 4),
		textAlign: 'center',
		'& a': {
			color: 'inherit',
			fontSize: theme.spacing(14 / 4),
			textDecoration: 'underline',
			fontWeight: 400,
		},
		[theme.breakpoints.up('lg')]: {
			marginTop: theme.spacing(20 / 4),
		},
	},
	checkList: {
		padding: 0,
		margin: 0,
		listStyle: 'none',
		display: 'grid',
		gap: theme.spacing(10 / 4),
	},
	checkListItem: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		columnGap: theme.spacing(8 / 4),
		fontWeight: 300,
		fontSize: theme.spacing(14 / 4),
	},
	checkListIcon: {
		width: theme.spacing(20 / 4),
		height: theme.spacing(20 / 4),
		fill: 'currentColor',
		color: theme.palette.success.main,
		[theme.breakpoints.up('lg')]: {
			width: theme.spacing(24 / 4),
			height: theme.spacing(24 / 4),
		},
	},
	boxInfoIconShield: {
		width: theme.spacing(80 / 4),
		height: theme.spacing(80 / 4),
		color: theme.palette.success.main,
		fill: 'currentColor',
		position: 'absolute',
		top: 0,
		right: 0,
		[theme.breakpoints.up('lg')]: {
			width: theme.spacing(125 / 4),
			height: theme.spacing(125 / 4),
		},
	},
	seller: {
		display: 'grid',
		gap: theme.spacing(10 / 4),
		gridTemplateColumns: `auto ${theme.spacing(120 / 4)}`,
		[theme.breakpoints.up('lg')]: {
			gridTemplateColumns: `auto ${theme.spacing(150 / 4)}`,
		},
	},
	sellerName: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		columnGap: theme.spacing(8 / 4),
		fontWeight: 400,
		fontSize: theme.spacing(14 / 4),
		'& span': {
			flex: 1,
		},
	},
	sellerNameIcon: {
		width: theme.spacing(20 / 4),
		height: theme.spacing(20 / 4),
		fill: 'currentColor',
		color: theme.palette.success.main,
		[theme.breakpoints.up('lg')]: {
			width: theme.spacing(24 / 4),
			height: theme.spacing(24 / 4),
		},
	},
	sellerDescription: {
		paddingLeft: theme.spacing(28 / 4),
		marginTop: theme.spacing(10 / 4),
		fontSize: theme.spacing(14 / 4),
		[theme.breakpoints.up('lg')]: {
			paddingLeft: theme.spacing(32 / 4),
			marginTop: theme.spacing(15 / 4),
		},
	},
	sellerReviews: {
		textAlign: 'center',
		marginTop: theme.spacing(-35 / 4),
	},
	sellerReviewsNum: {
		fontWeight: 700,
		fontSize: theme.spacing(16 / 4),
		letterSpacing: '-0.05em',
		color: theme.palette.success.main,
		marginBottom: theme.spacing(12 / 4),
		[theme.breakpoints.up('lg')]: {
			marginBottom: theme.spacing(14 / 4),
		},
	},
	sellerReviewsSize: {
		fontSize: theme.spacing(14 / 4),
		marginTop: theme.spacing(4 / 4),
		[theme.breakpoints.up('lg')]: {
			marginTop: theme.spacing(12 / 4),
		},
	},
	information: {},
	tabs: {
		'& .MuiTabs-flexContainer': {
			flexWrap: 'wrap',
			width: '100%',
			borderBottom: `2px solid ${theme.palette.primary.whiteLight}`,
			'& $tabsItem': {
				maxWidth: 'none',
				fontFamily: 'var(--mainFont)',
				textTransform: 'none',
				fontWeight: 300,
				fontSize: theme.spacing(16 / 4),
				padding: 0,
				color: theme.palette.secondary.gray,
				letterSpacing: 0,
				minHeight: theme.spacing(45 / 4),
				'&.Mui-selected': {
					color: theme.palette.secondary.light,
					fontWeight: 500,
				},
				[theme.breakpoints.up('lg')]: {
					fontSize: theme.spacing(18 / 4),
				},
			},
		},
	},
	tabsItem: {
		flex: '1 0 0%',
	},
	tab: {
		paddingTop: theme.spacing(20 / 4),
		[theme.breakpoints.up('lg')]: {
			paddingTop: theme.spacing(40 / 4),
		},
	},
	detailsRow: {
		[theme.breakpoints.up('md')]: {
			display: 'grid',
			gap: theme.spacing(30 / 4),
			gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
		},
		[theme.breakpoints.up('lg')]: {
			gap: theme.spacing(40 / 4),
		},
	},
	detailsItem: {
		marginBottom: theme.spacing(30 / 4),
		color: theme.palette.secondary.light,
	},
	detailsItemTitle: {
		margin: `0 0 ${theme.spacing(15 / 4)}`,
		fontWeight: 500,
		fontSize: theme.spacing(16 / 4),
		[theme.breakpoints.up('lg')]: {
			marginBottom: theme.spacing(20 / 4),
			fontSize: theme.spacing(18 / 4),
		},
	},
	detailsItemText: {
		fontWeight: 300,
		fontSize: theme.spacing(14 / 4),
		'& p': {
			margin: '0 0 1em',
		},
	},
	detailsTable: {
		captionSide: 'bottom',
		borderCollapse: 'collapse',
		width: '100%',
		'& td': {
			fontWeight: 300,
			fontSize: theme.spacing(14 / 4),
			borderBottom: `1px solid ${theme.palette.secondary.ultraLightGray}`,
			padding: theme.spacing(10 / 4),
			'&:first-child': {
				width: theme.spacing(160 / 4),
				paddingLeft: 0,
				[theme.breakpoints.up('lg')]: {
					paddingInline: theme.spacing(25 / 4),
					width: theme.spacing(250 / 4),
				},
			},
			'& a': {
				color: 'inherit',
				'&:hover': {
					textDecoration: 'none',
				},
			},
			'& b': {
				fontWeight: 500,
				color: theme.palette.secondary.dark,
			},
		},
	},
}));
