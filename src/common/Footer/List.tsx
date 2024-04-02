import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from './Styles';

type ListData = {
	name: string;
	href: string;
};

type ListProps = {
	list: ListData[];
};

export const List = ({ list }: ListProps) => {
	const classes = useStyles();
	return (
		<Box component={'ul'} className={classes.list}>
			{list.map((item, index) => (
				<ListItem key={index} name={item.name} href={item.href} />
			))}
		</Box>
	);
};

const ListItem = ({ name, href }: ListData) => {
	const classes = useStyles();
	return (
		<Box component={'li'}>
			<Link to={href} className={classes.listBtn}>
				{name}
			</Link>
		</Box>
	);
};
