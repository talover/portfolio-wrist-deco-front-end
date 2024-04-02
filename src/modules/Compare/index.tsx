import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { FormGroup, FormControlLabel, useMediaQuery } from '@mui/material';
import { MainContainer } from '@/components/MainContainer';
import { Item } from './Item.tsx';
import { Attributes, AttributesProps } from './Attributes.tsx';
import { CustomCheckbox } from '@/components/CustomCheckbox';

import { useStyles } from './Styles';
import { Theme } from '@mui/material/styles';

type CompareSection = {
	list: {
		product: {
			name?: string;
			url: string;
			images: {
				url: string;
			}[];
			description?: string;
			price?: string;
			country?: string;
			condition?: string;
			shipping?: string;
			wishlist?: boolean;
		};
		attributes: AttributesProps[];
	}[];
};
export const CompareSection = ({ list }: CompareSection) => {
	const classes = useStyles();
	const md = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
	return (
		<div className={classes.compare}>
			<MainContainer>
				{!md && (
					<FormGroup>
						<FormControlLabel control={<CustomCheckbox />} label="Only show differences" />
					</FormGroup>
				)}
				<div className={classes.container}>
					<div className={classes.aside}>
						<div className={classes.asideHeader}>
							{md && (
								<FormGroup>
									<FormControlLabel control={<CustomCheckbox />} label="Only show differences" />
								</FormGroup>
							)}
						</div>
						{list.length > 0 && (
							<React.Fragment>
								{list[0].attributes.map((item, index) => (
									<React.Fragment key={index}>
										<div className={classes.attributesHead}>
											<span>{item.title}</span>
										</div>
										{item.list.map((item, index) => (
											<React.Fragment key={index}>
												<div className={classes.attributesHeadItem}>
													<span>{item.name}</span>
												</div>
											</React.Fragment>
										))}
									</React.Fragment>
								))}
							</React.Fragment>
						)}
					</div>
					<div className={classes.sliderWrap}>
						<Swiper
							slidesPerView={'auto'}
							spaceBetween={0}
							pagination={{
								clickable: true,
							}}
						>
							{list.map((item, index) => (
								<SwiperSlide key={index} className={classes.item}>
									<Item
										name={item.product.name}
										url={item.product.url}
										images={item.product.images}
										description={item.product.description}
										price={item.product.price}
										country={item.product.country}
										condition={item.product.condition}
										shipping={item.product.shipping}
										wishlist={item.product.wishlist}
										remove={{ onClick: () => console.log('remove') }}
										compareItem={true}
									/>
									{item.attributes.map((item, index) => (
										<Attributes key={index} title={item.title} list={item.list} />
									))}
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</MainContainer>
		</div>
	);
};
