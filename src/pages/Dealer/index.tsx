import { Welcome } from '@/modules/Welcome';
import { Comments } from '@/modules/Comments';
import { RecommendedProducts } from '@/modules/RecommendedProducts';

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
export const Dealer = () => {
	return (
		<>
			<Welcome
				bg={'/img/welcome-bg.jpg'}
				logo={'/img/welcome-logo.png'}
				title={{ name: 'East Coast Jewelry' }}
				since="Since 1986"
			/>
			<Comments
				description={{
					title: 'Description',
					content:
						'<p>East Coast Jewelry is located in Sunny Isles Beach, a beautiful suburb of Miami, Florida (USA). We have been in business since 1986 with 3 locations in southern Florida, selling high end watches and jewelry. We were an authorized agent for luxury watch brands like Audemars Piguet, Hublot, Ulysse-Nardin, Bovet, Glashutte Original, Blancpain, MCT, HYT, Cabestan, Bell & Ross, and many more. We carry a large selection of limited edition and collectible time pieces. We have a professional watch maker with 40+ years experience on premises, so you can be assured your time piece will be as it was when it came from the factory. If you have any questions about a certain piece, you can give us a call at 305-947-8883 and ask for Michael.</p>',
				}}
				contacts={{
					phone: { name: '+1 (305) 947-8883', href: 'tel:+1 (305) 947-8883' },
					fax: { name: '+1 (305) 947-9419', href: 'tel:+1 (305) 947-9419' },
					email: { name: 'mike@ecjusa.com', href: 'mailto:mike@ecjusa.com' },
					site: { name: 'ecjusa.com', href: '//ecjusa.com' },
					address: { name: `16810 Collins <br/>AvenueMiami, FL 33160 United States of America`, href: '/' },
					language: { languages: ['EN', 'ES', 'RU'] },
					vat: { name: `VAT number: <br/>US592684097` },
				}}
				list={CommentsData}
			/>
			<RecommendedProducts list={recentlyAddedProductsData} title="Top offers for you" />
		</>
	);
};
