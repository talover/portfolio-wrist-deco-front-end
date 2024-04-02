import { Box, useMediaQuery } from '@mui/material';
import { useStyles } from './Styles';
import { Img } from 'react-image';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/Button';

type ItemProps = {
	bg: string;
	href: string;
	name: string;
};

export const Item = ({ bg, href, name }: ItemProps) => {
	const classes = useStyles();
	return (
		<Link to={href} className={classes.item}>
			<Box component={'span'} className={classes.bg}>
				<Img src={bg} alt="" />
			</Box>
			<Box component={'span'} className={classes.inner}>
				<Box component={'span'} className={classes.itemName}>
					{name}
				</Box>
			</Box>
		</Link>
	);
};

type ItemHeroProps = {
	img: string;
	bg: string;
	href: string;
	name: string;
};

export const ItemHero = ({ img, bg, href, name }: ItemHeroProps) => {
	const classes = useStyles();
	const navigation = useNavigate();
	const md = useMediaQuery('(min-width:768px) and (max-width:1279px)');
	const xl = useMediaQuery('(min-width:1280px) and (max-width:1439px)');
	const xxl = useMediaQuery('(min-width:1440px)');
	return (
		<Box onClick={() => navigation(href)} className={classes.itemHero}>
			<Box className={classes.bg}>
				<Img src={bg} alt="" />
			</Box>
			<Box className={classes.inner}>
				<Img src={img} alt="" className={classes.img} />
				<Box className={classes.itemHeroName}>{name}</Box>
				<Button
					href={href}
					size={md ? undefined : xl ? 'medium' : xxl ? 'large' : 'small'}
					color="white"
					type="outline"
					className={classes.btn}
				>
					shop now
				</Button>
			</Box>
		</Box>
	);
};
