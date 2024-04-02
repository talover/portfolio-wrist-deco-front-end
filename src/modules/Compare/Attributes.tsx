import { useStyles } from '@/modules/Compare/Styles.ts';

export type AttributesProps = {
	title?: string;
	list: {
		name?: string;
		value?: string;
	}[];
};

export const Attributes = ({ list }: AttributesProps) => {
	const classes = useStyles();
	return (
		<>
			<div className={classes.attributesItemHeader}></div>
			{list.map((item, index) => (
				<div key={index} className={classes.attributesItem}>
					{item.value}
				</div>
			))}
		</>
	);
};
