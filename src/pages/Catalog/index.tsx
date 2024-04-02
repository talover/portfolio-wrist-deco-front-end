import React, { useState } from 'react';
import { type Theme } from '@mui/material/styles';
import {
	Box,
	Typography,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
	SelectChangeEvent,
	Chip,
	useMediaQuery,
	Pagination,
	FormGroup,
	FormControlLabel,
} from '@mui/material';
import theme from '@/config/theme.ts';
import { MainContainer } from '@/components/MainContainer';
import { CustomBreadcrumbs } from '@/components/CustomBreadcrumbs';
import { CustomChip } from './CustomChip';
import { AsideDrawer } from './AsideDrawer';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { CustomCheckbox } from '@/components/CustomCheckbox';
import { FiltersListItem } from './FiltersListItem';

import IconAngleDown from '@/assets/icons/angle-down.svg';
import IconFilter from '@/assets/icons/filter.svg';

import { useStyles } from './Styles';

const handleDelete = () => {
	console.info('Delete the Chip.');
};

const catalogData = [
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

const chipData = [
	{
		label: 'Rolex',
		onDelete: handleDelete,
	},
	{
		label: 'Air-King',
		onDelete: handleDelete,
	},
	{
		label: 'Cellini',
		onDelete: handleDelete,
	},
	{
		label: 'New',
		onDelete: handleDelete,
	},
	{
		label: 'Unworn',
		onDelete: handleDelete,
	},
	{
		label: '$10,000 to 100,000',
		onDelete: handleDelete,
	},
	{
		label: 'White',
		onDelete: handleDelete,
	},
];

const FiltersList = () => {
	const lg = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
	return (
		<Box>
			<FiltersListItem defaultExpanded={lg && true} title="Brands">
				<FormGroup>
					<FormControlLabel control={<CustomCheckbox defaultChecked />} label="Label" />
					<FormControlLabel required control={<CustomCheckbox />} label="Required" />
					<FormControlLabel disabled control={<CustomCheckbox />} label="Disabled" />
					<FormControlLabel control={<CustomCheckbox />} label="Rolex" />
					<FormControlLabel control={<CustomCheckbox />} label="Rolex" />
					<FormControlLabel control={<CustomCheckbox />} label="Rolex" />
					<FormControlLabel control={<CustomCheckbox />} label="Rolex" />
					<FormControlLabel control={<CustomCheckbox />} label="Rolex" />
					<FormControlLabel control={<CustomCheckbox />} label="Rolex" />
					<FormControlLabel control={<CustomCheckbox />} label="Rolex" />
					<FormControlLabel control={<CustomCheckbox />} label="Rolex" />
					<FormControlLabel control={<CustomCheckbox />} label="Rolex" />
					<FormControlLabel control={<CustomCheckbox />} label="Rolex" />
				</FormGroup>
			</FiltersListItem>
			<FiltersListItem defaultExpanded={lg && true} title="Model">
				<FormGroup>
					<FormControlLabel control={<CustomCheckbox defaultChecked />} label="Air-King" />
					<FormControlLabel control={<CustomCheckbox />} label="Cellini" />
					<FormControlLabel control={<CustomCheckbox />} label="Cosmograph Daytona" />
					<FormControlLabel control={<CustomCheckbox />} label="Date" />
					<FormControlLabel control={<CustomCheckbox />} label="Datejust" />
					<FormControlLabel control={<CustomCheckbox />} label="Datejust II" />
					<FormControlLabel control={<CustomCheckbox />} label="Day-Date" />
					<FormControlLabel control={<CustomCheckbox />} label="Rolex" />
					<FormControlLabel control={<CustomCheckbox />} label="Rolex" />
					<FormControlLabel control={<CustomCheckbox />} label="Rolex" />
				</FormGroup>
			</FiltersListItem>
			<FiltersListItem title="Condition">test</FiltersListItem>
			<FiltersListItem title="Price">test</FiltersListItem>
			<FiltersListItem title="Year">test</FiltersListItem>
			<FiltersListItem title="Case Size">test</FiltersListItem>
			<FiltersListItem title="Movement">test</FiltersListItem>
			<FiltersListItem title="Dial Color">test</FiltersListItem>
			<FiltersListItem title="Original Papers">test</FiltersListItem>
			<FiltersListItem title="Original Box">test</FiltersListItem>
			<FiltersListItem title="Gender">test</FiltersListItem>
		</Box>
	);
};

export const Catalog = () => {
	const classes = useStyles();
	const lg = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
	const [age, setAge] = React.useState('');
	const [isAsideDrawerOpen, setAsideDrawerOpen] = useState(false);

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string);
	};
	const handleClick = () => {
		console.info('You clicked the Chip.');
	};

	return (
		<MainContainer>
			<Box className={classes.section}>
				<CustomBreadcrumbs
					maxItems={2}
					list={[{ name: 'Brands', href: '/' }]}
					current={'Rolex'}
					sx={{ marginTop: { xs: 10 / 4, lg: 3 / 4 }, marginBottom: { xs: 15 / 4, lg: 33 / 4 } }}
				/>
				<Typography color={theme.palette.secondary.dark} marginBottom={{ xs: 20 / 4, lg: 26 / 4 }} variant="h1">
					Rolex
				</Typography>
				<Box className={classes.filter}>
					<Box className={classes.filterCont}>
						<Box className={classes.filterFound}>
							Found: 275,922 <span>listings</span>
						</Box>
						{lg && (
							<Box className={classes.filterTags}>
								<Chip label="Clear all" variant="outlined" color="error" onClick={handleClick} />
								{chipData.map((item, index) => (
									<CustomChip key={index} label={item.label} onDelete={item.onDelete} />
								))}
							</Box>
						)}
					</Box>
					{!lg && (
						<Button onClick={() => setAsideDrawerOpen(true)} className={classes.btnFilter}>
							<IconFilter />
						</Button>
					)}
					<Box className={classes.filterSelectBox}>
						<FormControl fullWidth>
							<InputLabel sx={{ marginTop: theme.spacing(-4 / 4) }} id="select-label">
								Sort by
							</InputLabel>
							<Select
								labelId="select-label"
								id="select"
								value={age}
								label="Sort by"
								onChange={handleChange}
								IconComponent={IconAngleDown}
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</Box>
				</Box>
				<Box className={classes.catalog}>
					{lg ? (
						<Box className={classes.aside}>
							<FiltersList />
						</Box>
					) : (
						<AsideDrawer open={isAsideDrawerOpen} onClose={() => setAsideDrawerOpen(false)} clearAll={handleClick}>
							<FiltersList />
						</AsideDrawer>
					)}

					<Box className={classes.content}>
						<Box className={classes.catalogList}>
							{catalogData.map((item, index) => (
								<Box key={index}>
									<Card
										name={item.name}
										url={item.url}
										images={item.images}
										description={item.description}
										price={item.price}
										country={item.country}
										condition={item.condition}
										shipping={item.shipping}
										compare={item.compare}
										wishlist={item.wishlist}
									/>
								</Box>
							))}
						</Box>
						<Box className={classes.more}>
							<Button size={lg ? 'medium' : undefined} type="outline" color="secondaryLight">
								Show more
							</Button>
						</Box>
						<Box className={classes.pagination}>
							<Pagination count={lg ? 10 : 4} className={classes.paginationList} />
						</Box>
					</Box>
				</Box>
			</Box>
		</MainContainer>
	);
};
