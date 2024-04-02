import React from 'react';
import clsx from 'clsx';
import { Box } from '@mui/material';
import { useStyles } from './Styles';

type BoxInfoProps = {
	className?: string;
	title?: string;
	children: React.ReactNode;
};
export const BoxInfo = ({ className, title, children }: BoxInfoProps) => {
	const classes = useStyles();
	return (
		<Box className={clsx(classes.section, className)}>
			{title && (
				<Box component={'h3'} className={classes.title}>
					{title}
				</Box>
			)}
			{children}
		</Box>
	);
};

type TwoColumnsProps = {
	className?: string;
	firstItemChildren: React.ReactNode;
	secondItemChildren: React.ReactNode;
};

export const TwoColumns = ({ className, firstItemChildren, secondItemChildren }: TwoColumnsProps) => {
	const classes = useStyles();

	return (
		<BoxInfo className={clsx(classes.twoColumns, className)}>
			<Box className={classes.twoColumnsItem}>{firstItemChildren}</Box>
			<Box className={classes.twoColumnsItem}>{secondItemChildren}</Box>
		</BoxInfo>
	);
};
