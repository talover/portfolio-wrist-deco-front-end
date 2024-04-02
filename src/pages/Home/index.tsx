import { RecommendedProducts } from '@/modules/RecommendedProducts';
import { RecentlyAddedProducts } from '@/modules/RecentlyAddedProducts';
import { BuyerProtection } from '@/modules/BuyerProtection';
import { Benefits } from '@/modules/Benefits';
import { Certified } from '@/modules/Certified';
import { PopularBrands } from '@/modules/PopularBrands';
import { Hero } from '@/modules/Hero';
import { PopularСategories } from '@/modules/PopularСategories';
import { FeedBack } from '@/modules/FeedBack';
import { CustomerTestimonials } from '@/modules/CustomerTestimonials';

const recentlyAddedProductsData = [
	{
		name: 'Greubel Forsey',
		url: '/product',
		images: [
			{
				url: '/img/product/product-1.jpg',
			},
		],
		description: 'TOURBILLON 24 DEGREES INCLINE ROSROSROSROSROS',
		price: '$199,000',
		country: 'US',
		condition: 'Very good',
		shipping: 'Free shipping',
		compare: true,
		wishlist: true,
	},
	{
		name: 'Richard Mille',
		url: '/product',
		images: [
			{
				url: '/img/product/product-1.jpg',
			},
			{
				url: '/img/product/product-1.jpg',
			},
			{
				url: '/img/product/product-1.jpg',
			},
			{
				url: '/img/product/product-1.jpg',
			},
			{
				url: '/img/product/product-1.jpg',
			},
		],
		description: 'TOURBILLON 24 DEGREES INCLINE ROSROSROSROSROS',
		price: '$117,700',
		country: 'US',
		condition: 'Unworn',
		shipping: 'Free shipping',
		compare: true,
		wishlist: true,
	},
	{
		name: 'Greubel Forsey',
		url: '/product',
		images: [
			{
				url: '/img/product/product-1.jpg',
			},
		],
		description: 'TOURBILLON 24 DEGREES INCLINE ROSROSROSROSROS',
		price: '$199,000',
		country: 'US',
		condition: 'Very good',
		shipping: 'Free shipping',
		compare: true,
		wishlist: true,
	},
	{
		name: 'Richard Mille',
		url: '/product',
		images: [
			{
				url: '/img/product/product-1.jpg',
			},
			{
				url: '/img/product/product-1.jpg',
			},
			{
				url: '/img/product/product-1.jpg',
			},
			{
				url: '/img/product/product-1.jpg',
			},
			{
				url: '/img/product/product-1.jpg',
			},
		],
		description: 'TOURBILLON 24 DEGREES INCLINE ROSROSROSROSROS',
		price: '$117,700',
		country: 'US',
		condition: 'Unworn',
		shipping: 'Free shipping',
		compare: true,
		wishlist: true,
	},
	{
		name: 'Greubel Forsey',
		url: '/product',
		images: [
			{
				url: '/img/product/product-1.jpg',
			},
		],
		description: 'TOURBILLON 24 DEGREES INCLINE ROSROSROSROSROS',
		price: '$199,000',
		country: 'US',
		condition: 'Very good',
		shipping: 'Free shipping',
		compare: true,
		wishlist: true,
	},
	{
		name: 'Richard Mille',
		url: '/product',
		images: [
			{
				url: '/img/product/product-1.jpg',
			},
			{
				url: '/img/product/product-1.jpg',
			},
			{
				url: '/img/product/product-1.jpg',
			},
			{
				url: '/img/product/product-1.jpg',
			},
			{
				url: '/img/product/product-1.jpg',
			},
		],
		description: 'TOURBILLON 24 DEGREES INCLINE ROSROSROSROSROS',
		price: '$117,700',
		country: 'US',
		condition: 'Unworn',
		shipping: 'Free shipping',
		compare: true,
		wishlist: true,
	},
	{
		name: 'Greubel Forsey',
		url: '/product',
		images: [
			{
				url: '/img/product/product-1.jpg',
			},
		],
		description: 'TOURBILLON 24 DEGREES INCLINE ROSROSROSROSROS',
		price: '$199,000',
		country: 'US',
		condition: 'Very good',
		shipping: 'Free shipping',
		compare: true,
		wishlist: true,
	},
	{
		name: 'Richard Mille',
		url: '/product',
		images: [
			{
				url: '/img/product/product-1.jpg',
			},
			{
				url: '/img/product/product-1.jpg',
			},
			{
				url: '/img/product/product-1.jpg',
			},
			{
				url: '/img/product/product-1.jpg',
			},
			{
				url: '/img/product/product-1.jpg',
			},
		],
		description: 'TOURBILLON 24 DEGREES INCLINE ROSROSROSROSROS',
		price: '$117,700',
		country: 'US',
		condition: 'Unworn',
		shipping: 'Free shipping',
		compare: true,
		wishlist: true,
	},
];

