import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from './Styles';

const ListData = [
	{
		name: '© 2023 WristDeco',
	},
	{
		name: 'Privacy Policy',
		href: '/',
	},
	{
		name: 'Terms & Conditions',
		href: '/',
	},
	{
		name: 'Cookies',
		href: '/',
	},
];

export const CopyrightLinks = () => {
	const classes = useStyles();
	return (
		<Box component={'ul'} className={classes.copyrightLinks}>
			{ListData.map((item, index) => (
				<Item key={index} name={item.name} href={item.href} />
			))}
		</Box>
	);
};

type ItemProps = {
	name: string;
	href?: string;
};

const Item = ({ name, href }: ItemProps) => {
	const classes = useStyles();
	if (href) {
		return (
			<Box component={'li'} className={classes.copyrightLinksItem}>
				<Link to={href} className={classes.copyrightLinksLink}>
					{name}
				</Link>
			</Box>
		);
	}
	return (
		<Box component={'li'} className={classes.copyrightLinksItem}>
			{name}
		</Box>
	);
};
