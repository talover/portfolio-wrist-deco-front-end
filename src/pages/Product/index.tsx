import { Welcome } from '@/modules/Welcome';
import { Comments } from '@/modules/Comments';
import { Section } from '@/components/Section';
import { RecommendedProducts } from '@/modules/RecommendedProducts';
import { CustomerTestimonials } from '@/modules/CustomerTestimonials';
import { Benefits } from '@/modules/Benefits';
import { ProductSection } from '@/modules/Product';

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

const CommentsData = [
	{
		rating: 5,
		avatar: '/img/comments/avatar-1.jpg',
		name: 'Alexandra Turner',
		date: 'March 15, 2023',
		verified: true,
		like: 145,
		dislike: 0,
		description:
			"I recently bought a Rolex Submariner from WriseDeco, and I couldn't be happier. The watch is in impeccable condition, just as described. The whole transaction was smooth, and the customer service was excellent. I highly recommend WriseDeco for their top-notch selection and service.",
	},
	{
		rating: 4,
		avatar: '/img/comments/avatar-2.jpg',
		name: 'Christopher Mitchel ',
		date: 'February 28, 2023',
		verified: true,
		like: 140,
		dislike: 10,
		description:
			"My experience with WriseDeco was fantastic! I purchased a Tag Heuer Carrera, and it exceeded my expectations. The shipping was fast, and the watch arrived in pristine condition. I'll definitely be a repeat customer. Kudos to WriseDeco!",
	},
	{
		rating: 1,
		avatar: '/img/comments/avatar-3.jpg',
		name: 'Sophia Bennett',
		date: 'April 5, 2023',
		verified: false,
		like: 0,
		dislike: 150,
		description:
			"WriseDeco is my go-to for luxury watches. I recently acquired a beautiful Audemars Piguet Royal Oak, and it's a masterpiece. The attention to detail and authenticity guarantee are impressive. A wonderful buying experience!",
	},
	{
		rating: 5,
		avatar: '/img/comments/avatar-4.jpg',
		name: 'Daniel Cooper',
		date: 'January 20, 2023',
		verified: true,
		like: 145,
		dislike: 0,
		description:
			"I purchased a Patek Philippe Nautilus from WriseDeco, and it was worth every penny. The watch arrived securely packaged and in pristine condition. WriseDeco's collection and service are unparalleled in the luxury watch market.",
	},
	{
		rating: 5,
		avatar: '/img/comments/avatar-1.jpg',
		name: 'Alexandra Turner',
		date: 'March 15, 2023',
		verified: true,
		like: 145,
		dislike: 0,
		description:
			"I recently bought a Rolex Submariner from WriseDeco, and I couldn't be happier. The watch is in impeccable condition, just as described. The whole transaction was smooth, and the customer service was excellent. I highly recommend WriseDeco for their top-notch selection and service.",
	},
	{
		rating: 4,
		avatar: '/img/comments/avatar-2.jpg',
		name: 'Christopher Mitchel ',
		date: 'February 28, 2023',
		verified: true,
		like: 140,
		dislike: 10,
		description:
			"My experience with WriseDeco was fantastic! I purchased a Tag Heuer Carrera, and it exceeded my expectations. The shipping was fast, and the watch arrived in pristine condition. I'll definitely be a repeat customer. Kudos to WriseDeco!",
	},
	{
		rating: 1,
		avatar: '/img/comments/avatar-3.jpg',
		name: 'Sophia Bennett',
		date: 'April 5, 2023',
		verified: false,
		like: 0,
		dislike: 150,
		description:
			"WriseDeco is my go-to for luxury watches. I recently acquired a beautiful Audemars Piguet Royal Oak, and it's a masterpiece. The attention to detail and authenticity guarantee are impressive. A wonderful buying experience!",
	},
	{
		rating: 5,
		avatar: '/img/comments/avatar-4.jpg',
		name: 'Daniel Cooper',
		date: 'January 20, 2023',
		verified: true,
		like: 145,
		dislike: 0,
		description:
			"I purchased a Patek Philippe Nautilus from WriseDeco, and it was worth every penny. The watch arrived securely packaged and in pristine condition. WriseDeco's collection and service are unparalleled in the luxury watch market.",
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

const ProductGallery = [
	{
		img: '/img/product-gallery/pic-1.jpg',
		thumbs: '/img/product-gallery/thumb-1.jpg',
	},
	{
		img: '/img/product-gallery/pic-2.jpg',
		thumbs: '/img/product-gallery/thumb-2.jpg',
	},
	{
		img: '/img/product-gallery/pic-3.jpg',
		thumbs: '/img/product-gallery/thumb-3.jpg',
	},
	{
		img: '/img/product-gallery/pic-4.jpg',
		thumbs: '/img/product-gallery/thumb-4.jpg',
	},
	{
		img: '/img/product-gallery/pic-5.jpg',
		thumbs: '/img/product-gallery/thumb-5.jpg',
	},
];
export const Product = () => {
	return (
		<>
			<ProductSection title="Richard Mille RM 07" gallery={ProductGallery} />
			<RecommendedProducts list={recentlyAddedProductsData} title="You may be interested in" />
			<RecommendedProducts list={recentlyAddedProductsData} title="Recommendations for you" />
			<CustomerTestimonials list={CustomerTestimonialsData} />
			<Benefits />
			<Section title="Seller" container={false}>
				<Welcome logo={'/img/welcome-logo.png'} title={{ name: 'East Coast Jewelry' }} since="Since 1986" />
				<Comments list={CommentsData} />
			</Section>
		</>
	);
};
