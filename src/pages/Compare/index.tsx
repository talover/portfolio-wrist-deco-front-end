import { Typography } from '@mui/material';
import theme from '@/config/theme.ts';
import { MainContainer } from '@/components/MainContainer';
import { CustomBreadcrumbs } from '@/components/CustomBreadcrumbs';

import { FeedBack } from '@/modules/FeedBack';
import { Benefits } from '@/modules/Benefits';
import { RecommendedProducts } from '@/modules/RecommendedProducts';
import { CompareSection } from '@/modules/Compare';

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
 
const CompareData = [
	{
		product: {
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
			wishlist: true,
		},
		attributes: [
			{
				title: 'General Info',
				list: [
					{
						name: 'Condition',
						value: 'Very good',
					},
					{
						name: 'Year',
						value: '2008',
					},
					{
						name: 'Papers',
						value: 'Original papers',
					},
					{
						name: 'Certificate',
						value: 'WriceDeco Certificate',
					},
					{
						name: 'Box',
						value: 'Original box',
					},
					{
						name: 'Movement',
						value: 'Automatic',
					},
					{
						name: 'Gender',
						value: 'Male',
					},
				],
			},
			{
				title: 'Case',
				list: [
					{
						name: 'Material',
						value: 'Stainless Steel',
					},
					{
						name: 'Dimensions',
						value: '41mm',
					},
				],
			},
			{
				title: 'Crystal',
				list: [
					{
						name: 'Material',
						value: 'Sapphire',
					},
				],
			},
			{
				title: 'Bracelet',
				list: [
					{
						name: 'Material',
						value: 'Gold',
					},
				],
			},
			{
				title: 'Dial Color',
				list: [
					{
						name: 'Colour',
						value: 'Blue',
					},
				],
			},
			{
				title: 'Features',
				list: [
					{
						name: '',
						value: 'Date',
					},
					{
						name: '',
						value: 'Minute',
					},
					{
						name: '',
						value: 'Hour',
					},
				],
			},
		],
	},
	{
		product: {
			name: 'Cartier Calibre de Cartier Diver Cartier Calibre de Cartier Diver',
			url: '/product',
			images: [
				{
					url: '/img/product/product-2.jpg',
				},
			],
			description: 'TOURBILLON 24 DEGREES INCLINE ROSROSROSROSROS',
			price: '$199,000',
			country: 'US',
			condition: 'Very good',
			shipping: 'Free shipping',
			wishlist: true,
		},
		attributes: [
			{
				title: 'General Info',
				list: [
					{
						name: 'Condition',
						value: 'Very good',
					},
					{
						name: 'Year',
						value: '2008',
					},
					{
						name: 'Papers',
						value: 'Original papers',
					},
					{
						name: 'Certificate',
						value: 'WriceDeco Certificate',
					},
					{
						name: 'Box',
						value: 'Original box',
					},
					{
						name: 'Movement',
						value: 'Automatic',
					},
					{
						name: 'Gender',
						value: 'Male',
					},
				],
			},
			{
				title: 'Case',
				list: [
					{
						name: 'Material',
						value: 'Stainless Steel',
					},
					{
						name: 'Dimensions',
						value: '41mm',
					},
				],
			},
			{
				title: 'Crystal',
				list: [
					{
						name: 'Material',
						value: 'Sapphire',
					},
				],
			},
			{
				title: 'Bracelet',
				list: [
					{
						name: 'Material',
						value: 'Gold',
					},
				],
			},
			{
				title: 'Dial Color',
				list: [
					{
						name: 'Colour',
						value: 'Blue',
					},
				],
			},
			{
				title: 'Features',
				list: [
					{
						name: '',
						value: 'Date',
					},
					{
						name: '',
						value: 'Minute',
					},
					{
						name: '',
						value: 'Hour',
					},
				],
			},
		],
	},
	{
		product: {
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
			wishlist: true,
		},
		attributes: [
			{
				title: 'General Info',
				list: [
					{
						name: 'Condition',
						value: 'Very good',
					},
					{
						name: 'Year',
						value: '2008',
					},
					{
						name: 'Papers',
						value: 'Original papers',
					},
					{
						name: 'Certificate',
						value: 'WriceDeco Certificate',
					},
					{
						name: 'Box',
						value: 'Original box',
					},
					{
						name: 'Movement',
						value: 'Automatic',
					},
					{
						name: 'Gender',
						value: 'Male',
					},
				],
			},
			{
				title: 'Case',
				list: [
					{
						name: 'Material',
						value: 'Stainless Steel',
					},
					{
						name: 'Dimensions',
						value: '41mm',
					},
				],
			},
			{
				title: 'Crystal',
				list: [
					{
						name: 'Material',
						value: 'Sapphire',
					},
				],
			},
			{
				title: 'Bracelet',
				list: [
					{
						name: 'Material',
						value: 'Gold',
					},
				],
			},
			{
				title: 'Dial Color',
				list: [
					{
						name: 'Colour',
						value: 'Blue',
					},
				],
			},
			{
				title: 'Features',
				list: [
					{
						name: '',
						value: 'Date',
					},
					{
						name: '',
						value: 'Minute',
					},
					{
						name: '',
						value: 'Hour',
					},
				],
			},
		],
	},
	{
		product: {
			name: 'Cartier Calibre de Cartier Diver Cartier Calibre de Cartier Diver',
			url: '/product',
			images: [
				{
					url: '/img/product/product-2.jpg',
				},
			],
			description: 'TOURBILLON 24 DEGREES INCLINE ROSROSROSROSROS',
			price: '$199,000',
			country: 'US',
			condition: 'Very good',
			shipping: 'Free shipping',
			wishlist: true,
		},
		attributes: [
			{
				title: 'General Info',
				list: [
					{
						name: 'Condition',
						value: 'Very good',
					},
					{
						name: 'Year',
						value: '2008',
					},
					{
						name: 'Papers',
						value: 'Original papers',
					},
					{
						name: 'Certificate',
						value: 'WriceDeco Certificate',
					},
					{
						name: 'Box',
						value: 'Original box',
					},
					{
						name: 'Movement',
						value: 'Automatic',
					},
					{
						name: 'Gender',
						value: 'Male',
					},
				],
			},
			{
				title: 'Case',
				list: [
					{
						name: 'Material',
						value: 'Stainless Steel',
					},
					{
						name: 'Dimensions',
						value: '41mm',
					},
				],
			},
			{
				title: 'Crystal',
				list: [
					{
						name: 'Material',
						value: 'Sapphire',
					},
				],
			},
			{
				title: 'Bracelet',
				list: [
					{
						name: 'Material',
						value: 'Gold',
					},
				],
			},
			{
				title: 'Dial Color',
				list: [
					{
						name: 'Colour',
						value: 'Blue',
					},
				],
			},
			{
				title: 'Features',
				list: [
					{
						name: '',
						value: 'Date',
					},
					{
						name: '',
						value: 'Minute',
					},
					{
						name: '',
						value: 'Hour',
					},
				],
			},
		],
	},
	{
		product: {
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
			wishlist: true,
		},
		attributes: [
			{
				title: 'General Info',
				list: [
					{
						name: 'Condition',
						value: 'Very good',
					},
					{
						name: 'Year',
						value: '2008',
					},
					{
						name: 'Papers',
						value: 'Original papers',
					},
					{
						name: 'Certificate',
						value: 'WriceDeco Certificate',
					},
					{
						name: 'Box',
						value: 'Original box',
					},
					{
						name: 'Movement',
						value: 'Automatic',
					},
					{
						name: 'Gender',
						value: 'Male',
					},
				],
			},
			{
				title: 'Case',
				list: [
					{
						name: 'Material',
						value: 'Stainless Steel',
					},
					{
						name: 'Dimensions',
						value: '41mm',
					},
				],
			},
			{
				title: 'Crystal',
				list: [
					{
						name: 'Material',
						value: 'Sapphire',
					},
				],
			},
			{
				title: 'Bracelet',
				list: [
					{
						name: 'Material',
						value: 'Gold',
					},
				],
			},
			{
				title: 'Dial Color',
				list: [
					{
						name: 'Colour',
						value: 'Blue',
					},
				],
			},
			{
				title: 'Features',
				list: [
					{
						name: '',
						value: 'Date',
					},
					{
						name: '',
						value: 'Minute',
					},
					{
						name: '',
						value: 'Hour',
					},
				],
			},
		],
	},
	{
		product: {
			name: 'Cartier Calibre de Cartier Diver Cartier Calibre de Cartier Diver',
			url: '/product',
			images: [
				{
					url: '/img/product/product-2.jpg',
				},
			],
			description: 'TOURBILLON 24 DEGREES INCLINE ROSROSROSROSROS',
			price: '$199,000',
			country: 'US',
			condition: 'Very good',
			shipping: 'Free shipping',
			wishlist: true,
		},
		attributes: [
			{
				title: 'General Info',
				list: [
					{
						name: 'Condition',
						value: 'Very good',
					},
					{
						name: 'Year',
						value: '2008',
					},
					{
						name: 'Papers',
						value: 'Original papers',
					},
					{
						name: 'Certificate',
						value: 'WriceDeco Certificate',
					},
					{
						name: 'Box',
						value: 'Original box',
					},
					{
						name: 'Movement',
						value: 'Automatic',
					},
					{
						name: 'Gender',
						value: 'Male',
					},
				],
			},
			{
				title: 'Case',
				list: [
					{
						name: 'Material',
						value: 'Stainless Steel',
					},
					{
						name: 'Dimensions',
						value: '41mm',
					},
				],
			},
			{
				title: 'Crystal',
				list: [
					{
						name: 'Material',
						value: 'Sapphire',
					},
				],
			},
			{
				title: 'Bracelet',
				list: [
					{
						name: 'Material',
						value: 'Gold',
					},
				],
			},
			{
				title: 'Dial Color',
				list: [
					{
						name: 'Colour',
						value: 'Blue',
					},
				],
			},
			{
				title: 'Features',
				list: [
					{
						name: '',
						value: 'Date',
					},
					{
						name: '',
						value: 'Minute',
					},
					{
						name: '',
						value: 'Hour',
					},
				],
			},
		],
	},
];
export const Compare = () => {
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
					Easy to compare. Which timepiece suits you best?
				</Typography>
			</MainContainer>
			<CompareSection list={CompareData} />
			<Benefits />
			<RecommendedProducts list={recentlyAddedProductsData} title="Recommendations for you" />
			<FeedBack />
		</>
	);
};
