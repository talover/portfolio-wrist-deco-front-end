import clsx from 'clsx';
import { Box } from '@mui/material';
import { useStyles } from './Styles';

type ActionBtnProps = {
	icon: React.ReactNode;
	name?: string;
	badge?: string;
	onClick: () => void;
	className?: string;
};

export const ActionBtn = ({ icon, name, badge, onClick, className }: ActionBtnProps) => {
	const classes = useStyles();
	return (
		<Box component={'button'} onClick={onClick} className={clsx(classes.actionBtn, className)}>
			<Box component={'span'} className={classes.actionBtnIcon}>
				{badge && (
					<Box component={'span'} className={classes.actionBtnBadge}>
						{badge}
					</Box>
				)}
				{icon}
			</Box>
			{name && (
				<Box component={'span'} className={classes.actionBtnName}>
					{name}
				</Box>
			)}
		</Box>
	);
};
