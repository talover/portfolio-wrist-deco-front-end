import clsx from 'clsx';
import { Box } from '@mui/material';
import { Img } from 'react-image';
import { MainContainer } from '@/components/MainContainer';
import InputBase from '@mui/material/InputBase';
import { Button } from '@/components/Button';
import { useState } from 'react';

import { useStyles } from './Styles';

type FeedBackProps = {
	className?: string;
};

export const FeedBack = ({ className }: FeedBackProps) => {
	const classes = useStyles();
	const [email, setEmail] = useState('');

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};
	return (
		<MainContainer>
			<Box className={clsx(classes.section, className)}>
				<Box className={classes.imgWrap}>
					<Img className={classes.img} src={'/img/feed-back.jpg'} alt="" />
				</Box>
				<Box className={classes.inner}>
					<Box>
						<Box className={classes.label}>WristDeco Newsletter</Box>
						<Box component={'h3'} className={classes.title}>
							Sign up and be the first to get the best deals.
						</Box>
						<Box className={classes.row}>
							<InputBase
								value={email}
								onChange={handleInputChange}
								className={classes.input}
								placeholder="Enter your email address"
							/>
							<Button color="white" className={classes.submit} disabled={!email.trim()}>
								Send
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</MainContainer>
	);
};
