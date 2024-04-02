import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { Section } from '@/components/Section';

import { useStyles } from './Styles';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;
	const classes = useStyles();

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box className={classes.tab}>{children}</Box>}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export const Information = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	// @ts-ignore
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Section title="Information about this listing" className={classes.information}>
			<Tabs value={value} onChange={handleChange} className={classes.tabs}>
				<Tab label="Details" {...a11yProps(0)} className={classes.tabsItem} />
				<Tab label="Safety" {...a11yProps(1)} className={classes.tabsItem} />
			</Tabs>
			<CustomTabPanel value={value} index={0}>
				<Box className={classes.detailsRow}>
					<Box>
						<Box className={classes.detailsItem}>
							<Box component={'h3'} className={classes.detailsItemTitle}>
								Basic Info
							</Box>
							<table className={classes.detailsTable}>
								<tbody>
									<tr>
										<td>Listing code</td>
										<td>GV4MQ4</td>
									</tr>
									<tr>
										<td>Brand</td>
										<td>
											<a href="">Richard Mille</a>
										</td>
									</tr>
									<tr>
										<td>Model</td>
										<td>
											<a href="">RM 07</a>
										</td>
									</tr>
									<tr>
										<td>Reference number</td>
										<td>
											<a href="">RM07-01</a>
										</td>
									</tr>
									<tr>
										<td>Movement</td>
										<td>Automatic</td>
									</tr>
									<tr>
										<td>Case material</td>
										<td>Carbon</td>
									</tr>
									<tr>
										<td>Bracelet material</td>
										<td>Rubber</td>
									</tr>
									<tr>
										<td>Year of production</td>
										<td>2021</td>
									</tr>
									<tr>
										<td>Condition</td>
										<td>
											<a href="">
												<b>Unworn</b>
											</a>{' '}
											(Mint condition, without signs of wear)
										</td>
									</tr>
									<tr>
										<td>Scope of delivery</td>
										<td>Original box, original papers</td>
									</tr>
									<tr>
										<td>Gender</td>
										<td>Women's watch</td>
									</tr>
									<tr>
										<td>Location</td>
										<td>United States of America, Florida, Miami</td>
									</tr>
									<tr>
										<td>Price</td>
										<td>$263,900</td>
									</tr>
									<tr>
										<td>Availability</td>
										<td>Item is in stock</td>
									</tr>
								</tbody>
							</table>
						</Box>
						<Box className={classes.detailsItem}>
							<Box component={'h3'} className={classes.detailsItemTitle}>
								Caliber
							</Box>
							<table className={classes.detailsTable}>
								<tbody>
									<tr>
										<td>Movement</td>
										<td>Automatic</td>
									</tr>
									<tr>
										<td>Caliber/movement</td>
										<td>CRMA2</td>
									</tr>
									<tr>
										<td>Power reserve</td>
										<td>50 h</td>
									</tr>
								</tbody>
							</table>
						</Box>
						<Box className={classes.detailsItem}>
							<Box component={'h3'} className={classes.detailsItemTitle}>
								Case
							</Box>
							<table className={classes.detailsTable}>
								<tbody>
									<tr>
										<td>Case material</td>
										<td>Carbon</td>
									</tr>
									<tr>
										<td>Case diameter</td>
										<td>45.66 x 31.4 mm</td>
									</tr>
									<tr>
										<td>Water resistance</td>
										<td>5 ATM</td>
									</tr>
									<tr>
										<td>Bezel material</td>
										<td>Ceramic</td>
									</tr>
									<tr>
										<td>Crystal</td>
										<td>Sapphire crystal</td>
									</tr>
									<tr>
										<td>Dial</td>
										<td>Transparent</td>
									</tr>
									<tr>
										<td>Dial numerals</td>
										<td>No numerals</td>
									</tr>
								</tbody>
							</table>
						</Box>
						<Box className={classes.detailsItem}>
							<Box component={'h3'} className={classes.detailsItemTitle}>
								Bracelet/strap
							</Box>
							<table className={classes.detailsTable}>
								<tbody>
									<tr>
										<td>Bracelet material</td>
										<td>Rubber</td>
									</tr>
									<tr>
										<td>Bracelet color</td>
										<td>Black</td>
									</tr>
									<tr>
										<td>Clasp</td>
										<td>Fold clasp</td>
									</tr>
									<tr>
										<td>Clasp material</td>
										<td>Rose Gold</td>
									</tr>
								</tbody>
							</table>
						</Box>
					</Box>
					<Box>
						<Box className={classes.detailsItem}>
							<Box component={'h3'} className={classes.detailsItemTitle}>
								Description
							</Box>
							<Box className={classes.detailsItemText}>
								<p>
									All our posts on Chrono24 are of the actual watch in stock.We never use stock photos or pictures from
									the internet.Every timepiece is thoroughly inspected by our Master watchmaker for authenticity and
									condition.
								</p>
								<p>
									*Please note that all international Buyers are responsible for Customs Taxes/Duties of the receiving
									country.
								</p>
								<p>*We do not defraud Customs.</p>
							</Box>
						</Box>
					</Box>
				</Box>
			</CustomTabPanel>
			<CustomTabPanel value={value} index={1}>
				Item Two
			</CustomTabPanel>
		</Section>
	);
};
