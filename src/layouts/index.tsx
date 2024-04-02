import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/common/Header';
import { Footer } from '@/common/Footer';

const menuData = [
	{
		name: 'Brands',
		icon: 'brands',
		subMenu: [
			{
				name: 'Rolex',
				href: '/catalog',
			},
			{
				name: 'Omega',
				href: '/catalog',
			},
			{
				name: 'Patek Philippe',
				href: '/catalog',
			},
			{
				name: 'Audemars Piguet',
				href: '/catalog',
			},
			{
				name: 'Breitling',
				href: '/catalog',
			},
			{
				name: 'Tudor',
				href: '/catalog',
			},
			{
				name: 'Cartier',
				href: '/catalog',
			},
			{
				name: 'Panerai',
				href: '/catalog',
			},
			{
				name: 'IWC',
				href: '/catalog',
			},
			{
				name: 'Seiko',
				href: '/catalog',
			},
			{
				name: 'Jaeger-LeCoultre',
				href: '/catalog',
			},
			{
				name: 'TAG Heuer',
				href: '/catalog',
			},
			{
				name: 'Hublot',
				href: '/catalog',
			},
			{
				name: 'Zenith',
				href: '/catalog',
			},
			{
				name: 'Vacheron Constantin',
				href: '/catalog',
			},
			{
				name: 'Longines',
				href: '/catalog',
			},
			{
				name: 'A. Lange & Söhne',
				href: '/catalog',
			},
			{
				name: 'Richard Mille',
				href: '/catalog',
			},
			{
				name: 'Breguet',
				href: '/catalog',
			},
			{
				name: 'Ulysse Nardin',
				href: '/catalog',
			},
			{
				name: 'Hamilton',
				href: '/catalog',
			},
			{
				name: 'NOMOS',
				href: '/catalog',
			},
			{
				name: 'Oris',
				href: '/catalog',
			},
			{
				name: 'Sinn',
				href: '/catalog',
			},
		],
		more: '/brands',
	},
	{
		name: 'Categories',
		icon: 'categories',
		subMenu: [
			{
				name: `Men's Watches`,
				href: '/catalog',
			},
			{
				name: `Women's Watches`,
				href: '/catalog',
			},
			{
				name: 'New Watches',
				href: '/catalog',
			},
			{
				name: 'Pre-Owned Watches',
				href: '/catalog',
			},
			{
				name: 'Mechanical Watches',
				href: '/catalog',
			},
			{
				name: 'Automatic Watches',
				href: '/catalog',
			},
			{
				name: 'Vintage Watches',
				href: '/catalog',
			},
			{
				name: 'Chronographs',
				href: '/catalog',
			},
			{
				name: 'Diving Watches',
				href: '/catalog',
			},
			{
				name: `Pilot's Watches`,
				href: '/catalog',
			},
			{
				name: 'Military Watches',
				href: '/catalog',
			},
			{
				name: 'Swiss Watches',
				href: '/catalog',
			},
			{
				name: 'Affordable Watches',
				href: '/catalog',
			},
			{
				name: 'Popular watches',
				href: '/catalog',
			},
			{
				name: 'Bracelets and Straps',
				href: '/catalog',
			},
			{
				name: 'Parts and Accessories',
				href: '/catalog',
			},
		],
		more: '/',
	},
	{
		name: 'Services',
		icon: 'services',
		subMenu: [
			{
				name: 'Watch Collection',
				href: '/catalog',
			},
			{
				name: 'Dealer Search',
				href: '/catalog',
			},
			{
				name: 'Appraisal',
				href: '/catalog',
			},
			{
				name: 'Chronographs',
				href: '/catalog',
			},
			{
				name: 'Watch Explorer',
				href: '/catalog',
			},
		],
		more: '/',
	},
	{
		name: 'Buyer Protection',
		icon: 'buyerProtection',
		href: '/buyer-protection',
	},
	{
		name: 'Sell a watch',
		icon: 'sellAWatch',
		href: '/sell-watch',
	},
];

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}


export const Layout = () => {
	return (
		<>
			<ScrollToTop />
			<Header menu={menuData} />
			<Outlet />
			<Footer />
		</>
	);
};
