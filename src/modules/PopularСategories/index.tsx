import { Section } from '@/components/Section';
import { Box, useMediaQuery } from '@mui/material';
import { useStyles } from './Styles';
import { Item, ItemHero } from './Item';
import { Button } from '@/components/Button';

type PopularСategoriesProps = {
	listHero: {
		img: string;
		bg: string;
		href: string;
		name: string;
	}[];
	list: {
		bg: string;
		href: string;
		name: string;
	}[];
};

export const PopularСategories = ({ listHero, list }: PopularСategoriesProps) => {
	const classes = useStyles();
	const lg = useMediaQuery('(min-width:1024px)');
	return (
		<Section className={classes.section} title="Popular categories">
			<Box className={classes.listHero}>
				{listHero.map((item, index) => (
					<ItemHero key={index} name={item.name} href={item.href} bg={item.bg} img={item.img} />
				))}
			</Box>
			<Box className={classes.list}>
				{list.map((item, index) => (
					<Item key={index} name={item.name} href={item.href} bg={item.bg} />
				))}
			</Box>
			<Button size={lg ? 'medium' : undefined} type="outline" color="secondaryLight" className={classes.more}>
				Show more
			</Button>
		</Section>
	);
};
