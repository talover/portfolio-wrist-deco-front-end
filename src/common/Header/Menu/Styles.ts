import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/system';

export const useStyles = makeStyles((theme: Theme) => ({
	menu: {
		background: theme.palette.primary.white,
		position: 'fixed',
		zIndex: 100,
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		transition: '0.3s all ease',
		opacity: 0,
		visibility: 'hidden',
		transform: 'translateX(-100%)',
		maxWidth: theme.spacing(400 / 4),
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'column',
		[theme.breakpoints.up('lg')]: {
			opacity: 1,
			position: 'relative',
			visibility: 'visible',
			transform: 'translateX(0)',
			top: 'auto',
			left: 'auto',
			maxWidth: 'none',
			display: 'block',
		},
	},
	menuOpen: {
		opacity: 1,
		visibility: 'visible',
		transform: 'translateX(0)',
	},
	menuHeader: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottom: '1px solid' + theme.palette.secondary.lighter,
		height: theme.spacing(59 / 4),
		color: theme.palette.secondary.light,
		fontSize: theme.spacing(16 / 4),
		position: 'relative',
		[theme.breakpoints.up('lg')]: {
			display: 'none',
		},
	},
	close: {
		display: 'block',
		margin: theme.spacing(-12 / 4, 0, 0, 0),
		border: 0,
		outline: 'transparent',
		padding: 0,
		color: theme.palette.secondary.light,
		background: 'transparent',
		transition: '0.3s color ease',
		position: 'absolute',
		top: '50%',
		right: theme.spacing(10 / 4),
		'& svg': {
			width: theme.spacing(24 / 4),
			height: theme.spacing(24 / 4),
			display: 'block',
			fill: 'currentcolor',
		},
		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
	signIn: {
		width: '100%',
		marginBottom: theme.spacing(20 / 4),
		[theme.breakpoints.up('lg')]: {
			display: 'none',
		},
	},
	inner: {
		width: '100%',
		flex: '1 1 0',
		overflow: 'auto',
		[theme.breakpoints.up('lg')]: {
			overflow: 'visible',
			position: 'relative',
		},
	},
	cont: {
		padding: theme.spacing(30 / 4, 12 / 4),
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'column',
		minHeight: '100%',
		[theme.breakpoints.up('lg')]: {
			padding: theme.spacing(0, 0, 18 / 4, 0),
			display: 'block',
		},
	},
	list: {
		padding: 0,
		margin: 0,
		listStyle: 'none',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'column',
		rowGap: theme.spacing(10 / 4),
		[theme.breakpoints.up('lg')]: {
			display: 'flex',
			flexWrap: 'wrap',
			alignItems: 'center',
			flexDirection: 'row',
			columnGap: theme.spacing(55 / 4),
		},
		[theme.breakpoints.up('xl')]: {
			columnGap: theme.spacing(110 / 4),
		},
	},
	item: {
		// [theme.breakpoints.up('lg')]: {
		// 	'&:hover': {
		// 		'& $itemBtn': {
		// 			borderColor: theme.palette.primary.main,
		// 			'& $itemBtnIconAngle': {
		// 				transform: 'rotate(-90deg)',
		// 			},
		// 		},
		// 		'& $subMenu': {
		// 			opacity: 1,
		// 			visibility: 'visible',
		// 			zIndex: 200,
		// 			transform: 'translateX(0) translateY(0)',
		// 			pointerEvents: 'all',
		// 		},
		// 	},
		// },
	},
	itemActive: {
		[theme.breakpoints.up('lg')]: {
			'& $itemBtn': {
				borderColor: theme.palette.primary.main,
				'& $itemBtnIconAngle': {
					transform: 'rotate(-90deg)',
				},
			},
			'& $subMenu': {
				opacity: 1,
				visibility: 'visible',
				zIndex: 200,
				transform: 'translateX(0) translateY(0)',
				pointerEvents: 'all',
			},
		},
	},
	itemBtn: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		columnGap: theme.spacing(8 / 4),
		border: 0,
		outline: 'transparent',
		background: 'transparent',
		fontSize: theme.spacing(16 / 4),
		textDecoration: 'none',
		color: theme.palette.secondary.light,
		padding: theme.spacing(10 / 4, 0),
		margin: 0,
		width: '100%',
		cursor: 'pointer',
		[theme.breakpoints.up('lg')]: {
			padding: theme.spacing(9 / 4, 4 / 4),
			border: '1px solid transparent',
			columnGap: theme.spacing(12 / 4),
			transition: '0.3s all ease',
			borderRadius: theme.spacing(10 / 4),
			fontSize: theme.spacing(14 / 4),
		},
		[theme.breakpoints.up('xl')]: {
			fontSize: theme.spacing(16 / 4),
			columnGap: theme.spacing(10 / 4),
		},
	},
	itemBtnIcon: {
		width: theme.spacing(24 / 4),
		height: theme.spacing(24 / 4),
		fill: 'currentcolor',
		display: 'block',
	},
	itemBtnIconAngle: {
		marginLeft: 'auto',
		[theme.breakpoints.up('lg')]: {
			transform: 'rotate(90deg)',
			transition: '0.3s all ease',
		},
	},
	subMenu: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		transform: 'translateX(-100%)',
		opacity: 0,
		visibility: 'hidden',
		transition: '0.3s all ease',
		[theme.breakpoints.up('lg')]: {
			transform: 'translateX(0) translateY(50px)',
			zIndex: -1,
			paddingTop: theme.spacing(15 / 4),
			top: 'calc(100% - ' + theme.spacing(20 / 4) + ')',
			height: 'auto',
			pointerEvents: 'none',
			maxWidth: theme.spacing(1240 / 4),
		},
	},
	subMenuOpen: {
		transform: 'translateX(0)',
		opacity: 1,
		visibility: 'visible',
	},
	subMenuHeader: {
		borderBottom: '1px solid' + theme.palette.secondary.lighter,
		width: '100%',
		background: theme.palette.primary.white,
		[theme.breakpoints.up('lg')]: {
			display: 'none',
		},
	},
	subMenuBack: {
		border: 0,
		outline: 'transparent',
		padding: theme.spacing(10 / 4),
		margin: 0,
		background: 'transparent',
		display: 'flex',
		alignItems: 'center',
		columnGap: theme.spacing(5 / 4),
		fontSize: theme.spacing(12 / 4),
		color: theme.palette.secondary.light,
		letterSpacing: '0.1em',
		textTransform: 'uppercase',
		'& svg': {
			fill: 'currentcolor',
			width: theme.spacing(24 / 4),
			height: theme.spacing(24 / 4),
			display: 'block',
		},
	},
	subMenuCont: {
		flex: '1',
		overflow: 'auto',

		[theme.breakpoints.up('lg')]: {},
	},
	subMenuInner: {
		height: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'column',
		background: theme.palette.primary.whiteLight,

		[theme.breakpoints.up('lg')]: {
			display: 'block',
			padding: theme.spacing(20 / 4),
			borderRadius: theme.spacing(10 / 4),
			border: '1px solid' + theme.palette.secondary.lighter,
		},
	},
	subMenuFooter: {
		padding: theme.spacing(12 / 4),
		borderTop: '1px solid' + theme.palette.secondary.lighter,
		width: '100%',
		[theme.breakpoints.up('lg')]: {
			border: 0,
			padding: 0,
			marginTop: theme.spacing(30 / 4),
		},
	},
	subMenuMore: {
		width: '100%',
		fontSize: theme.spacing(14 / 4),
	},
	subMenuList: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
		gap: theme.spacing(20 / 4),
		padding: theme.spacing(12 / 4),
		margin: 0,
		listStyle: 'none',
		[theme.breakpoints.up('lg')]: {
			gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
		},
		[theme.breakpoints.up('xl')]: {
			gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
		},
	},
	subMenuLink: {
		fontSize: theme.spacing(14 / 4),
		lineHeight: 1.2857,
		display: 'inline-block',
		position: 'relative',
		color: theme.palette.secondary.light,
		textDecoration: 'none',
		'&:before': {
			display: 'block',
			content: 'attr(title)',
			fontWeight: '500',
			height: 0,
			overflow: 'hidden',
			visibility: 'hidden',
		},
		'&:after': {
			display: 'block',
			content: '""',
			position: 'absolute',
			top: '100%',
			left: 0,
			opacity: 0,
			height: '1px',
			width: 0,
			transition: '0.3s all ease',
			background: theme.palette.primary.main,
		},
		'&:hover': {
			// fontWeight: '500',
			'&:after': {
				width: '100%',
				opacity: 1,
			},
		},
	},
	contacts: {
		padding: theme.spacing(30 / 4, 12 / 4),
		background: theme.palette.primary.whiteLight,
		color: theme.palette.secondary.light,
		margin: theme.spacing(30 / 4, -12 / 4, -30 / 4),
		flex: '1 1 0',
		[theme.breakpoints.up('lg')]: {
			display: 'none',
		},
	},
	contactsTitle: {
		margin: theme.spacing(0, 0, 25 / 4),
		fontSize: theme.spacing(20 / 4),
		fontWeight: 500,
	},
	contactsList: {
		padding: 0,
		margin: 0,
		listStyle: 'none',
		display: 'grid',
		gap: theme.spacing(30 / 4),
	},
	contactsListLabel: {
		marginBottom: theme.spacing(20 / 4),
		fontSize: theme.spacing(16 / 4),
		fontWeight: 300,
	},
	contactsListInner: {
		display: 'flex',
		flexWrap: 'wrap',
		columnGap: theme.spacing(10 / 4),
		textDecoration: 'none',
		color: 'inherit',
		fontSize: theme.spacing(16 / 4),
	},
	contactsListIcon: {
		width: theme.spacing(24 / 4),
		height: theme.spacing(24 / 4),
		fill: 'currentcolor',
		display: 'block',
	},
	socialTitle: {
		letterSpacing: '-0.03em',
		fontSize: theme.spacing(16 / 4),
		color: theme.palette.secondary.light,
		fontWeight: 400,
		margin: theme.spacing(30 / 4, 0, 20 / 4, 0),
	},
}));
