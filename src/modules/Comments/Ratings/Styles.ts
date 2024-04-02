import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	section: {
		color: theme.palette.secondary.light,
		[theme.breakpoints.down('md')]: {},
	},
	row: {
		display: 'grid',
		gap: theme.spacing(30 / 4),
		[theme.breakpoints.up('lg')]: {
			gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
		},
		[theme.breakpoints.up('xl')]: {
			gridTemplateColumns: `${theme.spacing(150 / 4)} 1fr ${theme.spacing(308 / 4)}`,
		},
	},
	title: {
		fontSize: theme.spacing(16 / 4),
		fontWeight: 400,
		margin: theme.spacing(0, 0, 20 / 4),
		letterSpacing: '-0.05em',
	},
	average: {
		textAlign: 'center',
		'& $title': {
			marginBottom: theme.spacing(15 / 4),
		},
	},
	averageNumber: {
		color: theme.palette.success.main,
		fontWeight: 700,
		fontSize: theme.spacing(24 / 4),
		letterSpacing: '-0.05em',
		fontFamily: 'var(--secondFont)',
		marginBottom: theme.spacing(8 / 4),
	},
	averageReviews: {
		marginTop: theme.spacing(7 / 4),
		fontSize: theme.spacing(14 / 4),
	},
	detailedRating: {
		display: 'flex',
		flexWrap: 'wrap',
		columnGap: theme.spacing(10 / 4),
		fontSize: theme.spacing(12 / 4),
		alignItems: 'center',
		[theme.breakpoints.up('sm')]: {
			columnGap: theme.spacing(20 / 4),
			fontSize: theme.spacing(14 / 4),
		},
	},
	detailedRatingList: {
		display: 'grid',
		gap: theme.spacing(10 / 4),
	},
	detailedRatingNumber: {
		// fontSize: theme.spacing(14 / 4),
	},
	detailedRatingDescription: {
		fontWeight: 300,
	},
	progressList: {
		maxWidth: theme.spacing(292 / 4),
		margin: 'auto',
		display: 'grid',
		gap: theme.spacing(10 / 4),
	},
}));
