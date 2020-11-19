const path = require('path');
const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')

const production = process.env.NODE_ENV === 'production'
const sourceMap = production ? '' : 'inline-source-map'

mix.setPublicPath('public')
    .js('resources/js/gravity.js', 'js')
    .vue()
    .sass('resources/scss/gravity.scss', 'css', { implementation: require('node-sass') })
    .webpackConfig({
        // devtool: sourceMap,
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/js/'),
            },
        },
        output: {
            publicPath: '/vendor/fusion/'
        }
    })
    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('./resources/tailwind.js')
        ],
    })
    .copy('resources/img', 'public/img')