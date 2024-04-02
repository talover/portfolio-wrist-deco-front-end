import { type Theme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
import { CustomRating } from '@/components/CustomRating';
import { Img } from 'react-image';

import { useStyles } from './Styles';

type ItemProps = {
	rating: number;
	date: string;
	description: string;
	author: {
		name: string;
		avatar: string;
		city: string;
	};
};

export const Item = ({ rating, date, description, author }: ItemProps) => {
	const classes = useStyles();
	const sm = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
	return (
		<Box className={classes.item}>
			<Box className={classes.inner}>
				<Box className={classes.header}>
					{sm ? <CustomRating rating={rating} readOnly /> : <CustomRating size={'small'} rating={rating} readOnly />}
					<Box className={classes.date}>{date}</Box>
				</Box>
				<Box className={classes.descriptionWrap}>
					<Box className={classes.description}>{description}</Box>
				</Box>
			</Box>

			<Box className={classes.author}>
				<Box className={classes.authorAvatar}>
					<Img src={author.avatar} alt="" />
				</Box>
				<Box className={classes.authorCont}>
					<Box className={classes.authorName}>{author.name}</Box>
					<Box className={classes.authorCity}>{author.city}</Box>
				</Box>
			</Box>
		</Box>
	);
};
