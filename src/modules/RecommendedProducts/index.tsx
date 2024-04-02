import { Section } from '@/components/Section';
import { SliderGrid } from '@/components/FlexibleCard';

type RecommendedProductsData = {
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
};

type RecommendedProductsProps = {
	list: RecommendedProductsData[];
	title?: string;
};

export const RecommendedProducts = ({ list, title }: RecommendedProductsProps) => {
	return (
		<Section title={title}>
			<SliderGrid cardsList={list} />
		</Section>
	);
};
