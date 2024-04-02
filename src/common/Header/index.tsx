import clsx from 'clsx';
import { useState } from 'react';
import { type Theme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { MainContainer } from '@/components/MainContainer';
import { Menu } from './Menu';
import { ActionBtn } from './ActionBtn';
import { Search } from './Search';
import { Wishlist } from './Wishlist';

import IconLogo from '@/assets/icons/logo.svg';
import IconMenu from '@/assets/icons/menu.svg';
import IconSearch from '@/assets/icons/search.svg';
import IconProfile from '@/assets/icons/profile.svg';
import IconArrowRightArrowLeft from '@/assets/icons/arrow-right-arrow-left.svg';
import IconHeartOutline from '@/assets/icons/heart-outline.svg';
import { useStyles } from './Styles';

const WishlistData = [
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
];

type HeaderProps = {
	menu: {
		name: string;
		href?: string;
		icon?: string;
		subMenu?: {
			name: string;
			href: string;
		}[];
		more?: string;
	}[];
};

export const Header = ({ menu }: HeaderProps) => {
	const classes = useStyles();
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [isOpenSearch, setIsOpenSearch] = useState(false);
	const [isOpenOverlay, setIsOpenOverlay] = useState(false);
	const [isSearchDropOpen, setIsSearchDropOpen] = useState(false);
	const [isWishlistOpen, setWishlistOpen] = useState(false);

	const handleWishlistToggle = () => {
		setWishlistOpen(!isWishlistOpen);
	};

	const lg = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
	const navigation = useNavigate();
	const body = document.body;
	const toggleMenu = () => {
		setIsOpenMenu(!isOpenMenu);
		setIsOpenOverlay(!isOpenOverlay);
		body.style.overflow = body.style.overflow === 'hidden' ? 'visible' : 'hidden';
	};
	const overlayToggle = () => {
		setIsOpenMenu(false);
		setIsOpenOverlay(false);
		body.style.overflow = 'visible';
	};

	const toggleDropSearch = () => {
		setIsSearchDropOpen(!isSearchDropOpen);
		if (lg) {
			body.style.overflow = 'visible';
			return;
		}
		body.style.overflow = body.style.overflow === 'hidden' ? 'visible' : 'hidden';
	};

	const closeDropSearch = () => {
		setIsOpenSearch(false);
		setIsSearchDropOpen(false);
		body.style.overflow = 'visible';
	};
	return (
		<>
			<Box className={classes.section}>
				<MainContainer className={classes.container}>
					<Box className={classes.cont}>
						<Box component={'button'} onClick={toggleMenu} className={classes.menuBtn}>
							<IconMenu />
						</Box>
						<Link to={'/'}>
							<IconLogo className={classes.logo} />
						</Link>
						<Search
							isActive={isOpenSearch}
							close={closeDropSearch}
							isDropActive={isSearchDropOpen}
							closeDrop={toggleDropSearch}
						/>
						<Box className={classes.actions}>
							<ActionBtn
								onClick={() => setIsOpenSearch(true)}
								icon={<IconSearch />}
								className={classes.actionBtnSearch}
							/>
							<ActionBtn
								onClick={() => navigation('/')}
								icon={<IconProfile />}
								name="Log/Register"
								className={classes.actionBtnRegistration}
							/>
							<ActionBtn
								onClick={() => navigation('/compare')}
								icon={<IconArrowRightArrowLeft />}
								name="Compare"
								badge="6"
							/>
							<ActionBtn onClick={handleWishlistToggle} icon={<IconHeartOutline />} name="Wishlist" badge="86" />
						</Box>
					</Box>
					<Menu isActive={isOpenMenu} close={toggleMenu} list={menu} />
					<Box className={clsx(classes.overlay, isOpenOverlay && classes.overlayActive)} onClick={overlayToggle} />
				</MainContainer>
			</Box>
			{isSearchDropOpen && <Box className={classes.searchOverlay} onClick={toggleDropSearch} />}
			<Wishlist open={isWishlistOpen} onClose={handleWishlistToggle} list={WishlistData} />
		</>
	);
};
