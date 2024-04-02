import { Link } from 'react-router-dom';
import { useMediaQuery, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import { useStyles } from './Styles';
import { Theme } from '@mui/material/styles';
import IconAngleDown from '@/assets/icons/angle-down.svg';

export type ItemProps = {
	title: string;
	list: {
		name: string;
		href: string;
	}[];
};
export const Item = ({ title, list }: ItemProps) => {
	const classes = useStyles();
	const md = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
	return (
		<div className={classes.item}>
			{md ? (
				<>
					<div className={classes.itemTitle}>{title}</div>
					<div className={classes.list}>
						{list.map((item, index) => (
							<div key={index}>
								<Link to={item.href} className={classes.listName}>
									{item.name}
								</Link>
							</div>
						))}
					</div>
				</>
			) : (
				<Accordion className={classes.accordion}>
					<AccordionSummary expandIcon={<IconAngleDown className={classes.accordionIcon} />}>
						<Box className={classes.accordionTitle}>{title}</Box>
					</AccordionSummary>
					<AccordionDetails>
						<Box className={classes.accordionCont}>
							<div className={classes.list}>
								{list.map((item, index) => (
									<div key={index}>
										<Link to={item.href} className={classes.listName}>
											{item.name}
										</Link>
									</div>
								))}
							</div>
						</Box>
					</AccordionDetails>
				</Accordion>
			)}
		</div>
	);
};
