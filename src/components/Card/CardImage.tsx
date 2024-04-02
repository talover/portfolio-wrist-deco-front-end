import { Link } from 'react-router-dom';
import { Img } from 'react-image';
import { useStyles } from './Styles';

type CardImageProps = {
	img: string;
	url: string;
	className?: string;
};

export const CardImage = ({ img, url, className }: CardImageProps) => {
	const classes = useStyles();
	return (
		<Link to={url} className={`${classes.imgLink} ${className || ''}`}>
			<Img src={img} alt="" className={classes.img} />
		</Link>
	);
};
