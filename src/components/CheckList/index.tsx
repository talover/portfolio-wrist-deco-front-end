import { useStyles } from './Styles';
import { Box } from '@mui/material';
import IconTickCircle from '@/assets/icons/tick-circle.svg';

type CheckListItemProps = {
	name: string;
};

type CheckListProps = {
	className?: string;
	list: string[];
};

const CheckListItem = ({ name }: CheckListItemProps) => {
	const classes = useStyles();
	return (
		<Box component={'li'} className={classes.item}>
			<IconTickCircle className={classes.icon} />
			<span className={classes.text}>{name}</span>
		</Box>
	);
};

export const CheckList = ({ className, list }: CheckListProps) => {
	const classes = useStyles();
	return (
		<Box className={`${classes.list} ${className || ''}`} component={'ul'}>
			{list.map((item, index) => (
				<CheckListItem key={index} name={item} />
			))}
		</Box>
	);
};
