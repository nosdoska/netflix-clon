module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
        defaultLineHeights: true,
        standardFontWeights: true,
    },
    purge: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/pages/**/*.{ts,tsx,js,jsx}'],
    theme: {
        extend: {
            margin: {
              '28': '6.5rem'
            },
            inset: {
                '1/2': '50%',
            },
            colors: {
                primary: '#e50914',
                mineShaft: '#222222',
                tundora: '#303030',
                boulder: '#757575',
            },
        },
    },
    variants: {
        fontSize: ['responsive', 'hover', 'focus', 'group-focus-within'],
        translate: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'group-focus-within'],
    },
    plugins: [require('tailwindcss-interaction-variants')],
}
