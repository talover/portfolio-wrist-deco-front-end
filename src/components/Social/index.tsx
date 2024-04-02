import clsx from 'clsx';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import IconFacebookCircle from '@/assets/icons/facebook-circle.svg';
import IconInstagramCircle from '@/assets/icons/instagram-circle.svg';

import { useStyles } from './Styles';

type SocialProps = {
	list: {
		name: 'facebook' | 'instagram';
		href: string;
	}[];
	className?: string;
};

export const Social = ({ list, className }: SocialProps) => {
	const classes = useStyles();
	return (
		<Box component={'ul'} className={clsx(classes.list, className)}>
			{list.map((item, index) => (
				<SocialItem key={index} name={item.name} href={item.href} />
			))}
		</Box>
	);
};

type SocialItemProps = {
	name: 'facebook' | 'instagram';
	href: string;
};

const SocialItem = ({ name, href }: SocialItemProps) => {
	const classes = useStyles();
	return (
		<Box component={'li'}>
			<Link to={href} target="_blank" className={classes.item}>
				<SocialIcon name={name} />
			</Link>
		</Box>
	);
};

type SocialIconProps = {
	name: 'facebook' | 'instagram';
	className?: string;
};

const iconComponents = {
	facebook: IconFacebookCircle,
	instagram: IconInstagramCircle,
};

const SocialIcon = ({ name, className }: SocialIconProps) => {
	const classes = useStyles();
	const IconComponent = iconComponents[name];

	if (!IconComponent) {
		return null;
	}

	return <IconComponent className={clsx(classes.icon, className)} fill="currentColor" />;
};
