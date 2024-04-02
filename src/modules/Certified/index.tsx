import { useStyles } from './Styles';
import { Box } from '@mui/material';
import { MainContainer } from '@/components/MainContainer';
import { Img } from 'react-image';

type CertifiedItemProps = {
	title: string;
	description: string;
	img: string;
};

const CertifiedItem = ({ title, description, img }: CertifiedItemProps) => {
	const classes = useStyles();

	return (
		<Box component={'li'} className={classes.item}>
			<Box className={classes.textWrap}>
				<Box component={'h3'} className={classes.title}>
					{title}
				</Box>
				<Box component={'p'} className={classes.description}>
					{description}
				</Box>
			</Box>
			<Box className={classes.imgWrap}>
				<Img src={img} alt="" className={classes.img} />
			</Box>
		</Box>
	);
};

export const Certified = () => {
	const classes = useStyles();

	return (
		<MainContainer className={classes.section}>
			<Box component={'ul'} className={classes.list}>
				<CertifiedItem
					title="WristDeco - Certified Original"
					description="Whether brand new, pre-owned, or vintage, rest assured that the authenticity of every luxury watch is certified by our skilled watchmakers."
					img="/img/certified/certificate.png"
				/>
				<CertifiedItem
					title="WristDeco - Warranty"
					description="Enjoy a 24-month warranty on every watch, regardless of its condition, courtesy of our in-house service center."
					img="/img/certified/protection.png"
				/>
			</Box>
		</MainContainer>
	);
};
