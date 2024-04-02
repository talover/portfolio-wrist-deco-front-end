import { useStyles } from './Styles';
import { Section } from '@/components/Section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Item } from './Item';

import 'swiper/css';
import 'swiper/css/pagination';

type PopularBrandsProps = {
	list: {
		img: string;
		name: string;
		href: string;
	}[];
};

export const PopularBrands = ({ list }: PopularBrandsProps) => {
	const classes = useStyles();
	return (
		<Section className={classes.section} title="Popular brands">
			<Swiper
				spaceBetween={10}
				slidesPerView={'auto'}
				className={classes.slider}
				breakpoints={{
					768: {
						spaceBetween: 20,
					},
				}}
			>
				{list.map((item, index) => (
					<SwiperSlide key={index} >
						<Item img={item.img} name={item.name} href={item.href} />
					</SwiperSlide>
				))}
			</Swiper>
		</Section>
	);
};
