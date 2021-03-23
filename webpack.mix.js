const path = require('path');
const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')

const production = process.env.NODE_ENV === 'production'
const sourceMap = production ? false : 'inline-source-map'

mix.setPublicPath('public')
    .js('resources/js/gravity.js', 'js')
    .vue()
    .sass('resources/scss/gravity.scss', 'css', { implementation: require('node-sass') })
    .version()
    .webpackConfig({
        devtool: sourceMap,
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/js/'),
            },
        },
        output: {
            publicPath: '/vendor/fusion/',
            chunkFilename: 'js/chunks/[name].js'
        }
    })
    .options({
        processCssUrls: false,
        postCss: [
            require("@tailwindcss/jit"),
            require('postcss-import'),
            require('tailwindcss'),
            require('autoprefixer'),
        ],
    })
    .copy('resources/img', 'public/img')