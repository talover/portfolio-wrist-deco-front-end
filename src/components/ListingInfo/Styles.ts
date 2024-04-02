import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	section: {
		color: theme.palette.secondary.light,
		textAlign: 'center',
		'&>div': {
			display: 'flex',
			flexWrap: 'wrap',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			padding: theme.spacing(18 / 4, 15 / 4, 20 / 4),
		},
	},
	number: {
		fontSize: theme.spacing(20 / 4),
		fontWeight: 700,
		'& a': {
			color: 'inherit',
		},
	},
	description: {
		marginTop: theme.spacing(10 / 4),
		fontSize: theme.spacing(12 / 4),
	},
}));
