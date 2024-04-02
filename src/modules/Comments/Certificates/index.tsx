import React from 'react';
import clsx from 'clsx';
import { Box } from '@mui/material';
import { TwoColumns } from '@/components/BoxInfo';

import IconMedalCircle from '@/assets/icons/certificates/medal-circle.svg';
import IconParsentsCircle from '@/assets/icons/certificates/parsents-circle.svg';

import { useStyles } from './Styles';

type CertificatesData = {
	icon: React.ReactNode;
	description: string;
};

type CertificatesProps = {
	className?: string;
};
export const Certificates = ({ className }: CertificatesProps) => {
	const classes = useStyles();
	return (
		<>
			<TwoColumns
				className={clsx(classes.section, className)}
				firstItemChildren={<Item icon={<IconMedalCircle />} description="Trusted Seller since 2012" />}
				secondItemChildren={<Item icon={<IconParsentsCircle />} description="of buyers recommend this dealer" />}
			/>
		</>
	);
};

const Item = ({ icon, description }: CertificatesData) => {
	const classes = useStyles();
	return (
		<>
			<Box className={classes.icon}>{icon}</Box>
			<Box className={classes.description}>{description}</Box>
		</>
	);
};
