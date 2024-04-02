import clsx from 'clsx';
import { type Theme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { Button } from '@/components/Button';
import IconAngleLeft from '@/assets/icons/angle-left.svg';
import { useStyles } from './Styles';

type SubMenuProps = {
	isActive: boolean;
	className?: string;
	list: {
		name: string;
		href: string;
	}[];
	more?: string;
	close: () => void;
	back: () => void;
};

export const SubMenu = ({ isActive, className, list, more, close, back }: SubMenuProps) => {
	const classes = useStyles();
	const lg = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
	return (
		<Box className={clsx(classes.subMenu, isActive && !lg && classes.subMenuOpen, className)}>
			<Box className={classes.subMenuInner}>
				<Box className={classes.subMenuHeader}>
					<Box component={'button'} onClick={back} className={classes.subMenuBack}>
						<IconAngleLeft />
						<Box>back</Box>
					</Box>
				</Box>
				<Box className={classes.subMenuCont}>
					<Box component={'ul'} className={classes.subMenuList}>
						{list.map((item, index) => (
							<Box key={index} component={'li'}>
								<Link to={item.href} className={classes.subMenuLink} title={item.name} onClick={close}>
									{item.name}
								</Link>
							</Box>
						))}
					</Box>
				</Box>

				{more && (
					<Box className={classes.subMenuFooter}>
						<Button href={more} color="white" className={classes.subMenuMore}>
							Show all
						</Button>
					</Box>
				)}
			</Box>
		</Box>
	);
};
