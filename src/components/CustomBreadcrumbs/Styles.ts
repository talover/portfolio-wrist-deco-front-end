import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	breadcrumbs: {
		'&.MuiBreadcrumbs-root': {
			color: theme.palette.secondary.light,
			fontWeight: 300,
			fontFamily: 'var(--mainFont)',
			fontSize: theme.spacing(14 / 4),
			// marginBlock: theme.spacing(20 / 4),
			// [theme.breakpoints.up('lg')]: {
			// 	marginBlock: theme.spacing(30 / 4),
			// },
			'& .MuiBreadcrumbs-ol': {
				columnGap: theme.spacing(10 / 4),
				rowGap: theme.spacing(10 / 4),
			},
			'& li': {
				margin: 0,
			},
			'& a': {
				color: 'inherit',
				textDecoration: 'none',
				transition: '0.3s all ease',
				'&:hover': {
					color: theme.palette.primary.main,
				},
			},
		},
	},
	icon: {
		fill: 'currentColor',
		display: 'block',
		width: theme.spacing(24 / 4),
		height: theme.spacing(24 / 4),
	},
}));
