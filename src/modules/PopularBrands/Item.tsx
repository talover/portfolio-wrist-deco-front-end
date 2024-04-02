import { Box } from '@mui/material';
import { useStyles } from './Styles';
import { Img } from 'react-image';
import { Link } from 'react-router-dom';

type ItemProps = {
	img: string;
	name: string;
	href: string;
};

export const Item = ({ img, name, href }: ItemProps) => {
	const classes = useStyles();
	return (
		<Box>
			<Link to={href} className={classes.item}>
				<Box className={classes.imgWrap}>
					<Img src={img} alt="" className={classes.img} />
				</Box>
				<Box component={'h3'} className={classes.name}>
					<Box component={'span'}>{name}</Box>
				</Box>
			</Link>
		</Box>
	);
};
