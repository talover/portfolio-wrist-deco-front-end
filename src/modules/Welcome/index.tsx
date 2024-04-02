import clsx from 'clsx';
import { Box } from '@mui/material';
import { Img } from 'react-image';
import { MainContainer } from '@/components/MainContainer';
import { MainButton } from '@/components/Button';
import { useStyles } from './Styles';

type WelcomeProps = {
	className?: string;
	bg?: string;
	logo: string;
	title: {
		name: string;
		component?: 'h1' | 'h2' | 'h3';
	};
	since?: string;
};
export const Welcome = ({ className, bg, logo, title, since }: WelcomeProps) => {
	const classes = useStyles();
	const { component = 'h1', name } = title;
	return (
		<Box className={clsx(classes.section, className)}>
			{bg && (
				<Box className={classes.bg}>
					<Img src={bg} alt="" className={classes.bgImg} />
				</Box>
			)}
			<MainContainer>
				<Box className={classes.inner}>
					<Box className={classes.logoBox}>
						<Box className={classes.logoBoxInner}>
							<Img src={logo} alt="" className={classes.logoImage} />
						</Box>
					</Box>
					<Box className={classes.cont}>
						<Box className={classes.contInner}>
							<Box className={classes.header}>
								<Box className={classes.title} component={component}>
									{name}
								</Box>
								{since && <Box className={classes.since}>{since}</Box>}
							</Box>
							<MainButton href={'/'} className={classes.button}>
								Follow
							</MainButton>
						</Box>
					</Box>
				</Box>
			</MainContainer>
		</Box>
	);
};
