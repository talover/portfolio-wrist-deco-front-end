import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	footer: {
		background: theme.palette.secondary.dark,
		padding: theme.spacing(30 / 4, 0, 40 / 4),
		color: theme.palette.primary.white,
	},
	row: {
		[theme.breakpoints.up('md')]: {
			display: 'grid',
			gap: theme.spacing(50 / 4, 30 / 4),
			gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
		},
		[theme.breakpoints.up('xl')]: {
			display: 'grid',
			gridTemplateColumns: `${theme.spacing(300 / 4)} repeat(4, minmax(0, 1fr))`,
			gap: theme.spacing(30 / 4),
		},
	},
	hero: {
		[theme.breakpoints.up('md')]: {
			gridColumn: 'span 3 / span 3',
		},
		[theme.breakpoints.up('xl')]: {
			gridColumn: 'span 1 / span 1',
		},
	},
	itemsList: {
		marginTop: theme.spacing(30 / 4),
	},
	item: {
		[theme.breakpoints.only('md')]: {
			order: 'initial',
			'&:nth-child(2)': {
				order: 5,
			},
			'&:nth-child(3)': {
				order: 2,
			},
			'&:nth-child(4)': { order: 3 },
			'&:nth-child(5)': {
				order: 1,
				gridColumn: 'span 3 / span 3',
			},
			'&:not(:nth-child(5))': {
				gridColumn: 'span 2 / span 2',
			},
		},
		[theme.breakpoints.only('lg')]: {
			order: 'initial',
			'&:nth-child(2)': {
				order: 5,
			},
			'&:nth-child(3)': {
				order: 2,
			},
			'&:nth-child(4)': { order: 3 },
			'&:nth-child(5)': {
				order: 1,
				gridColumn: 'span 3 / span 3',
			},
			'&:not(:nth-child(5))': {
				gridColumn: 'span 2 / span 2',
			},
		},
	},
	logo: {
		width: theme.spacing(114 / 4),
		height: theme.spacing(31 / 4),
		display: 'block',
		[theme.breakpoints.up('md')]: {
			width: theme.spacing(200 / 4),
			height: theme.spacing(62 / 4),
		},
		[theme.breakpoints.up('xl')]: {
			width: theme.spacing(231 / 4),
		},
	},
	heroDescription: {
		color: theme.palette.primary.mainAccent,
		fontSize: theme.spacing(14 / 4),
		marginTop: theme.spacing(10 / 4),
		[theme.breakpoints.up('xl')]: {
			fontSize: theme.spacing(16 / 4),
		},
	},
	heroSocialBox: {
		marginTop: theme.spacing(30 / 4),
		[theme.breakpoints.up('xl')]: {
			marginTop: theme.spacing(48 / 4),
		},
	},
	heroSocialTitle: {
		margin: theme.spacing(0, 0, 20 / 4),
		fontSize: theme.spacing(16 / 4),
		fontWeight: 400,
	},
	heroSocial: {
		color: theme.palette.primary.white,
	},
	itemTitle: {
		margin: theme.spacing(0, 0, 20 / 4),
		lineHeight: 1.25,
		fontWeight: 500,
		fontSize: theme.spacing(16 / 4),
		[theme.breakpoints.up('xl')]: {
			marginBottom: theme.spacing(30 / 4),
		},
	},
	accordion: {
		borderRadius: '0 !important',
		background: 'none !important',
		color: `${theme.palette.primary.white} !important`,
		'& .MuiButtonBase-root': {
			margin: theme.spacing(0, 0, 20 / 4),
			padding: 0,
			minHeight: '0 !important',
		},
		'& .MuiAccordionSummary-content': {
			margin: '0 !important',
		},
		'& $itemTitle': {
			margin: 0,
		},
		'& .MuiAccordionDetails-root': {
			padding: theme.spacing(0, 0, 10 / 4),
		},
	},
	accordionIcon: {
		display: 'block',
		width: theme.spacing(24 / 4),
		height: theme.spacing(24 / 4),
		fill: 'currentColor',
		color: `${theme.palette.primary.white} !important`,
	},
	list: {
		padding: 0,
		margin: 0,
		listStyle: 'none',
		display: 'grid',
		gap: theme.spacing(15 / 4),
		[theme.breakpoints.up('xl')]: {
			gap: theme.spacing(30 / 4),
		},
	},
	listBtn: {
		textDecoration: 'none',
		color: theme.palette.primary.white,
		fontWeight: 300,
		fontSize: theme.spacing(14 / 4),
		transition: '0.3s color ease',
		[theme.breakpoints.up('xl')]: {
			fontSize: theme.spacing(16 / 4),
		},
		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
	contactsList: {
		padding: 0,
		margin: 0,
		listStyle: 'none',
		display: 'grid',
		gap: theme.spacing(30 / 4),
	},
	contactsListLabel: {
		marginBottom: theme.spacing(20 / 4),
		fontSize: theme.spacing(16 / 4),
		fontWeight: 300,
	},
	contactsListInner: {
		display: 'flex',
		flexWrap: 'wrap',
		columnGap: theme.spacing(10 / 4),
		textDecoration: 'none',
		color: 'inherit',
		fontSize: theme.spacing(16 / 4),
		fontWeight: 700,
	},
	contactsListIcon: {
		width: theme.spacing(24 / 4),
		height: theme.spacing(24 / 4),
		fill: 'currentcolor',
		display: 'block',
	},
	paymentMethods: {
		marginTop: theme.spacing(20 / 4),
		[theme.breakpoints.up('md')]: {
			marginTop: theme.spacing(60 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			marginTop: theme.spacing(40 / 4),
		},
	},
	paymentMethodsTitle: {
		margin: theme.spacing(0, 0, 20 / 4),
		fontSize: theme.spacing(16 / 4),
		fontWeight: 400,
	},
	paymentMethodsList: {
		display: 'flex',
		flexWrap: 'wrap',
		columnGap: theme.spacing(10 / 4),
		rowGap: theme.spacing(10 / 4),
		[theme.breakpoints.up('xl')]: {
			columnGap: theme.spacing(16 / 4),
			rowGap: theme.spacing(16 / 4),
		},
	},
	paymentMethodsImg: {
		display: 'block',
	},
	copyrightLinks: {
		listStyle: 'none',
		padding: 0,
		margin: theme.spacing(40 / 4, 0, 0),
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		columnGap: theme.spacing(20 / 4),
		rowGap: theme.spacing(10 / 4),
		[theme.breakpoints.up('md')]: {
			margin: theme.spacing(70 / 4, 0, 0),
			columnGap: theme.spacing(80 / 4),
		},
	},
	copyrightLinksItem: {
		fontWeight: 300,
		fontSize: theme.spacing(14 / 4),
	},
	copyrightLinksLink: {
		textDecoration: 'none',
		transition: '0.3s color ease',
		color: 'inherit',
		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
}));
