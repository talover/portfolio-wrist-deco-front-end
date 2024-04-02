import { Box } from '@mui/material';
import { Card } from '@/components/Card';
import { useStyles } from './Styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

type FlexibleCardData = {
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

type FlexibleCardProps = {
	cardsList: FlexibleCardData[];
};

export const CardsGrid = ({ cardsList }: FlexibleCardProps) => {
	const classes = useStyles();

	return (
		<Box className={classes.list}>
			{cardsList.map((item, index) => (
				<Box key={index}>
					<Card
						name={item.name}
						url={item.url}
						images={item.images}
						description={item.description}
						price={item.price}
						country={item.country}
						condition={item.condition}
						shipping={item.shipping}
						compare={item.compare}
						wishlist={item.wishlist}
					/>
				</Box>
			))}
		</Box>
	);
};

export const SliderGrid = ({ cardsList }: FlexibleCardProps) => {
	const classes = useStyles();
	return (
		<Box className={classes.slider}>
			<Swiper
				pagination={{
					clickable: true,
					dynamicBullets: true,
				}}
				modules={[Pagination]}
				spaceBetween={8}
				slidesPerView={2}
				breakpoints={{
					568: {
						slidesPerView: 3,
						spaceBetween: 10,
					},
					768: { spaceBetween: 18 },
					1024: {
						slidesPerView: 4,
					},
				}}
			>
				{cardsList.map((item, index) => (
					<SwiperSlide key={index}>
						<Card
							name={item.name}
							url={item.url}
							images={item.images}
							description={item.description}
							price={item.price}
							country={item.country}
							condition={item.condition}
							shipping={item.shipping}
							compare={item.compare}
							wishlist={item.wishlist}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};
