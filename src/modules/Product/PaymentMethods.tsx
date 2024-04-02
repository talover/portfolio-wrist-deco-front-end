import { Box } from '@mui/material';
import { Img } from 'react-image';
import { useStyles } from './Styles';

const ListData = [
	'/img/payment-methods/Visa.png',
	'img/payment-methods/Mastercard.png',
	'img/payment-methods/Amex.png',
	'img/payment-methods/Affirm.png',
	'img/payment-methods/USDT.png',
	'img/payment-methods/wire-transfer.png',
];

export const PaymentMethods = () => {
	const classes = useStyles();
	return (
		<Box className={classes.paymentMethodsList}>
			{ListData.map((item, index) => (
				<Item key={index} img={item} />
			))}
		</Box>
	);
};

type ItemProps = {
	img: string;
};

const Item = ({ img }: ItemProps) => {
	const classes = useStyles();
	return (
		<Box>
			<Img src={img} alt="" className={classes.paymentMethodsImg} />
		</Box>
	);
};
