import clsx from 'clsx';
import { Box } from '@mui/material';

import { Button } from '@/components/Button';

import { useStyles } from './Styles';

type TagsListData = {
	name: string;
	href: string;
};

type TagsListProps = {
	list: TagsListData[];
	className?: string;
};

export const TagsList = ({ list, className }: TagsListProps) => {
	const classes = useStyles();
	return (
		<Box component={'ul'} className={clsx(classes.searchTagsList, className)}>
			{list.map((item, index) => (
				<TagsListItem key={index} name={item.name} href={item.href} />
			))}
		</Box>
	);
};

const TagsListItem = ({ name, href }: TagsListData) => {
	const classes = useStyles();
	return (
		<Box component={'li'} className={classes.searchTagsListItem}>
			<Button href={href} type="outline" size="small" className={classes.searchTagsListBtn}>
				{name}
			</Button>
		</Box>
	);
};
