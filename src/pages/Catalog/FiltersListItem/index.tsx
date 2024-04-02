import React from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import IconAngleDown from '@/assets/icons/angle-down.svg';
import { useStyles } from './Styles';

type FiltersListItemProps = {
	title: string;
	children: React.ReactNode;
	defaultExpanded?: boolean;
};
export const FiltersListItem = ({ title, children, defaultExpanded = false }: FiltersListItemProps) => {
	const classes = useStyles();
	return (
		<Accordion className={classes.accordion} defaultExpanded={defaultExpanded}>
			<AccordionSummary expandIcon={<IconAngleDown className={classes.accordionIcon} />}>
				<Box className={classes.accordionTitle}>{title}</Box>
			</AccordionSummary>
			<AccordionDetails>
				<Box className={classes.accordionCont}>{children}</Box>
			</AccordionDetails>
		</Accordion>
	);
};
