import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	section: {
		marginTop: theme.spacing(20 / 4),
		color: theme.palette.secondary.main,
		fontSize: theme.spacing(14 / 4),
		display: 'grid',
		gap: theme.spacing(10 / 4),
		fontWeight: 300,
		'& > div': {
			display: 'flex',
			flexWrap: 'wrap',
			columnGap: theme.spacing(10 / 4),
		},
		'& a': {
			color: 'inherit',
		},
		[theme.breakpoints.up('lg')]: {
			marginTop: theme.spacing(40 / 4),
			gap: theme.spacing(20 / 4),
			'& > div': {
				columnGap: theme.spacing(16 / 4),
			},
		},
	},
}));
