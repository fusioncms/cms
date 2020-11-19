const path = require('path');
const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')

const production = process.env.NODE_ENV === 'production'
const sourceMap = production ? false : 'inline-source-map'

mix.setPublicPath('public')
    .js('resources/js/gravity.js', 'js')
    .vue()
    .sass('resources/scss/gravity.scss', 'css', { implementation: require('node-sass') })
    // .extract(['vue', 'vue-loader', 'vue-router', 'vue-template-compiler', 'vuex'], 'js/vue.js')
    // .extract(['vuedraggable', 'portal-vue', 'vue-apexcharts', 'vue-feather-icons', 'vue-head', 'vue-moment', 'vue-mq', 'vue-scrollactive', 'vue2-dropzone', '@fortawesome/vue-fontawesome'], 'js/vue-plugins.js')
    // .extract(['tailwindcss', '@tailwindcss/ui'], 'js/tailwind.js')
    // .extract(['@fortawesome/fontawesome-free', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-brands-svg-icons', '@fortawesome/free-regular-svg-icons', '@fortawesome/free-solid-svg-icons'], 'js/fontawesome.js')
    // .extract()
    .version()
    .webpackConfig({
        devtool: sourceMap,
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