const BuyerProtectionData = [
	'Payment via trust account',
	'Authenticity Guarantee',
	'Legally mandated 14-day return policy',
	'Strict dealer guidelines',
	'Insured shipments',
	'WristDeco quality & security team',
	'Learn more about security on WristDeco',
];

const PopularBrandsData = [
	{
		name: 'Rolex',
		img: '/img/popular-brands/popular-brands-1.jpg',
		href: '/catalog',
	},
	{
		name: 'Breitling',
		img: '/img/popular-brands/popular-brands-2.jpg',
		href: '/catalog',
	},
	{
		name: 'Omega',
		img: '/img/popular-brands/popular-brands-3.jpg',
		href: '/catalog',
	},
	{
		name: 'Audemars Piguet',
		img: '/img/popular-brands/popular-brands-4.jpg',
		href: '/catalog',
	},
	{
		name: 'TAG Heuer',
		img: '/img/popular-brands/popular-brands-5.jpg',
		href: '/catalog',
	},
	{
		name: 'Tudor',
		img: '/img/popular-brands/popular-brands-6.jpg',
		href: '/catalog',
	},
	{
		name: 'Rolex',
		img: '/img/popular-brands/popular-brands-1.jpg',
		href: '/catalog',
	},
	{
		name: 'Breitling',
		img: '/img/popular-brands/popular-brands-2.jpg',
		href: '/catalog',
	},
	{
		name: 'Omega',
		img: '/img/popular-brands/popular-brands-3.jpg',
		href: '/catalog',
	},
	{
		name: 'Audemars Piguet',
		img: '/img/popular-brands/popular-brands-4.jpg',
		href: '/catalog',
	},
	{
		name: 'TAG Heuer',
		img: '/img/popular-brands/popular-brands-5.jpg',
		href: '/catalog',
	},
	{
		name: 'Tudor',
		img: '/img/popular-brands/popular-brands-6.jpg',
		href: '/catalog',
	},
];

const HeroData = [
	{
		img: '/img/hero/mob.jpg',
		imgTablet: '/img/hero/tablet.jpg',
		imgDesktop: '/img/hero/desktop.jpg',
		href: '/catalog',
	},
	{
		img: '/img/hero/mob.jpg',
		imgTablet: '/img/hero/tablet.jpg',
		imgDesktop: '/img/hero/desktop.jpg',
		href: '/catalog',
	},
	{
		img: '/img/hero/mob.jpg',
		imgTablet: '/img/hero/tablet.jpg',
		imgDesktop: '/img/hero/desktop.jpg',
		href: '/catalog',
	},
	{
		img: '/img/hero/mob.jpg',
		imgTablet: '/img/hero/tablet.jpg',
		imgDesktop: '/img/hero/desktop.jpg',
		href: '/catalog',
	},
	{
		img: '/img/hero/mob.jpg',
		imgTablet: '/img/hero/tablet.jpg',
		imgDesktop: '/img/hero/desktop.jpg',
		href: '/catalog',
	},
	{
		img: '/img/hero/mob.jpg',
		imgTablet: '/img/hero/tablet.jpg',
		imgDesktop: '/img/hero/desktop.jpg',
		href: '/catalog',
	},
];

