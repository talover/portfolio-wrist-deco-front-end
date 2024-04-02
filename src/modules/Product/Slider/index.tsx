import { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { Img } from 'react-image';
import { Box } from '@mui/material';
import { useStyles } from './Styles';

type SliderProps = {
	list: {
		img: string;
		thumbs: string;
	}[];
};

export const Slider = ({ list }: SliderProps) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

	const classes = useStyles();

	return (
		<Box>
			<Swiper
				spaceBetween={10}
				thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
				modules={[Thumbs, FreeMode]}
			>
				{list.map((item, index) => (
					<SwiperSlide key={index}>
						<Box className={classes.mainSliderImgWrap}>
							<Img src={item.img} alt={''} className={classes.mainSliderImg} />
						</Box>
					</SwiperSlide>
				))}
			</Swiper>

			<Box className={classes.thumbsSliderWrap}>
				<Swiper
					onSwiper={setThumbsSwiper}
					spaceBetween={10}
					slidesPerView={'auto'}
					freeMode={true}
					watchSlidesProgress={true}
					modules={[Thumbs, FreeMode]}
					breakpoints={{
						1280: { spaceBetween: 20 },
					}}
					className={classes.thumbsSlider}
				>
					{list.map((item, index) => (
						<SwiperSlide key={index}>
							<Box className={classes.thumbsSliderItemInner}>
								<Box className={classes.thumbsSliderItem}>
									<Img src={item.thumbs} alt={''} className={classes.thumbsSliderImg} />
								</Box>
							</Box>
						</SwiperSlide>
					))}
				</Swiper>
			</Box>
		</Box>
	);
};
