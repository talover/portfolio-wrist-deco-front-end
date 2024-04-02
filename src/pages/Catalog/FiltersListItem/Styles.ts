import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	accordion: {
		borderRadius: `${theme.spacing(8 / 4)} !important`,
		background: `${theme.palette.primary.whiteLight} !important`,
		boxShadow: 'none !important ',
		border: `1px solid ${theme.palette.secondary.lighter} !important`,
		marginBottom: theme.spacing(10 / 4),
		// padding: theme.spacing(15 / 4),
		'&:before': {
			display: 'none',
		},
		[theme.breakpoints.up('lg')]: {
			borderRadius: `${theme.spacing(10 / 4)} !important`,
			marginBottom: theme.spacing(20 / 4),
			// padding: theme.spacing(20 / 4),
		},
		'& > .MuiButtonBase-root': {
			margin: 0,
			minHeight: '0 !important',
			padding: theme.spacing(15 / 4),
			[theme.breakpoints.up('lg')]: {
				padding: theme.spacing(20 / 4),
			},
		},
		'& .MuiAccordionSummary-content': {
			margin: '0 !important',
		},
		'& .MuiAccordionDetails-root': {
			padding: theme.spacing(0, 15 / 4, 0, 0),
			marginTop: theme.spacing(-7 / 4),
			[theme.breakpoints.up('lg')]: {
				padding: theme.spacing(0, 20 / 4, 20 / 4, 0),
			},
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
		fontSize: theme.spacing(16 / 4),
		color: theme.palette.secondary.main,
	},
	accordionCont: {
		padding: theme.spacing(15 / 4),
		paddingTop: 0,
		[theme.breakpoints.up('lg')]: {
			maxHeight: theme.spacing(260 / 4),
			overflow: 'auto',
			padding: theme.spacing(20 / 4),
			paddingTop: 0,
			'&::-webkit-scrollbar': {
				width: theme.spacing(2 / 4),
			},
			'&::-webkit-scrollbar-track': {
				background: theme.palette.secondary.lighter,
			},
			'&::-webkit-scrollbar-thumb': {
				background: theme.palette.secondary.light,
			},
			'&::-webkit-scrollbar-thumb:hover': {
				background: theme.palette.secondary.dark,
			},
		},
	},
}));
