import clsx from 'clsx';
import { Box, useMediaQuery, Breadcrumbs } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import IconHome from '@/assets/icons/home.svg';
import IconAngleRight from '@/assets/icons/angle-right.svg';

import { useStyles } from './Styles';

type CustomBreadcrumbsProps = {
	className?: string;
	current: string;
	maxItems?: number;
	list?: {
		name: string;
		href: string;
	}[];
	sx?: object;
};
export const CustomBreadcrumbs = ({ className, current, maxItems, list, ...restProps }: CustomBreadcrumbsProps) => {
	const classes = useStyles();
	const md = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
	return (
		<Breadcrumbs
			maxItems={!md ? maxItems : undefined}
			separator={<IconAngleRight className={classes.icon} />}
			className={clsx(classes.breadcrumbs, className)}
			{...restProps}
		>
			<Link to={'/'}>
				<IconHome className={classes.icon} />
			</Link>

			{list &&
				list.map((item, index) => (
					<Link key={index} to={item.href}>
						{item.name}
					</Link>
				))}
			<Box>{current}</Box>
		</Breadcrumbs>
	);
};
