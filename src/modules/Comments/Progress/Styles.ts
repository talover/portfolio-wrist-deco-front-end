import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	item: {
		display: 'flex',
		flexWrap: 'wrap',
		columnGap: theme.spacing(10 / 4),
		alignItems: 'center',
		fontSize: theme.spacing(14 / 4),
		color: theme.palette.secondary.gray,
	},
	name: {
		minWidth: theme.spacing(40 / 4),
	},
	number: {
		minWidth: theme.spacing(35 / 4),
	},
	inner: {
		flex: 1,
		'& .MuiLinearProgress-root': {
			background: theme.palette.secondary.lightGray,
		},
		'& .MuiLinearProgress-bar': {
			background: theme.palette.primary.star,
		},
	},
}));
