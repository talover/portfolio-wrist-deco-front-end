import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	section: {
		[theme.breakpoints.down('md')]: {
			marginBottom: theme.spacing(40 / 4),
		},
	},
	item: {
		marginBottom: theme.spacing(10 / 4),
		[theme.breakpoints.up('md')]: {
			marginBottom: theme.spacing(40 / 4),
		},
	},
	itemTitle: {
		background: theme.palette.primary.whiteLight,
		borderRadius: theme.spacing(8 / 4),
		padding: theme.spacing(5 / 4, 15 / 4),
		lineHeight: 1.5,
		fontWeight: 700,
		fontSize: theme.spacing(20 / 4),
		color: theme.palette.secondary.light,
		marginBottom: theme.spacing(10 / 4),
		[theme.breakpoints.up('md')]: {
			borderRadius: theme.spacing(10 / 4),
			fontSize: theme.spacing(24 / 4),
			padding: theme.spacing(5 / 4, 20 / 4),
			marginBottom: theme.spacing(30 / 4),
		},
	},
	list: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
		gap: theme.spacing(10 / 4, 30 / 4),
		paddingInline: theme.spacing(10 / 4),
		[theme.breakpoints.up('md')]: {
			gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
		},
		[theme.breakpoints.up('lg')]: {
			paddingInline: theme.spacing(30 / 4),
			gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
		},
	},
	listName: {
		lineHeight: 1.5,
		fontSize: theme.spacing(14 / 4),
		textDecoration: 'none',
		display: 'inline-block',
		position: 'relative',
		color: theme.palette.secondary.light,
		'&:before': {
			transition: '0.3s all ease',
			width: 0,
			height: theme.spacing(1 / 4),
			opacity: 0,
			position: 'absolute',
			left: 0,
			top: '100%',
			content: '""',
			background: theme.palette.primary.main,
		},
		'&:hover:before': {
			opacity: 1,
			width: '100%',
		},
	},
	accordion: {
		borderRadius: `${theme.spacing(8 / 4)} !important`,
		background: `${theme.palette.primary.whiteLight} !important`,
		boxShadow: 'none !important ',
		marginBottom: theme.spacing(10 / 4),
		padding: theme.spacing(15 / 4),
		'&:before': {
			display: 'none',
		},
		'& > .MuiButtonBase-root': {
			margin: 0,
			minHeight: '0 !important',
			padding: 0,
			[theme.breakpoints.up('lg')]: {},
		},
		'& .MuiAccordionSummary-content': {
			margin: '0 !important',
		},
		'& .MuiAccordionDetails-root': {
			padding: theme.spacing(10 / 4, 0, 0),
		},
	},
	accordionIcon: {
		display: 'block',
		width: theme.spacing(24 / 4),
		height: theme.spacing(24 / 4),
		fill: 'currentColor',
	},
	accordionTitle: {
		lineHeight: 1.25,
		fontWeight: 500,
		fontSize: theme.spacing(18 / 4),
		color: theme.palette.secondary.main,
	},
	accordionCont: {},
}));
