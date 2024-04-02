import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	section: {
		marginBlock: theme.spacing(30 / 4),
		[theme.breakpoints.up('md')]: {
			marginBlock: theme.spacing(60 / 4),
		},
	},
	list: {
		display: 'grid',
		gridTemplateColumns: '1fr',
		gap: theme.spacing(10 / 4),
		padding: 0,
		margin: 0,
		listStyle: 'none',
		[theme.breakpoints.up('md')]: {
			gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
			gap: theme.spacing(20 / 4),
		},
	},
	item: {
		border: '1px solid' + theme.palette.secondary.lighter,
		borderRadius: theme.spacing(10 / 4),
		padding: theme.spacing(13 / 4, 20 / 4),
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		columnGap: theme.spacing(15 / 4),
		[theme.breakpoints.up('md')]: {
			columnGap: theme.spacing(25 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			paddingLeft: theme.spacing(40 / 4),
		},
	},
	textWrap: {
		flex: 1,
	},
	title: {
		margin: theme.spacing(0, 0, 10 / 4),
		color: theme.palette.secondary.light,
		fontWeight: 400,
		lineHeight: 1.25,
		fontSize: theme.spacing(16 / 4),
	},
	description: {
		color: theme.palette.secondary.light,
		fontSize: theme.spacing(14 / 4),
		fontWeight: 300,
		margin: 0,
	},
	imgWrap: {
		width: theme.spacing(80 / 4),
		height: theme.spacing(80 / 4),
		[theme.breakpoints.up('md')]: {
			width: theme.spacing(120 / 4),
			height: theme.spacing(120 / 4),
		},
	},
	img: {
		width: '100%',
		height: '100%',
	},
}));
