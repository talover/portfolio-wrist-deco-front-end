import { Box } from '@mui/material';

import IconHeartOutline from '@/assets/icons/heart-outline.svg';
import IconArrowRightArrowLeft from '@/assets/icons/arrow-right-arrow-left.svg';
import IconExport from '@/assets/icons/export.svg';

import { useStyles } from './Styles';

export const ActionList = () => {
	const classes = useStyles();
	return (
		<Box className={classes.actionList}>
			<Box component={'button'} className={classes.actionListBtn}>
				<IconHeartOutline className={classes.actionListIcon} />
				Add to wish list
			</Box>
			<Box component={'button'} className={classes.actionListBtn}>
				<IconArrowRightArrowLeft className={classes.actionListIcon} />
				Compare
			</Box>
			<Box component={'button'} className={classes.actionListBtn}>
				<IconExport className={classes.actionListIcon} />
				Share
			</Box>
		</Box>
	);
};
