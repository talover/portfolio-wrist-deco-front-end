import { Box, Hidden } from '@mui/material';
import { useStyles } from './Styles';
import { Img } from 'react-image';
import { Link } from 'react-router-dom';

type ItemProps = {
	img: string;
	imgTablet?: string;
	imgDesktop?: string;
	href: string;
};

export const Item = ({ img, imgTablet, imgDesktop, href }: ItemProps) => {

	const classes = useStyles();
	return (
		<Box>
			<Link to={href} className={classes.item}>
				{imgDesktop &&
					<Hidden lgDown>
						<Img src={imgDesktop} alt="" className={classes.img} />
					</Hidden>
				}
				{imgTablet &&
					<Hidden mdDown lgUp>
						<Img src={imgTablet} alt="" className={classes.img} />
					</Hidden>
				}
				<Hidden mdUp>
					<Img src={img} alt="" className={classes.img} />
				</Hidden>

			</Link>
		</Box>
	);
};
