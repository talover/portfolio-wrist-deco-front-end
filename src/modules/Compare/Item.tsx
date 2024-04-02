import { Card, CardProps } from '@/components/Card';
import { useStyles } from './Styles';

export type ItemProps = {
	product: CardProps;
};

export const Item = ({
	name,
	url,
	images,
	description,
	price,
	country,
	condition,
	shipping,
	wishlist,
	compareItem,
	remove,
}: CardProps) => {
	const classes = useStyles();
	return (
		<div className={classes.header}>
			<Card
				name={name}
				url={url}
				images={images}
				description={description}
				price={price}
				country={country}
				condition={condition}
				shipping={shipping}
				wishlist={wishlist}
				compareItem={compareItem}
				remove={remove}
			/>
		</div>
	);
};
