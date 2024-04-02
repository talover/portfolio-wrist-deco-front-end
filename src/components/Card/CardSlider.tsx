import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

import { CardImage } from './CardImage';
import ArrowCircleLeftIcon from '@/assets/icons/arrow-circle-left.svg';
import ArrowCircleRightIcon from '@/assets/icons/arrow-circle-right.svg';
import { Box } from '@mui/material';

import { useStyles } from './Styles';
type CardSliderProps = {
	images: {
		url: string;
	}[];
	url: string;
};

export const CardSlider = ({ url, images }: CardSliderProps) => {
	const swiperRef = useRef<SwiperType>();
	const classes = useStyles();
	return (
		<Box className={classes.sliderWrap}>
			<Swiper
				mousewheel={false}
				allowTouchMove={false}
				loop={true}
				modules={[Navigation, Pagination]}
				pagination={true}
				onSwiper={swiper => {
					swiperRef.current = swiper;
				}}
			>
				{images.map((item, index) => (
					<SwiperSlide key={index}>
						<CardImage url={url} img={item.url} />
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
	);
};
