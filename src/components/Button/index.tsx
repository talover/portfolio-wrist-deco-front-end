import clsx from 'clsx';
import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStyles } from './Styles';

type ButtonProps = {
	href?: string;
	onClick?: () => void;
	className?: string;
	children?: React.ReactNode;
	target?: string;
	color?: 'primary' | 'white' | 'secondaryLight' | 'success' | 'secondary' | 'error';
	size?: 'small' | 'medium' | 'large';
	type?: 'outline' | 'filled';
	disabled?: boolean;
};

export const Button = ({
	href,
	onClick,
	className,
	children,
	target,
	type = 'filled',
	color,
	size,
	disabled,
}: ButtonProps) => {
	const classes = useStyles();
	const styledClasss = clsx(
		classes.button,
		type === 'outline' && classes.buttonOutline,
		type === 'filled' && classes.buttonFilled,
		size === 'large' && classes.large,
		size === 'medium' && classes.medium,
		size === 'small' && classes.small,
		color === 'primary' && type === 'filled' && classes.buttonPrimary,
		color === 'primary' && type === 'outline' && classes.buttonOutlinePrimary,
		color === 'white' && type === 'filled' && classes.buttonWhite,
		color === 'white' && type === 'outline' && classes.buttonOutlineWhite,
		color === 'secondaryLight' && type === 'filled' && classes.buttonSecondaryLight,
		color === 'secondaryLight' && type === 'outline' && classes.buttonOutlineSecondaryLight,
		color === 'secondary' && type === 'filled' && classes.buttonSecondary,
		color === 'secondary' && type === 'outline' && classes.buttonOutlineSecondary,
		color === 'success' && type === 'filled' && classes.buttonSuccess,
		color === 'success' && type === 'outline' && classes.buttonOutlineSuccess,
		color === 'error' && type === 'filled' && classes.buttonError,
		color === 'error' && type === 'outline' && classes.buttonOutlineError,
		disabled && classes.disabled,
		className
	);

	if (href) {
		return (
			<Link to={href} target={target} className={clsx(styledClasss, disabled && classes.disabled)}>
				{children}
			</Link>
		);
	}

	return (
		<button onClick={onClick} className={styledClasss} disabled={disabled}>
			{children}
		</button>
	);
};

type ButtonCircleProps = {
	className?: string;
	children?: React.ReactNode;
	onClick?: () => void;
};

export const ButtonCircle = ({ className, children, onClick }: ButtonCircleProps) => {
	const classes = useStyles();
	const styledClasss = clsx(classes.buttonCircle, className);
	return (
		<Button onClick={onClick} className={styledClasss}>
			{children}
		</Button>
	);
};

type MainButtonProps = {
	href?: string;
	onClick?: () => void;
	className?: string;
	children?: React.ReactNode;
	target?: string;
	disabled?: boolean;
};
export const MainButton = ({ href, onClick, className, children, target, disabled }: MainButtonProps) => {
	const classes = useStyles();
	return (
		<Button
			target={target}
			disabled={disabled}
			onClick={onClick}
			href={href}
			className={clsx(classes.buttonMain, className)}
		>
			<Box component={'span'} className={classes.buttonMainBg}></Box>
			<Box component={'span'} className={classes.buttonMainContent}>
				{children}
			</Box>
		</Button>
	);
};
