import clsx from 'clsx';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import IconCloseCircle from '@/assets/icons/close-circle.svg';

import { useStyles } from './Styles';

type ListData = {
	name: string;
	href: string;
	remove: () => void;
};

type ListProps = {
	list: ListData[];
	className?: string;
};

export const List = ({ list, className }: ListProps) => {
	const classes = useStyles();
	return (
		<Box component={'ul'} className={clsx(classes.searchList, className)}>
			{list.map((item, index) => (
				<ListItem key={index} name={item.name} href={item.href} remove={item.remove} />
			))}
		</Box>
	);
};

const ListItem = ({ name, href, remove }: ListData) => {
	const classes = useStyles();
	return (
		<Box component={'li'} className={classes.searchListItem}>
			<Link to={href} className={classes.searchListLink}>
				{name}
			</Link>
			<Box component={'button'} onClick={remove} className={classes.searchListRemove}>
				<IconCloseCircle />
			</Box>
		</Box>
	);
};
