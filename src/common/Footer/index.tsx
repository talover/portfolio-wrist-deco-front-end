import { type Theme } from '@mui/material/styles';
import { Box, Accordion, AccordionSummary, AccordionDetails, useMediaQuery } from '@mui/material';
import { MainContainer } from '@/components/MainContainer';
import { Link } from 'react-router-dom';
import { Social } from '@/components/Social';
import { List } from './List';
import { Contacts } from './Contacts';
import { PaymentMethods } from './PaymentMethods';
import { CopyrightLinks } from './CopyrightLinks';

import IconLogo from '@/assets/icons/logo-white.svg';
import IconAngleDown from '@/assets/icons/angle-down.svg';

import { useStyles } from './Styles';

export const Footer = () => {
	const classes = useStyles();
	const md = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
	return (
		<Box className={classes.footer}>
			<MainContainer>
				<Box className={classes.row}>
					<Box className={classes.hero}>
						<Link to={'/'}>
							<IconLogo className={classes.logo} />
						</Link>
						<Box className={classes.heroDescription}>Your luxe timepiece marketplace.</Box>
						<Box className={classes.heroSocialBox}>
							<Box component={'h3'} className={classes.heroSocialTitle}>
								Follow Us
							</Box>
							<Social
								className={classes.heroSocial}
								list={[
									{ name: 'facebook', href: '/' },
									{ name: 'instagram', href: '/' },
								]}
							/>
						</Box>
					</Box>
					{md ? (
						<>
							<Box className={classes.item}>
								<Box className={classes.itemTitle}>Company</Box>
								<List
									list={[
										{ name: 'About us', href: '/' },
										{ name: 'Legal Details', href: '/' },
										{ name: 'FAQ', href: '/' },
									]}
								/>
							</Box>
							<Box className={classes.item}>
								<Box className={classes.itemTitle}>Buy on WristDeco</Box>
								<List
									list={[
										{ name: 'Buyer Protection', href: '/' },
										{ name: 'Payment via trust account', href: '/' },
										{ name: 'Authenticity ', href: '/' },
										{ name: 'Returns', href: '/' },
									]}
								/>
							</Box>
							<Box className={classes.item}>
								<Box className={classes.itemTitle}>Sell on WristDeco</Box>
								<List
									list={[
										{ name: 'Selling as a Private Seller', href: '/' },
										{ name: 'Selling Commercially', href: '/' },
										{ name: 'Free Appraisal', href: '/' },
										{ name: 'Advice for private sellers', href: '/' },
									]}
								/>
							</Box>
							<Box className={classes.item}>
								<Box className={classes.itemTitle}>Contacts</Box>
								<Contacts />
							</Box>
						</>
					) : (
						<Box className={classes.itemsList}>
							<AccordionItem title="Company">
								<List
									list={[
										{ name: 'About us', href: '/' },
										{ name: 'Legal Details', href: '/' },
										{ name: 'FAQ', href: '/' },
									]}
								/>
							</AccordionItem>
							<AccordionItem title="Buy on WristDeco">
								<List
									list={[
										{ name: 'Buyer Protection', href: '/' },
										{ name: 'Payment via trust account', href: '/' },
										{ name: 'Authenticity ', href: '/' },
										{ name: 'Returns', href: '/' },
									]}
								/>
							</AccordionItem>
							<AccordionItem title="Sell on WristDeco">
								<List
									list={[
										{ name: 'Selling as a Private Seller', href: '/' },
										{ name: 'Selling Commercially', href: '/' },
										{ name: 'Free Appraisal', href: '/' },
										{ name: 'Advice for private sellers', href: '/' },
									]}
								/>
							</AccordionItem>
							<AccordionItem title="Contacts">
								<Contacts />
							</AccordionItem>
						</Box>
					)}
				</Box>
				<PaymentMethods />
				<CopyrightLinks />
			</MainContainer>
		</Box>
	);
};

type AccordionItemProps = {
	children: React.ReactNode;
	title: string;
};

const AccordionItem = ({ children, title }: AccordionItemProps) => {
	const classes = useStyles();
	return (
		<Accordion className={classes.accordion}>
			<AccordionSummary expandIcon={<IconAngleDown className={classes.accordionIcon} />}>
				<Box className={classes.itemTitle}>{title}</Box>
			</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</Accordion>
	);
};
