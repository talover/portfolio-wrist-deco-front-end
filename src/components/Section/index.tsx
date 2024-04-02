import React from 'react';
import { Theme, Box } from '@mui/system';
import makeStyles from '@mui/styles/makeStyles';
import { CustomTitle } from '@/components/CustomTitle';
import { MainContainer } from '@/components/MainContainer';

const useStyles = makeStyles((theme: Theme) => ({
	section: {
		marginTop: theme.spacing(30 / 4),
		marginBottom: theme.spacing(60 / 4),
		[theme.breakpoints.up('md')]: {
			marginTop: theme.spacing(60 / 4),
			marginBottom: theme.spacing(100 / 4),
		},
	},
	title: {
		marginBottom: theme.spacing(20 / 4),
		[theme.breakpoints.up('md')]: {
			marginBottom: theme.spacing(30 / 4),
		},
		marginTop: 0,
		color: theme.palette.secondary.ligth,
	},
}));

type SectionProps = {
	children?: React.ReactNode;
	title?: string;
	as?: 'h1' | 'h2' | 'h3';
	className?: string;
	container?: boolean;
};

export const Section = ({ children, title, as = 'h2', className, container = true }: SectionProps) => {
	const classes = useStyles();

	return (
		<Box component="section" className={`${classes.section} ${className || ''}`}>
			{container ? (
				<MainContainer>
					{title && (
						<CustomTitle as={as} className={classes.title}>
							{title}
						</CustomTitle>
					)}
					{children}
				</MainContainer>
			) : (
				<>
					{title && (
						<MainContainer>
							<CustomTitle as="h2" className={classes.title}>
								{title}
							</CustomTitle>
						</MainContainer>
					)}
					{children}
				</>
			)}
		</Box>
	);
};
