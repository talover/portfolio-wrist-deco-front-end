import { Section } from '@/components/Section';
import { Item, ItemProps } from './Item.tsx';
import { useStyles } from './Styles';

type ManufacturersProps = {
	list: ItemProps[];
};
export const Manufacturers = ({ list }: ManufacturersProps) => {
	const classes = useStyles();
	return (
		<Section className={classes.section}>
			{list.map((item, index) => (
				<Item key={index} title={item.title} list={item.list} />
			))}
		</Section>
	);
};
