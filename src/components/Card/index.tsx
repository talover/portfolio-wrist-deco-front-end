import clsx from 'clsx';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { CardImage } from './CardImage';
import { CardSlider } from './CardSlider';
import { ButtonCircle } from '@/components/Button';
import HeartIcon from '@/assets/icons/heart.svg';

import ArrowsTwoIcon from '@/assets/icons/arrows-two.svg';
import IconCloseCircle from '@/assets/icons/close-circle.svg';

import { useStyles } from './Styles';

export type CardProps = {
	name?: string;
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
	remove?: {
		onClick: () => void;
		positionRight?: boolean;
	};
	compareItem?: boolean;
};

type CardImageProps = {
	images: {
		url: string;
	}[];
	url: string;
};

const CardImages = ({ images, url }: CardImageProps) => {
	const isSliderNeeded = images.length > 1;
	return isSliderNeeded ? <CardSlider url={url} images={images} /> : <CardImage url={url} img={images[0].url} />;
};

export const Card = ({
	name,
	url,
	images,
	description,
	price,
	country,
	condition,
	shipping,
	compare,
	wishlist,
	remove,
	compareItem,
}: CardProps) => {
	const classes = useStyles();

	return (
		<Box className={clsx(classes.card, compareItem && classes.compareItem)}>
			{remove && (
				<Box className={clsx(classes.cardRemove, remove.positionRight && classes.cardRemoveRight)}>
					<IconCloseCircle />
				</Box>
			)}
			{(wishlist || compare) && (
				<Box className={classes.btnsLike}>
					{wishlist && (
						<ButtonCircle onClick={() => console.log('like')}>
							<HeartIcon />
						</ButtonCircle>
					)}

					{compare && (
						<ButtonCircle onClick={() => console.log('arrows 2')}>
							<ArrowsTwoIcon />
						</ButtonCircle>
					)}
				</Box>
			)}

			<CardImages images={images} url={url} />
			<Box className={classes.cont}>
				<Link to={url} className={classes.name}>
					{name}
				</Link>
				{description && (
					<Box component="p" className={classes.description}>
						{description}
					</Box>
				)}
				<Box className={classes.infoList}>
					<Box className={classes.price}>{price}</Box>
					<Box className={classes.country}>{country}</Box>
					<Box>Condition: {condition}</Box>
					<Box>{shipping}</Box>
				</Box>
			</Box>
		</Box>
	);
};
