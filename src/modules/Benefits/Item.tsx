import { useStyles } from './Styles';
import { Box } from '@mui/material';

type ItemProps = {
	name: string;
	icon?: React.ReactNode;
};
export const Item = ({ name, icon }: ItemProps) => {
	const classes = useStyles();
	return (
		<Box component={'li'} className={classes.item}>
			<Box className={classes.icon}>{icon}</Box>
			<Box className={classes.name} dangerouslySetInnerHTML={{ __html: name }} />
		</Box>
	);
};
