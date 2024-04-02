import { Box } from '@mui/material';
import { useStyles } from './Styles';
import { MainContainer } from '@/components/MainContainer';
import { Img } from 'react-image';
import { CustomTitle } from '@/components/CustomTitle';
import { CheckList } from '@/components/CheckList';
import { Button } from '@/components/Button';
import IconCheckCircle from '@/assets/icons/check-circle.svg';

type BuyerProtectionProps = {
	className?: string;
	list: string[];
};
export const BuyerProtection = ({ className, list }: BuyerProtectionProps) => {
	const classes = useStyles();
	return (
		<Box className={`${classes.section} ${className || ''}`}>
			<MainContainer className={classes.wrap}>
				<Box>
					<Box className={classes.imageWrap}>
						<Img src={'/img/buyer-protection.jpg'} alt="" className={classes.image} />
						<IconCheckCircle className={classes.icon} />
					</Box>
				</Box>

				<Box className={classes.content}>
					<Box>
						<CustomTitle as="h2" className={classes.title}>
							Buyer Protection
						</CustomTitle>
						<CheckList list={list} />
						<Box className={classes.btnWrap}>
							<Button type="outline" className={classes.btn}>
								Find out more about our security
							</Button>
						</Box>
					</Box>
				</Box>
			</MainContainer>
		</Box>
	);
};
