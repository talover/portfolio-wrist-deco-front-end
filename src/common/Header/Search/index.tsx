import clsx from 'clsx';
import { Box } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { Button } from '@/components/Button';
import { List } from './List';
import { TagsList } from './TagsList';

import IconCloseSquare from '@/assets/icons/close-square.svg';
import IconSearch from '@/assets/icons/search.svg';

import { useStyles } from './Styles';

type SearchProps = {
	isActive: boolean;
	close: () => void;
	isDropActive: boolean;
	closeDrop: () => void;
};

export const Search = ({ isActive, close, isDropActive, closeDrop }: SearchProps) => {
	const classes = useStyles();

	const removeSearchItem = () => {
		console.log('remove search item');
	};

	return (
		<>
			<Box className={clsx(classes.search, isActive && classes.searchActive, isDropActive && classes.searchOpen)}>
				<Box className={classes.searchRow}>
					<Box component={'button'} onClick={close} className={classes.searchClose}>
						<IconCloseSquare />
					</Box>
					<Box className={classes.searchCont}>
						<InputBase
							className={classes.searchInput}
							placeholder="Find your luxury watches quickly and easily"
							onClick={closeDrop}
						/>
						<Button color="primary" className={classes.searchBtn}>
							<IconSearch />
							Search
						</Button>
					</Box>
				</Box>
				<Box className={classes.searchDrop}>
					<Box className={classes.searchHeader}>
						<Box component={'h3'} className={classes.searchTitle}>
							Recent searches
						</Box>
						<Box component={'button'} className={classes.searchClear}>
							Clear all
						</Box>
					</Box>
					<List
						list={[
							{
								name: 'Aquaracer',
								href: '/',
								remove: removeSearchItem,
							},
							{
								name: 'Aquaracer',
								href: '/',
								remove: removeSearchItem,
							},
							{
								name: 'Girard Perregaux',
								href: '/',
								remove: removeSearchItem,
							},
							{
								name: 'Breitling Transocean',
								href: '/',
								remove: removeSearchItem,
							},
							{
								name: 'Omega Seamaster Aqua Terra',
								href: '/',
								remove: removeSearchItem,
							},
						]}
					/>
					<Box className={classes.searchTags}>
						<Box className={classes.searchHeader}>
							<Box component={'h3'} className={classes.searchTitle}>
								Popular Searches
							</Box>
						</Box>
						<TagsList
							list={[
								{ name: 'Popular Searches', href: '/' },
								{ name: 'Rolex Daytona', href: '/' },
								{ name: 'Rolex Submariner', href: '/' },
								{ name: 'Rolex Datejust', href: '/' },
								{ name: 'Rolex GMT-Master II', href: '/' },
								{ name: 'Omega Seamaster', href: '/' },
								{ name: 'Omega Speedmaster', href: '/' },
								{ name: 'Breitling Navitimer', href: '/' },
								{ name: 'Audemars Piguet Royal Oak', href: '/' },
								{ name: 'Patek Philippe Nautilus', href: '/' },
								{ name: 'Tudor Black Bay', href: '/' },
							]}
						/>
					</Box>
				</Box>
			</Box>
		</>
	);
};
