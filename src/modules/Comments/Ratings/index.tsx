import clsx from 'clsx';
import { Box } from '@mui/material';
import { BoxInfo } from '@/components/BoxInfo';
import { CustomRating } from '@/components/CustomRating';
import { Progress } from '@/modules/Comments/Progress';

import { useStyles } from './Styles';

type RatingsProps = {
	className?: string;
};
export const Ratings = ({ className }: RatingsProps) => {
	const classes = useStyles();
	return (
		<BoxInfo className={clsx(classes.section, className)} title="Ratings">
			<Box className={classes.row}>
				<Box className={classes.average}>
					<Box component={'h3'} className={classes.title}>
						Average rating
					</Box>
					<Box className={classes.averageNumber}>4.9</Box>
					<CustomRating rating={5} readOnly />
					<Box className={classes.averageReviews}>(457 reviews)</Box>
				</Box>
				<Box>
					<Box className={classes.progressList}>
						<Progress name="5 Star" number="430" value={90} />
						<Progress name="4 Star" number="12" value={10} />
						<Progress name="3 Star" number="0" value={0} />
						<Progress name="2 Star" number="0" value={0} />
						<Progress name="1 Star" number="0" value={0} />
					</Box>
				</Box>
				<Box>
					<Box component={'h3'} className={classes.title}>
						Detailed explanation of ratings
					</Box>
					<Box className={classes.detailedRatingList}>
						<DetailedRating rating={5} description="Shipping" />
						<DetailedRating rating={4} description="Item description" />
						<DetailedRating rating={3} description="Communication" />
					</Box>
				</Box>
			</Box>
		</BoxInfo>
	);
};

type DetailedRatingProps = {
	rating: number;
	description?: string;
};

const DetailedRating = ({ rating, description }: DetailedRatingProps) => {
	const classes = useStyles();
	const roundedRating = rating.toFixed(1);
	return (
		<Box className={classes.detailedRating}>
			<CustomRating rating={rating} readOnly size="small" />
			<Box className={classes.detailedRatingNumber}>{roundedRating}</Box>
			{description && <Box className={classes.detailedRatingDescription}>{description}</Box>}
		</Box>
	);
};
