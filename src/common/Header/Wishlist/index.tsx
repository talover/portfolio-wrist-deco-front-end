import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/material';
import { Card } from '@/components/Card';

import IconArrowCircleRight from '@/assets/icons/arrow-circle-right.svg';

import { useStyles } from './Styles';

interface WishlistProps {
	open: boolean;
	onClose: () => void;
	list: {
		name: string;
		url: string;
		images: {
			url: string;
		}[];
		description?: string;
		price?: string;
		country?: string;
		condition?: string;
		shipping?: string;
		compare?: boolean;
		wishlist?: boolean;
		remove?: () => void;
	}[];
}

export const Wishlist: React.FC<WishlistProps> = ({ open, onClose, list }) => {
	const classes = useStyles();
	return (
		<Drawer anchor="right" open={open} onClose={onClose}>
			<Box className={classes.wishlist}>
				<Box className={classes.wishlistHeader}>
					<Box component={'h3'} className={classes.wishlistTitle}>
						Wishlist
					</Box>
					<Box component={'button'} onClick={onClose} className={classes.wishlistClose}>
						<IconArrowCircleRight />
					</Box>
				</Box>
				<Box className={classes.wishlistList}>
					{list.map((item, index) => (
						<Card
							key={index}
							name={item.name}
							url={item.url}
							images={item.images}
							description={item.description}
							price={item.price}
							country={item.country}
							condition={item.condition}
							shipping={item.shipping}
							remove={{ onClick: () => console.log('remove'), positionRight: true }}
						/>
					))}
				</Box>
			</Box>
		</Drawer>
	);
};
