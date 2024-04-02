import clsx from 'clsx';
import { Box } from '@mui/material';
import { TwoColumns } from '@/components/BoxInfo';
import { Link } from 'react-router-dom';
import { useStyles } from './Styles';

type ListingInfoData = {
	href?: string;
	number: string;
	description: string;
};

type ListingInfoProps = {
	className?: string;
	firstItem: ListingInfoData;
	secondItem: ListingInfoData;
};
export const ListingInfo = ({ className, firstItem, secondItem }: ListingInfoProps) => {
	const classes = useStyles();
	return (
		<>
			<TwoColumns
				className={clsx(classes.section, className)}
				firstItemChildren={<Item number={firstItem.number} href={firstItem.href} description={firstItem.description} />}
				secondItemChildren={
					<Item number={secondItem.number} href={secondItem.href} description={secondItem.description} />
				}
			/>
		</>
	);
};

const Item = ({ href, number, description }: ListingInfoData) => {
	const classes = useStyles();
	return (
		<>
			<Box className={classes.number}>{href ? <Link to={href}>{number}</Link> : number}</Box>
			<Box className={classes.description}>{description}</Box>
		</>
	);
};
