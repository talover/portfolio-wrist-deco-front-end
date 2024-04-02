import { useRef } from 'react';
import { useStyles } from './Styles';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { Item } from './Item';
import ArrowCircleLeftIcon from '@/assets/icons/arrow-circle-left-2.svg';
import ArrowCircleRightIcon from '@/assets/icons/arrow-circle-right-2.svg';

type HeroProps = {
	list: {
		img: string;
		imgTablet?: string;
		imgDesktop?: string;
		href: string;
	}[];
};

export const Hero = ({ list }: HeroProps) => {
	const classes = useStyles();
	const swiperRef = useRef<SwiperType>();
	return (
		<Box className={classes.section}>
			<Box className={classes.inner}>
				<Swiper
					className={classes.slider}
					modules={[Autoplay, Pagination, Navigation]}
					loop={true}
					pagination={{
						clickable: true,
						dynamicBullets: true,
					}}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					speed={1000}
					onSwiper={swiper => {
						swiperRef.current = swiper;
					}}
				>
					{list.map((item, index) => (
						<SwiperSlide key={index}>
							<Item img={item.img} imgTablet={item.imgTablet} imgDesktop={item.imgDesktop} href={item.href} />
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
	);
};
