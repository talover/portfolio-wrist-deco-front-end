import { Section } from '@/components/Section';
import { CardsGrid } from '@/components/FlexibleCard';

type RecentlyAddedProductsData = {
	name: string;
	url: string;
	images: {
		url: string;
	}[];
	description: string;
	price?: string;
	country?: string;
	condition?: string;
	shipping?: string;
	compare?: boolean;
	wishlist?: boolean;
};

type RecentlyAddedProductsProps = {
	recentlyAddedProducts: RecentlyAddedProductsData[];
};

export const RecentlyAddedProducts = ({ recentlyAddedProducts }: RecentlyAddedProductsProps) => {
	return (
		<Section title="Recently added products">
			<CardsGrid cardsList={recentlyAddedProducts} />
		</Section>
	);
};
