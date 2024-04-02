import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	list: {
		padding: 0,
		margin: 0,
		listStyle: 'none',
		display: 'flex',
		columnGap: theme.spacing(20 / 4),
		color: theme.palette.secondary.light,
	},
	item: {
		color: 'inherit',
		transition: '0.3s all ease',
		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
	icon: {
		width: theme.spacing(32 / 4),
		height: theme.spacing(32 / 4),
		fill: 'currentcolor',
	},
}));
