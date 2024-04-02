import clsx from 'clsx';
import { Box } from '@mui/material';

import { Button } from '@/components/Button';
import { Item } from './Item';
import { Contacts } from './Contacts';

import IconProfile from '@/assets/icons/profile.svg';
import IconCloseSquare from '@/assets/icons/close-square.svg';

import { useStyles } from './Styles';

type MenuProps = {
	isActive: boolean;
	close: () => void;
	list: {
		name: string;
		href?: string;
		icon?: string;
		subMenu?: {
			name: string;
			href: string;
		}[];
		more?: string;
	}[];
};

export const Menu = ({ isActive, close, list }: MenuProps) => {
	const classes = useStyles();

	return (
		<Box className={clsx(classes.menu, isActive && classes.menuOpen)}>
			<Box className={classes.menuHeader}>
				Menu
				<Box component={'button'} onClick={close} className={classes.close}>
					<IconCloseSquare />
				</Box>
			</Box>
			<Box className={classes.inner}>
				<Box className={classes.cont}>
					<Button type="outline" className={classes.signIn}>
						<IconProfile />
						Log/Register
					</Button>
					<Box component={'ul'} className={classes.list}>
						{list.map((item, index) => (
							<Item
								key={index}
								href={item.href}
								name={item.name}
								subMenu={item.subMenu}
								more={item.more}
								icon={item.icon}
								close={close}
							/>
						))}
					</Box>
					<Contacts />
				</Box>
			</Box>
		</Box>
	);
};
