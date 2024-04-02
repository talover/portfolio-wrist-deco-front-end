import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { Box } from '@mui/material';
import { Item } from './Item';
import { Section } from '@/components/Section';

import ArrowCircleLeftIcon from '@/assets/icons/arrow-circle-left-2.svg';
import ArrowCircleRightIcon from '@/assets/icons/arrow-circle-right-2.svg';

import { useStyles } from './Styles';

type CustomerTestimonialsProps = {
	list: {
		rating: number;
		date: string;
		description: string;
		author: {
			name: string;
			avatar: string;
			city: string;
		};
	}[];
};

export const CustomerTestimonials = ({ list }: CustomerTestimonialsProps) => {
	const swiperRef = useRef<SwiperType>();
	const classes = useStyles();
	return (
		<Section title="Customer Testimonials" className={classes.section}>
			<Box className={classes.wrap}>
				<Box className={classes.sliderWrap}>
					<Swiper
						centeredSlides={true}
						spaceBetween={10}
						loop={true}

						pagination={{
							clickable: true,
							dynamicBullets: true,
						}}
						onSwiper={swiper => {
							swiperRef.current = swiper;
						}}
						breakpoints={{
							768: {
								spaceBetween: 20
							},
							1024: {
								spaceBetween: 30
							},
						}}
						modules={[ Pagination, Navigation]}
					>
						{list.map((item, index) => (
							<SwiperSlide key={index} className={classes.slide}>
								<Item
									rating={item.rating}
									date={item.date}
									description={item.description}
									author={{
										name: item.author.name,
										avatar: item.author.avatar,
										city: item.author.city,
									}}
								/>
							</SwiperSlide>
						))}
					</Swiper>
					<Box
						component="button"
						className={`arrow-swiper ${classes.arrow} ${classes.arrowPrev}`}
						onClick={() => swiperRef.current?.slidePrev()}
					>
						<ArrowCircleLeftIcon />
					</Box>
					<Box
						component="button"
						className={`arrow-swiper ${classes.arrow} ${classes.arrowNext}`}
						onClick={() => swiperRef.current?.slideNext()}
					>
						<ArrowCircleRightIcon />
					</Box>
				</Box>
			</Box>
		</Section>
	);
};
