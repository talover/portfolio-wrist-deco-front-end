import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { type Theme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { SubMenu } from './SubMenu';
import IconMedal from '@/assets/icons/medal.svg';
import IconAngleRight from '@/assets/icons/angle-right.svg';
import IconClock from '@/assets/icons/clock.svg';
import IconRowVertical from '@/assets/icons/row-vertical.svg';
import IconShield from '@/assets/icons/shield.svg';
import IconDoubleCheck from '@/assets/icons/double-check.svg';
import { useStyles } from './Styles';

type IconProps = {
	icon?: string;
	className?: string;
};

const iconComponents: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
	brands: IconMedal,
	categories: IconClock,
	services: IconRowVertical,
	buyerProtection: IconShield,
	sellAWatch: IconDoubleCheck,
};

const Icon = ({ icon, className }: IconProps) => {
	const classes = useStyles();
	const IconComponent = icon ? iconComponents[icon] : undefined;

	if (!IconComponent) {
		return null;
	}

	return <IconComponent className={clsx(classes.itemBtnIcon, className)} fill="currentColor" />;
};

type MenuButtonProps = {
	href?: string;
	icon?: string;
	name: string;
	onClick: () => void | undefined;
	close: () => void;
	setIsHovered: (value: boolean) => void;
};

const MenuButton = ({ href, icon, name, onClick, close, setIsHovered }: MenuButtonProps) => {
	const classes = useStyles();
	const handleClick = () => {
		setIsHovered(false);
		onClick();
	};

	if (href) {
		return (
			<Link to={href} className={classes.itemBtn} onClick={close}>
				{icon && <Icon icon={icon} />}
				<Box component={'span'}>{name}</Box>
			</Link>
		);
	}

	return (
		<Box component={'button'} onClick={handleClick} className={classes.itemBtn}>
			{icon && <Icon icon={icon} />}
			<Box component={'span'}>{name}</Box>
			<IconAngleRight className={clsx(classes.itemBtnIcon, classes.itemBtnIconAngle)} />
		</Box>
	);
};

type ItemProps = {
	name: string;
	href?: string;
	icon?: string;
	subMenu?: {
		name: string;
		href: string;
	}[];
	more?: string;
	close: () => void;
};

export const Item = ({ name, href, icon, subMenu, more, close }: ItemProps) => {
	const classes = useStyles();
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
	const lg = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
	const [isHovered, setIsHovered] = useState(false);
	const [prevHref, setPrevHref] = useState<string | undefined>(undefined);

	useEffect(() => {
		setPrevHref(href);
	}, [href]);

	useEffect(() => {
		if (prevHref !== href && !isHovered) {
			setIsHovered(false);
		}
	}, [href, prevHref, isHovered]);

	const handleMouseEnter = () => {
		if (lg) {
			setIsHovered(true);
		}
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const openItem = () => {
		if (!lg) {
			setIsSubMenuOpen(true);
		}
	};

	return (
		<Box
			component={'li'}
			className={clsx(classes.item, { [classes.itemActive]: isHovered })}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<MenuButton name={name} href={href} icon={icon} onClick={openItem} close={close} setIsHovered={setIsHovered} />
			{subMenu && (
				<SubMenu
					more={more}
					list={subMenu}
					isActive={isSubMenuOpen}
					back={() => setIsSubMenuOpen(false)}
					close={close}
				/>
			)}
		</Box>
	);
};
