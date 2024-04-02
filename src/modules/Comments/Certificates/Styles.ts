import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	section: {
		textAlign: 'center',
	},
	description: {
		marginTop: theme.spacing(6 / 4),
		fontSize: theme.spacing(12 / 4),
	},
	icon: {
		width: theme.spacing(50 / 4),
		height: theme.spacing(50 / 4),
		margin: 'auto',
		'&>svg': {
			display: 'block',
			width: '100%',
			height: '100%',
		},
	},
}));
