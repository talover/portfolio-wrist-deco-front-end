import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	list: {
		padding: 0,
		margin: 0,
		listStyle: 'none',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'column',
		rowGap: theme.spacing(10 / 4),
	},
	item: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'self-start',
		columnGap: theme.spacing(10 / 4),
		[theme.breakpoints.up('lg')]: {
			columnGap: theme.spacing(20 / 4),
		},
	},
	icon: {
		fill: 'currentcolor',
		width: theme.spacing(17.5 / 4),
		height: theme.spacing(17.5 / 4),
		color: theme.palette.success.main,
		[theme.breakpoints.up('lg')]: {
			width: theme.spacing(21.2 / 4),
			height: theme.spacing(21.2 / 4),
		},
	},
	text: {
		flex: '1',
		fontWeight: 300,
		fontSize: theme.spacing(14 / 4),
		lineHeight: 1.25,
		[theme.breakpoints.up('lg')]: {
			fontSize: theme.spacing(16 / 4),
		},
	},
}));
