const defaultTheme = require('tailwindcss/defaultTheme')
const { colors } = require('tailwindcss/defaultTheme')

const cursors = {
    auto: 'auto',
    default: 'default',
    pointer: 'pointer',
    wait: 'wait',
    text: 'text',
    move: 'move',
    'not-allowed': 'not-allowed',
    'ns-resize': 'ns-resize'
}

const screens = {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px'
}

module.exports = {
    purge: false,
    theme: {
        cursors: cursors,

        screens: screens,

        boxShadow: {
            'default': '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
            'md': ' 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
            'lg': ' 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
            'xl': ' 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, .25)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, .3)',
            'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
            'focus': '0 0 0 3px rgba(160,174,192,0.5)',
            'focus-success': '0 0 0 3px rgba(72,187,120,0.5)',
            'focus-danger': '0 0 0 3px rgba(245,101,101,0.5)',
            'none': 'none',
        },

        extend: {
            colors: {
                'transparent': 'rgba(0, 0, 0, 0)',
                'black': '#000000',
                'white': '#ffffff',
                'emoji': '#fbd043',

                'smoke': {
                    100: 'rgba(35, 42, 60, 0.1)',
                    200: 'rgba(35, 42, 60, 0.2)',
                    300: 'rgba(35, 42, 60, 0.3)',
                    400: 'rgba(35, 42, 60, 0.4)',
                    500: 'rgba(35, 42, 60, 0.5)',
                    600: 'rgba(35, 42, 60, 0.6)',
                    700: 'rgba(35, 42, 60, 0.7)',
                    800: 'rgba(35, 42, 60, 0.8)',
                    900: 'rgba(35, 42, 60, 0.9)',
                },

                'primary': {
                    100: '#FAC9C4',
                    200: '#FAB7B0',
                    300: '#FA9F95',
                    400: '#F77E71',
                    500: '#F45342',
                    600: '#F33F2B',
                    700: '#E7230D',
                    800: '#C11D0B',
                    900: '#9A1809',
                },

                'secondary': {
                    100: '#F1F2F4',
                    200: '#BDC4CF',
                    300: '#A7B0BF',
                    400: '#8995AA',
                    500: '#62718e',
                    600: '#4A556A',
                    700: '#37404F',
                    800: '#29303B',
                    900: '#1F242D',
                },

                'gray': {
                    50: '#f9fafb',
                    ...colors.gray,
                },

                'success': {
                    50:  '#aaba52',
                    100: '#F4F6EA',
                    200: '#E4E9C8',
                    300: '#CFD89E',
                    400: '#BFCB7D',
                    500: '#aaba52',
                    600: '#7e8c34',
                    700: '#5d6925',
                    800: '#454e18',
                    900: '#353b15',
                },

                'info': {
                    50:  '#6D3B69',
                    100: '#B9E8F1',
                    200: '#A1E0EC',
                    300: '#83D6E6',
                    400: '#5AC8DE',
                    500: '#23B5D3',
                    600: '#1A889F',
                    700: '#146778',
                    800: '#0F4D5A',
                    900: '#0C3A44',
                },

                'warning': {
                    50: '#fdfdea',
                    ...colors.yellow,
                },

                'danger': {
                    50: '#fdf2f2',
                    ...colors.red,
                },
            },

            fontFamily: {
                sans: [
                    'Source Sans Pro',
                    ...defaultTheme.fontFamily.sans,
                ],

                serif: [
                    'Montserrat',
                    ...defaultTheme.fontFamily.serif,
                ],

                brand: [
                    'Montserrat Alternates'
                ]
            },

            width: {
                ...screens
            },

            minWidth: {
                ...screens
            },

            maxWidth: {
                ...screens
            },

            height: {
                ...screens
            },

            minHeight: {
                ...screens,
            },

            maxHeight: {
                ...screens,
            },
        }
    },

    plugins: [
        // require('@tailwindcss/ui')
    ],
}