import React from 'react';
import clsx from 'clsx';
import { Box } from '@mui/material';
import { BoxInfo } from '@/components/BoxInfo';
import { Link } from 'react-router-dom';

import IconCall from '@/assets/icons/call.svg';
import IconFax from '@/assets/icons/fax.svg';
import IconSms from '@/assets/icons/sms.svg';
import IconGlobal from '@/assets/icons/global.svg';
import IconLocation from '@/assets/icons/location.svg';
import IconLanguageSquare from '@/assets/icons/language-square.svg';
import IconPen from '@/assets/icons/pen.svg';

import { useStyles } from './Styles';

export type ContactsData = {
	name: string;
	icon?: React.ReactNode;
	href?: string;
};

export type LanguageData = {
	languages: string[];
	icon?: React.ReactNode;
};

type ContactsProps = {
	className?: string;
	phone?: ContactsData;
	fax?: ContactsData;
	email?: ContactsData;
	site?: ContactsData;
	address?: ContactsData;
	language?: LanguageData;
	vat?: ContactsData;
};
export const Contacts = ({ className, phone, fax, email, site, address, language, vat }: ContactsProps) => {
	const classes = useStyles();
	return (
		<BoxInfo className={clsx(classes.section, className)} title="Contacts">
			<Box className={classes.list}>
				{phone && <Item name={phone.name} href={phone.href} icon={<IconCall />} />}
				{fax && <Item name={fax.name} href={fax.href} icon={<IconFax />} />}
				{email && <Item name={email.name} href={email.href} icon={<IconSms />} />}
				{site && <Item name={site.name} href={site.href} icon={<IconGlobal />} />}
				{address && <Item name={address.name} href={address.href} icon={<IconLocation />} />}
				{language && <LanguageItem languages={language.languages} icon={<IconLanguageSquare />} />}
				{vat && <Item name={vat.name} icon={<IconPen />} />}
			</Box>
		</BoxInfo>
	);
};

const Item = ({ name, icon, href }: ContactsData) => {
	const classes = useStyles();
	return (
		<Box className={classes.item}>
			<Box className={classes.icon}>{icon}</Box>
			<Box className={classes.name}>
				{href ? (
					<Link to={href} dangerouslySetInnerHTML={{ __html: name }} target="_blank" />
				) : (
					<Box dangerouslySetInnerHTML={{ __html: name }} />
				)}
			</Box>
		</Box>
	);
};

const LanguageItem = ({ languages, icon }: LanguageData) => {
	const classes = useStyles();

	return (
		<Box className={classes.item}>
			<Box className={classes.icon}>{icon}</Box>
			<Box className={classes.name}>
				We speak:
				<Box component={'ul'} className={classes.languageList}>
					{languages.map((lang, index) => (
						<Box component={'li'} key={index}>
							{lang}
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
};
