import React from 'react';
import { Theme, Box } from '@mui/system';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		paddingInline: theme.spacing(3.75),
		marginInline: 'auto',
		maxWidth: theme.spacing(350),
	},
	h1: {
		fontSize: theme.spacing(30 / 4),
	},
	h2: {
		fontSize: theme.spacing(20 / 4),
		fontWeight: 500,
		color: theme.palette.secondary.light,
		[theme.breakpoints.up('md')]: {
			fontSize: theme.spacing(24 / 4),
		},
		[theme.breakpoints.up('lg')]: {
			fontSize: theme.spacing(26 / 4),
		},
		[theme.breakpoints.up('xl')]: {
			fontSize: theme.spacing(30 / 4),
		},
	},
	h3: {
		fontSize: theme.spacing(26 / 4),
	},
}));

type CustomTitleProps = {
	children?: React.ReactNode;
	className?: string;
	as?: 'h1' | 'h2' | 'h3';
};

export const CustomTitle = ({ className, children, as = 'h3' }: CustomTitleProps) => {
	const classes = useStyles();
	return (
		<Box className={` ${classes[as]} ${className || ''}`} component={as}>
			{children}
		</Box>
	);
};
