import { Box } from '@mui/material';
import { BoxInfo } from '@/components/BoxInfo';

import { Link } from 'react-router-dom';

import IconTickCircle from '@/assets/icons/tick-circle.svg';
import IconShield from '@/assets/icons/shield-thin.svg';

import { useStyles } from './Styles';

export const BuyerProtection = () => {
	const classes = useStyles();
	return (
		<BoxInfo title={'Buyer Protection'} className={classes.boxInfo}>
			<IconShield className={classes.boxInfoIconShield} />
			<Box component={'ul'} className={classes.checkList}>
				<Box component={'li'} className={classes.checkListItem}>
					<IconTickCircle className={classes.checkListIcon} />
					Payment via trust account
				</Box>
				<Box component={'li'} className={classes.checkListItem}>
					<IconTickCircle className={classes.checkListIcon} />
					Authenticity Guarantee
				</Box>
				<Box component={'li'} className={classes.checkListItem}>
					<IconTickCircle className={classes.checkListIcon} />
					Legally mandated 14-day return policy
				</Box>
			</Box>

			<Box className={classes.boxInfoFooter}>
				<Link to={'/'}>Find out more about our security</Link>
			</Box>
		</BoxInfo>
	);
};
