import clsx from 'clsx';
import { Theme, Box } from '@mui/system';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		paddingInline: theme.spacing(3.75),
		marginInline: 'auto',
		maxWidth: theme.spacing(350),
		width: '100%',
	},
}));

type MainContainerProps = {
	children?: React.ReactNode;
	className?: string;
};

export const MainContainer = ({ children, className }: MainContainerProps) => {
	const classes = useStyles();
	return <Box className={clsx(classes.container, className)}>{children}</Box>;
};