const PopularСategoriesHeroData = [
	{
		img: '/img/popular-categories/popular-categories-hero-1.png',
		bg: '/img/popular-categories/popular-categories-hero-bg-1.png',
		name: `Men's Watches`,
		href: '/catalog',
	},
	{
		img: '/img/popular-categories/popular-categories-hero-2.png',
		bg: '/img/popular-categories/popular-categories-hero-bg-2.png',
		name: 'Ladies Watches',
		href: '/catalog',
	},
];

const PopularСategoriesData = [
	{
		bg: '/img/popular-categories/popular-categories-1.png',
		name: 'New Watches',
		href: '/catalog',
	},
	{
		bg: '/img/popular-categories/popular-categories-2.png',
		name: 'Pre-Owned Watches',
		href: '/catalog',
	},
	{
		bg: '/img/popular-categories/popular-categories-3.png',
		name: 'Mechanical Watches',
		href: '/catalog',
	},
	{
		bg: '/img/popular-categories/popular-categories-4.png',
		name: 'Automatic Watches',
		href: '/catalog',
	},
	{
		bg: '/img/popular-categories/popular-categories-5.png',
		name: 'Vintage Watches',
		href: '/catalog',
	},
	{
		bg: '/img/popular-categories/popular-categories-6.png',
		name: 'Chronographs',
		href: '/catalog',
	},
	{
		bg: '/img/popular-categories/popular-categories-7.png',
		name: 'Diving Watches',
		href: '/catalog',
	},
	{
		bg: '/img/popular-categories/popular-categories-8.png',
		name: `Pilot's Watches`,
		href: '/catalog',
	},
];

const CustomerTestimonialsData = [
	{
		rating: 4,
		date: '11.10.2023',
		description:
			'"Absolutely thrilled with my recent purchase from WristDeco! The Rolex Explorer II I got is a showstopper. The transaction was smooth, and the watch arrived on time. WristDeco is my go-to for luxury timepieces."',
		author: {
			name: 'John',
			avatar: '/img/customer-testimonials/avatar-1.jpg',
			city: 'New York',
		},
	},
	{
		rating: 5,
		date: '11.10.2023',
		description:
			'"Absolutely thrilled with my recent purchase from WristDeco! The Rolex Explorer II I got is a showstopper. The transaction was smooth, and the watch arrived on time. WristDeco is my go-to for luxury timepieces."',
		author: {
			name: 'John',
			avatar: '/img/customer-testimonials/avatar-2.jpg',
			city: 'New York',
		},
	},
	{
		rating: 1,
		date: '11.10.2023',
		description:
			'"Absolutely thrilled with my recent purchase from WristDeco! The Rolex Explorer II I got is a showstopper. The transaction was smooth, and the watch arrived on time. WristDeco is my go-to for luxury timepieces."',
		author: {
			name: 'John',
			avatar: '/img/customer-testimonials/avatar-3.jpg',
			city: 'New York',
		},
	},
];

export const Home = () => {
	return (
		<>
			<Hero list={HeroData} />
			<PopularBrands list={PopularBrandsData} />
			<Certified />
			<PopularСategories listHero={PopularСategoriesHeroData} list={PopularСategoriesData} />
			<BuyerProtection list={BuyerProtectionData} />
			<RecentlyAddedProducts recentlyAddedProducts={recentlyAddedProductsData} />
			<RecommendedProducts list={recentlyAddedProductsData} title="You may be interested in" />
			<CustomerTestimonials list={CustomerTestimonialsData} />
			<Benefits />
			<FeedBack />
		</>
	);
};
