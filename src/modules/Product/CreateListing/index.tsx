import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { useStyles } from './Styles';

export const CreateListing = () => {
	const classes = useStyles();
	return (
		<Box className={classes.section}>
			<Box>
				Want to sell a similar watch? <Link to={'/'}>Create a listing now</Link>
			</Box>
			<Box>
				<Link to={'/'}>Report listing</Link>
			</Box>
		</Box>
	);
};
