import { Chip } from '@mui/material';
import IconCloseCircle from '@/assets/icons/close-circle.svg';

type CustomChipProps = {
	label: string;
	onDelete: () => void;
};
export const CustomChip = ({ label, onDelete }: CustomChipProps) => {
	return <Chip label={label} variant="outlined" onDelete={onDelete} deleteIcon={<IconCloseCircle />} />;
};
