import { Section } from '@/components/Section';
import { Box } from '@mui/material';
import { useStyles } from './Styles';
import { Item } from './Item';
import IconPayment from '@/assets/icons/benefits/payment.svg';
import IconTimepiece from '@/assets/icons/benefits/timepiece.svg';
import IconTrustAccount from '@/assets/icons/benefits/trust-account.svg';
import IconWatch from '@/assets/icons/benefits/watch.svg';

export const Benefits = () => {
	const classes = useStyles();
	return (
		<Section title="The WristDeco way">
			<Box className={classes.list}>
				<Item name="Discover your <br/>dream watch" icon={<IconWatch />} />
				<Item name="Make a secure payment <br/>through an trust account" icon={<IconTrustAccount />} />
				<Item name="Receive your new <br/>timepiece" icon={<IconTimepiece />} />
				<Item name="Payment is released to the seller only after you've received your watch" icon={<IconPayment />} />
			</Box>
		</Section>
	);
};
