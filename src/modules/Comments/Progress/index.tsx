import clsx from 'clsx';
import { Box, LinearProgress } from '@mui/material';

import { useStyles } from './Styles.ts';

type ProgressProps = {
	className?: string;
	name: string;
	number: string;
	value: number;
};
export const Progress = ({ className, name, number, value }: ProgressProps) => {
	const classes = useStyles();
	return (
		<Box className={clsx(classes.item, className)}>
			<Box className={classes.name}>{name}</Box>
			<Box className={classes.inner}>
				<LinearProgress value={value} variant="determinate" />
			</Box>
			<Box className={classes.number}>{number}</Box>
		</Box>
	);
};
