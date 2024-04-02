import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Box, Chip } from '@mui/material';
import { Button } from '@/components/Button';

import IconArrowCircleLeft from '@/assets/icons/arrow-circle-left.svg';

import { useStyles } from './Styles';

type AsideDrawerProps = {
	open: boolean;
	onClose: () => void;
	children: React.ReactNode;
	clearAll: () => void;
};

export const AsideDrawer = ({ open, onClose, children, clearAll }: AsideDrawerProps) => {
	const classes = useStyles();
	return (
		<Drawer anchor="left" open={open} onClose={onClose}>
			<Box className={classes.asideDrawer}>
				<Box className={classes.asideDrawerHeader}>
					<Box component={'button'} onClick={onClose} className={classes.asideDrawerClose}>
						<IconArrowCircleLeft />
					</Box>

					<Box component={'h3'} className={classes.asideDrawerTitle}>
						Filters
					</Box>

					<Box className={classes.asideDrawerClearAll}>
						<Chip label="Clear all" variant="outlined" color="error" onClick={clearAll} />
					</Box>
				</Box>
				<Box className={classes.asideDrawerContent}>{children}</Box>
				<Box className={classes.asideDrawerFooter}>
					<Button color={'success'} className={classes.asideDrawerButton}>
						Show
					</Button>
				</Box>
			</Box>
		</Drawer>
	);
};
