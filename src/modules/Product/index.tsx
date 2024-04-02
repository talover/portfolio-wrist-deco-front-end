import { Box, useMediaQuery } from '@mui/material';
import { Theme } from '@mui/material/styles';

import { Link } from 'react-router-dom';

import { MainContainer } from '@/components/MainContainer';
import { CustomBreadcrumbs } from '@/components/CustomBreadcrumbs';
import { Slider } from './Slider';
import { CreateListing } from './CreateListing';
import { PaymentMethods } from './PaymentMethods';
import { ActionList } from './ActionList';
import { BuyerProtection } from './BuyerProtection';
import { SellerInformation } from './SellerInformation';
import { Information } from './Information';
import { Button } from '@/components/Button';

import IconOriginalBox from '@/assets/icons/originalBox.svg';
import IconCheckedBox from '@/assets/icons/checkedBox.svg';

import { useStyles } from './Styles';

type ProductSectionProps = {
	gallery: {
		img: string;
		thumbs: string;
	}[];
	title: string;
};
export const ProductSection = ({ gallery, title }: ProductSectionProps) => {
	const classes = useStyles();
	const md = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
	return (
		<>
			<MainContainer>
				<Box className={classes.section}>
					<Box className={classes.sliderWrap}>
						<Slider list={gallery} />
						{md && <CreateListing />}
					</Box>
					<Box className={classes.cont}>
						<CustomBreadcrumbs
							maxItems={2}
							list={[
								{ name: 'Richard Mille', href: '/' },
								{ name: 'RM 07', href: '/' },
							]}
							current={'RM07-01'}
							sx={{ marginBlock: { xs: 20 / 4, lg: 30 / 4 } }}
						/>
						<Box className={classes.infoRow}>
							<Box className={classes.infoRowText}>
								<Box className={classes.infoRowStock}>In stock</Box>
								<Box className={classes.infoRowViews}>61 views in 48 hours</Box>
							</Box>
							<Box className={classes.infoRowIcons}>
								<IconOriginalBox />
								<IconCheckedBox />
							</Box>
						</Box>
						<Box component={'h1'} className={classes.title}>
							{title}
						</Box>
						<Box className={classes.category}>Rose Gold Carbon</Box>
						<Box className={classes.info}>
							<Box>RM07-01</Box>
							<Box>
								Condition:{' '}
								<Link to={'/'}>
									<Box component={'b'}>Unworn</Box>
								</Link>
							</Box>
							<Box>Year of production 2021 | Original box | Original papers</Box>
						</Box>
						<Box className={classes.price}>$263,900</Box>
						<Box className={classes.info}>
							<Box>
								Free insured shipping to{' '}
								<Link to={'/'}>
									<Box component={'b'}>United States of America</Box>
								</Link>
							</Box>
						</Box>
						<PaymentMethods />
						<Box className={classes.btnGroup}>
							<Button size={'medium'} color={'success'}>
								Buy now
							</Button>
							<Button size={'medium'} type={'outline'}>
								Suggest a price
							</Button>
						</Box>
						<ActionList />
						<BuyerProtection />
						<SellerInformation />
						{!md && <CreateListing />}
					</Box>
				</Box>
			</MainContainer>
			<Information />
		</>
	);
};
