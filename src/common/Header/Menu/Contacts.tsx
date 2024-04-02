import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Social } from '@/components/Social';

import IconCall from '@/assets/icons/call.svg';
import IconSms from '@/assets/icons/sms.svg';

import { useStyles } from './Styles';

export const Contacts = () => {
	const classes = useStyles();
	return (
		<Box className={classes.contacts}>
			<Box component={'h3'} className={classes.contactsTitle}>
				Contacts
			</Box>
			<Box component={'ul'} className={classes.contactsList}>
				<Box component={'li'}>
					<Box className={classes.contactsListLabel}>Call us</Box>
					<Link to={'tel:+1 (888) 123-4567'} className={classes.contactsListInner}>
						<IconCall className={classes.contactsListIcon} />
						<Box component={'span'}>+1 (888) 123-4567</Box>
					</Link>
				</Box>
				<Box component={'li'}>
					<Box className={classes.contactsListLabel}>Send us an email</Box>
					<Link to={'mailto:info@wristdeco.com'} className={classes.contactsListInner}>
						<IconSms className={classes.contactsListIcon} />
						<Box component={'span'}>info@wristdeco.com</Box>
					</Link>
				</Box>
			</Box>
			<Box component={'h3'} className={classes.socialTitle}>
				Follow Us
			</Box>
			<Social
				list={[
					{ name: 'facebook', href: '/' },
					{ name: 'instagram', href: '/' },
				]}
			/>
		</Box>
	);
};
