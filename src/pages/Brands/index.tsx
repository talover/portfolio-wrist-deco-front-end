import { Typography } from '@mui/material';
import theme from '@/config/theme.ts';
import { MainContainer } from '@/components/MainContainer';
import { CustomBreadcrumbs } from '@/components/CustomBreadcrumbs';
import { BrandsGridSlider } from '@/modules/BrandsGridSlider';
import { Manufacturers } from '@/modules/Manufacturers';
import { FeedBack } from '@/modules/FeedBack';

const BrandsData = [
	{
		img: '/img/brands/rolex.svg',
		href: '/',
	},
	{
		img: '/img/brands/breitling.svg',
		href: '/',
	},
	{
		img: '/img/brands/ap.svg',
		href: '/',
	},
	{
		img: '/img/brands/hublot.svg',
		href: '/',
	},
	{
		img: '/img/brands/pf.svg',
		href: '/',
	},
	{
		img: '/img/brands/omega.svg',
		href: '/',
	},
	{
		img: '/img/brands/vc.svg',
		href: '/',
	},
	{
		img: '/img/brands/cartier.svg',
		href: '/',
	},
	{
		img: '/img/brands/rolex.svg',
		href: '/',
	},
	{
		img: '/img/brands/breitling.svg',
		href: '/',
	},
	{
		img: '/img/brands/ap.svg',
		href: '/',
	},
	{
		img: '/img/brands/hublot.svg',
		href: '/',
	},
	{
		img: '/img/brands/pf.svg',
		href: '/',
	},
	{
		img: '/img/brands/omega.svg',
		href: '/',
	},
	{
		img: '/img/brands/vc.svg',
		href: '/',
	},
	{
		img: '/img/brands/cartier.svg',
		href: '/',
	},
];

