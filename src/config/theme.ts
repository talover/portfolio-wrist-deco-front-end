import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Theme { }
	interface Palette {
		mainBg: string;
		mainText: string;
		star: string;
		mainGradient: string;
		white: Palette['primary'];
	}

	interface PaletteOptions {
		mainBg: string;
		mainText: string;
		star: string;
		mainGradient: string;
		white?: PaletteOptions['primary'];
	}

	interface SimplePaletteColorOptions {
		main: string;
		mainGradient?: string;
		whiteLight?: string;
		white?: string;
		pagination?: string;
		lighter?: string;
		gray?: string;
		darkGray?: string;
		mainAccent?: string;
		star?: string;
		lightGray?: string;
		ultraLightGray?: string;
	}
	interface BreakpointOverrides {
		xs: true;
		sm: true;
		md: true;
		lg: true;
		xl: true;
	}
}

const theme = createTheme({
	spacing: 4,
	breakpoints: {
		values: {
			xs: 0,
			sm: 576,
			md: 768,
			lg: 992,
			xl: 1240,
		},
	},
	palette: {
		primary: {
			main: '#DF9F41',
			light: '#DF9F40',
			mainGradient: 'linear-gradient(90deg, #DF9F41 0%, #FFCB47 100%)',
			white: '#fff',
			whiteLight: '#FAFAFA',
			pagination: '#D4D4D4',
			mainAccent: '#F0AC48',
			star: '#FFD60A',
		},
		secondary: {
			dark: '#000',
			main: '#171717',
			light: '#404040',
			lighter: '#E5E5E5',
			gray: '#737373',
			darkGray: '#525252',
			lightGray: '#eee',
			ultraLightGray: '#f5f5f5',
		},
		success: {
			light: '#3ACD00',
			main: '#16A34A',
			dark: '#0d7935',
		},
		info: {
			main: '#016FD0',
			light: '#1A85F7',
			dark: '#0062B8',
			lighter: '#0066FF',
		},
		error: {
			main: '#FF0000',
			light: '#F87171',
		},
		white: {
			main: '#fff',
			light: '#FAFAFA',
		},
		mainBg: '#fff',
		mainText: '#000',
		star: '#FFD60A',
		mainGradient: 'linear-gradient(90deg, #DF9F41 0%, #FFCB47 100%)',
	},
	typography: {
		h1: {
			fontWeight: 700,
			fontSize: 22,
			letterSpacing: 0,
			marginBottom: 20,
			fontFamily: 'var(--mainFont)',
			'@media (min-width:768px)': {
				fontSize: 26,
			},
			'@media (min-width:1280px)': {
				marginBottom: 30,
				fontSize: 30,
			},
		},
	},
	components: {
		MuiSelect: {
			styleOverrides: {
				root: {
					fontFamily: 'var(--mainFont)',
					fontSize: 16,
					borderRadius: 10,
					borderColor: '#737373',
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: '#737373',
					},
					'& .MuiSelect-select': {
						paddingBlock: 11,
						paddingLeft: 10,
					},
					'& .MuiSelect-icon': {
						width: 24,
						height: 24,
						fill: 'currentColor',
						top: 'calc(50% - ' + 12 + 'px)',
					},
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					height: 30,
					fontFamily: 'var(--mainFont)',
					fontSize: 12,
					fontWeight: 300,
					color: '#737373',
					borderColor: '#737373',
				},
				label: {
					paddingInline: 10,
				},
				colorError: {
					color: '#F87171',
					borderColor: '#F87171',
				},
				deleteIcon: {
					marginLeft: -3,
					marginRight: 3,
					display: 'block',
					width: 24,
					height: 24,
					fill: 'currentColor',
					color: '#737373',
					'&:hover': {
						color: '#F87171',
					},
				},
			},
		},
		MuiCheckbox: {
			styleOverrides: {
				root: {
					padding: 7,
				},
			},
		},
		MuiFormControlLabel: {
			styleOverrides: {
				root: {
					marginRight: 0,
					marginLeft: -8,
				},
				label: {
					fontFamily: 'var(--mainFont)',
					color: '#404040',
					fontSize: 14,
					fontWeight: 300,
					'@media (min-width:768px)': {
						paddingLeft: 5,
					},
				},
			},
		},
	},
});

export default theme;
