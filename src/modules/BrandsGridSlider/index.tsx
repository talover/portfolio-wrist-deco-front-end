import { useRef } from 'react';
import { Box } from '@mui/material';
import { MainContainer } from '@/components/MainContainer';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Grid, Pagination } from 'swiper/modules';

import { Item, ItemProps } from './Item.tsx';

import { useStyles } from './Styles';
import ArrowCircleLeftIcon from '@/assets/icons/arrow-circle-left-2.svg';
import ArrowCircleRightIcon from '@/assets/icons/arrow-circle-right-2.svg';
import { Swiper as SwiperType } from 'swiper';

type BrandsGridSliderProps = {
	list: ItemProps[];
};
export const BrandsGridSlider = ({ list }: BrandsGridSliderProps) => {
	const classes = useStyles();
	const swiperRef = useRef<SwiperType>();

	return (
		<MainContainer className={classes.section}>
			<Swiper
				slidesPerView={2}
				grid={{
					rows: 2,
					fill: 'row',
				}}
				spaceBetween={8}
				loop={true}
				pagination={{
					clickable: true,
					dynamicBullets: true,
				}}
				onSwiper={swiper => {
					swiperRef.current = swiper;
				}}
				modules={[Grid, Pagination]}
				observer={true}
				breakpoints={{
					'568': {
						spaceBetween: 10,
						slidesPerView: 3,
					},
					'768': {
						spaceBetween: 15,
						slidesPerView: 3,
					},
					'1024': {
						spaceBetween: 20,
						slidesPerView: 4,
					},
					'1280': {
						spaceBetween: 33,
						slidesPerView: 4,
					},
				}}
			>
				{list.map((item, index) => (
					<SwiperSlide key={index}>
						<Item img={item.img} href={item.href} />
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
		</MainContainer>
	);
};
