import { styled } from '@mui/system';
import Rating from '@mui/material/Rating';

import IconStar from '@/assets/icons/star.svg';
import IconStarSmall from '@/assets/icons/star-small.svg';

const StyledRating = styled(Rating)(({ theme }) => ({
	'&.MuiRating-root': {
		columnGap: theme.spacing(7 / 4),
	},
	'&.MuiRating-sizeSmall': {
		columnGap: 0,
	},
	'& .MuiRating-iconFilled': {
		color: theme.palette.primary.star,
	},
	'& .MuiRating-icon': {
		width: theme.spacing(24 / 4),
		height: theme.spacing(24 / 4),
	},
}));

type CustomRatingProps = {
	rating: number;
	readOnly?: boolean;
	size?: 'small';
};

export const CustomRating = ({ rating, readOnly, size }: CustomRatingProps) => {
	const icon = size === 'small' ? <IconStarSmall fill="currentColor" /> : <IconStar fill="currentColor" />;

	return <StyledRating value={rating} icon={icon} emptyIcon={icon} readOnly={readOnly} size={size} />;
};
