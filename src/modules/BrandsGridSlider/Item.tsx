import { Link } from 'react-router-dom';
import { Img } from 'react-image';
import { useStyles } from './Styles';
export type ItemProps = {
	href: string;
	img: string;
};
export const Item = ({ href, img }: ItemProps) => {
	const classes = useStyles();
	return (
		<div className={classes.item}>
			<Link to={href} className={classes.itemInner}>
				<Img src={img} alt="" className={classes.itemImg} />
			</Link>
		</div>
	);
};
