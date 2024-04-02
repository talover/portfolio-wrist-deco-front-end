import { type Theme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
import { BoxInfo } from '@/components/BoxInfo';
import { CustomRating } from '@/components/CustomRating';
import { Link } from 'react-router-dom';

import IconProfileCircle from '@/assets/icons/profile-circle.svg';

import { useStyles } from './Styles';

export const SellerInformation = () => {
	const classes = useStyles();
	const lg = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
	return (
		<BoxInfo title={'Seller Information'} className={classes.boxInfo}>
			<Box className={classes.seller}>
				<Box>
					<Box className={classes.sellerName}>
						<IconProfileCircle className={classes.sellerNameIcon} />
						<Box component={'span'}>East Coast Jewelry</Box>
					</Box>
					<Box className={classes.sellerDescription}>Professional dealer</Box>
				</Box>
				<Box className={classes.sellerReviews}>
					<Box className={classes.sellerReviewsNum}>4.9</Box>
					{lg ? <CustomRating rating={4} readOnly /> : <CustomRating size={'small'} rating={4} readOnly />}
					<Box className={classes.sellerReviewsSize}>(457 reviews)</Box>
				</Box>
			</Box>

			<Box className={classes.boxInfoFooter}>
				<Link to={'/dealer'}>More information about this seller</Link>
			</Box>
		</BoxInfo>
	);
};
