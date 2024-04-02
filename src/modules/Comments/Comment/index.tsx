import clsx from 'clsx';
import { Box, useMediaQuery } from '@mui/material';
import { CustomRating } from '@/components/CustomRating';
import { Img } from 'react-image';

import IconVerify from '@/assets/icons/verify.svg';
import IconLike from '@/assets/icons/like.svg';
import IconDislike from '@/assets/icons/dislike.svg';

import { useStyles } from './Styles';
import { Theme } from '@mui/material/styles';

export type CommentProps = {
	className?: string;
	rating: number;
	avatar: string;
	name: string;
	date: string;
	verified: boolean;
	like?: number;
	onClickLike?: () => void;
	dislike?: number;
	onClickDislike?: () => void;
	description: string;
};
export const Comment = ({
	className,
	rating,
	avatar,
	name,
	date,
	verified,
	like,
	onClickLike,
	dislike,
	onClickDislike,
	description,
}: CommentProps) => {
	const classes = useStyles();
	const lg = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
	return (
		<Box className={clsx(classes.item, className)}>
			<Box className={classes.header}>
				<Box className={classes.avatar}>
					<Img src={avatar} />
				</Box>
				<Box className={classes.headerCont}>
					<Box className={classes.name}>{name}</Box>
					<Box className={classes.date}>{date}</Box>
				</Box>
			</Box>
			<Box className={classes.cont}>
				{lg ? <CustomRating rating={rating} readOnly /> : <CustomRating size={'small'} rating={rating} readOnly />}
				{verified && (
					<Box className={classes.verified}>
						<IconVerify />
						<Box>Verified purchase</Box>
					</Box>
				)}
				<Box className={classes.description}>{description}</Box>
				<Box className={classes.review}>
					<Box className={classes.reviewTitle}>Was this review helpful to you?</Box>
					<Box className={classes.reviewBtnGroup}>
						<Box className={classes.reviewBtnItem}>
							<Box
								component={'button'}
								onClick={onClickLike}
								className={clsx(classes.reviewBtn, classes.reviewBtnLike)}
							>
								<IconLike />
							</Box>
							{like ?? '0'}
						</Box>
						<Box className={classes.reviewBtnItem}>
							<Box
								component={'button'}
								onClick={onClickDislike}
								className={clsx(classes.reviewBtn, classes.reviewBtnDislike)}
							>
								<IconDislike />
							</Box>
							{dislike ?? '0'}
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