const ManufacturersData = [
	{
		title: 'A',
		list: [
			{
				name: 'A. Lange & Söhne',
				href: '/',
			},
			{
				name: 'Alfred Dunhill',
				href: '/',
			},
			{
				name: 'Aquanautic',
				href: '/',
			},
			{
				name: 'Askania',
				href: '/',
			},
			{
				name: 'ABP Paris',
				href: '/',
			},
			{
				name: 'Alfred Rochat & Fils',
				href: '/',
			},
			{
				name: 'Aquastar',
				href: '/',
			},
			{
				name: 'Ateliers deMonaco',
				href: '/',
			},
			{
				name: 'Accutron',
				href: '/',
			},
			{
				name: 'Alpina',
				href: '/',
			},
			{
				name: 'Aristo',
				href: '/',
			},
			{
				name: 'Atlantic',
				href: '/',
			},
			{
				name: 'AD-Chronographen',
				href: '/',
			},
			{
				name: 'Andersen Genève',
				href: '/',
			},
			{
				name: 'Armand Nicolet',
				href: '/',
			},
			{
				name: 'Audemars Piguet',
				href: '/',
			},
			{
				name: 'Aerowatch',
				href: '/',
			},
			{
				name: 'Andreas Strehler',
				href: '/',
			},
			{
				name: 'Armani',
				href: '/',
			},
			{
				name: 'Auguste Reymond',
				href: '/',
			},
			{
				name: 'Aigle',
				href: '/',
			},
			{
				name: 'Angelus',
				href: '/',
			},
			{
				name: 'Armin Strom',
				href: '/',
			},
			{
				name: 'Auricoste',
				href: '/',
			},
			{
				name: 'Aigner',
				href: '/',
			},
			{
				name: 'Angular Momentum',
				href: '/',
			},
			{
				name: 'Arnold & Son',
				href: '/',
			},
			{
				name: 'Avier',
				href: '/',
			},
			{
				name: 'Alain Silberstein',
				href: '/',
			},
			{
				name: 'Anonimo',
				href: '/',
			},
			{
				name: 'Artisanal',
				href: '/',
			},
			{
				name: 'Azimuth',
				href: '/',
			},
			{
				name: 'Alexander Shorokhoff',
				href: '/',
			},
			{
				name: 'Apple',
				href: '/',
			},
			{
				name: 'Artya',
				href: '/',
			},
			{
				name: 'Azzaro',
				href: '/',
			},
		],
	},
	{
		title: 'B',
		list: [
			{
				name: 'A. Lange & Söhne',
				href: '/',
			},
			{
				name: 'Alfred Dunhill',
				href: '/',
			},
			{
				name: 'Aquanautic',
				href: '/',
			},
			{
				name: 'Askania',
				href: '/',
			},
			{
				name: 'ABP Paris',
				href: '/',
			},
			{
				name: 'Alfred Rochat & Fils',
				href: '/',
			},
			{
				name: 'Aquastar',
				href: '/',
			},
			{
				name: 'Ateliers deMonaco',
				href: '/',
			},
			{
				name: 'Accutron',
				href: '/',
			},
			{
				name: 'Alpina',
				href: '/',
			},
			{
				name: 'Aristo',
				href: '/',
			},
			{
				name: 'Atlantic',
				href: '/',
			},
			{
				name: 'AD-Chronographen',
				href: '/',
			},
			{
				name: 'Andersen Genève',
				href: '/',
			},
			{
				name: 'Armand Nicolet',
				href: '/',
			},
			{
				name: 'Audemars Piguet',
				href: '/',
			},
			{
				name: 'Aerowatch',
				href: '/',
			},
			{
				name: 'Andreas Strehler',
				href: '/',
			},
			{
				name: 'Armani',
				href: '/',
			},
			{
				name: 'Auguste Reymond',
				href: '/',
			},
			{
				name: 'Aigle',
				href: '/',
			},
			{
				name: 'Angelus',
				href: '/',
			},
			{
				name: 'Armin Strom',
				href: '/',
			},
			{
				name: 'Auricoste',
				href: '/',
			},
			{
				name: 'Aigner',
				href: '/',
			},
			{
				name: 'Angular Momentum',
				href: '/',
			},
			{
				name: 'Arnold & Son',
				href: '/',
			},
			{
				name: 'Avier',
				href: '/',
			},
			{
				name: 'Alain Silberstein',
				href: '/',
			},
			{
				name: 'Anonimo',
				href: '/',
			},
			{
				name: 'Artisanal',
				href: '/',
			},
			{
				name: 'Azimuth',
				href: '/',
			},
			{
				name: 'Alexander Shorokhoff',
				href: '/',
			},
			{
				name: 'Apple',
				href: '/',
			},
			{
				name: 'Artya',
				href: '/',
			},
			{
				name: 'Azzaro',
				href: '/',
			},
		],
	},
	{
		title: 'C',
		list: [
			{
				name: 'A. Lange & Söhne',
				href: '/',
			},
			{
				name: 'Alfred Dunhill',
				href: '/',
			},
			{
				name: 'Aquanautic',
				href: '/',
			},
			{
				name: 'Askania',
				href: '/',
			},
			{
				name: 'ABP Paris',
				href: '/',
			},
			{
				name: 'Alfred Rochat & Fils',
				href: '/',
			},
			{
				name: 'Aquastar',
				href: '/',
			},
			{
				name: 'Ateliers deMonaco',
				href: '/',
			},
			{
				name: 'Accutron',
				href: '/',
			},
			{
				name: 'Alpina',
				href: '/',
			},
			{
				name: 'Aristo',
				href: '/',
			},
			{
				name: 'Atlantic',
				href: '/',
			},
			{
				name: 'AD-Chronographen',
				href: '/',
			},
			{
				name: 'Andersen Genève',
				href: '/',
			},
			{
				name: 'Armand Nicolet',
				href: '/',
			},
			{
				name: 'Audemars Piguet',
				href: '/',
			},
			{
				name: 'Aerowatch',
				href: '/',
			},
			{
				name: 'Andreas Strehler',
				href: '/',
			},
			{
				name: 'Armani',
				href: '/',
			},
			{
				name: 'Auguste Reymond',
				href: '/',
			},
			{
				name: 'Aigle',
				href: '/',
			},
			{
				name: 'Angelus',
				href: '/',
			},
			{
				name: 'Armin Strom',
				href: '/',
			},
			{
				name: 'Auricoste',
				href: '/',
			},
			{
				name: 'Aigner',
				href: '/',
			},
			{
				name: 'Angular Momentum',
				href: '/',
			},
			{
				name: 'Arnold & Son',
				href: '/',
			},
			{
				name: 'Avier',
				href: '/',
			},
			{
				name: 'Alain Silberstein',
				href: '/',
			},
			{
				name: 'Anonimo',
				href: '/',
			},
			{
				name: 'Artisanal',
				href: '/',
			},
			{
				name: 'Azimuth',
				href: '/',
			},
			{
				name: 'Alexander Shorokhoff',
				href: '/',
			},
			{
				name: 'Apple',
				href: '/',
			},
			{
				name: 'Artya',
				href: '/',
			},
			{
				name: 'Azzaro',
				href: '/',
			},
		],
	},
];

export const Brands = () => {
	return (
		<>
			<MainContainer>
				<CustomBreadcrumbs
					maxItems={2}
					list={[{ name: 'Brands', href: '/' }]}
					current={'Rolex'}
					sx={{ marginTop: { xs: 10 / 4, lg: 3 / 4 }, marginBottom: { xs: 15 / 4, lg: 33 / 4 } }}
				/>
				<Typography color={theme.palette.secondary.dark} marginBottom={{ xs: 20 / 4, lg: 33 / 4 }} variant="h1">
					Watch Brands and Manufacturers
				</Typography>
			</MainContainer>
			<BrandsGridSlider list={BrandsData} />
			<Manufacturers list={ManufacturersData} />
			<FeedBack />
		</>
	);
};
