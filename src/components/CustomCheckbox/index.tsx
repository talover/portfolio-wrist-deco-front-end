import Checkbox from '@mui/material/Checkbox';
import IconTickSquare from '@/assets/icons/tick-square.svg';
import IconTickCheck from '@/assets/icons/tick-square-check.svg';

export const CustomCheckbox = ({ ...checkboxProps }) => {
	return <Checkbox {...checkboxProps} icon={<IconTickSquare />} checkedIcon={<IconTickCheck />} />;
};
