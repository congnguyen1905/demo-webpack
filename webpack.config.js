const path = require('path')
const { styles } = require( '@ckeditor/ckeditor5-dev-utils' )
var HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );


module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry : {
        bundle : './src/index.js'
    },
    output : {
        path : path.join(__dirname, 'dist'),
        filename: `[name].bundle.version_1.0.2.js`,
        chunkFilename: `[id].bundle.version_1.0.2.js`
    },
    module : {
        rules: [
            {
                use: ['babel-loader', 'eslint-loader'],
                test: /\.(js|jsx)$/,
                exclude : /node_modules/
            },
            {
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                test: /\.css$/,
                exclude: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/
            },
            {
                use: [{
                    loader : 'svg-url-loader',
                    options: {
                        limit: 10000,
                    }
                }],
                test: /\.svg$/,
                exclude: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/
            },
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
                use: [ 'raw-loader' ]
            },
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: 'singletonStyleTag',
                            attributes: {
                                'data-cke': true
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: styles.getPostCssConfig( {
                            themeImporter: {
                                themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
                            },
                            minify: true
                        } )
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/i,
                use: [{
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]'
                  }
                }]
              }          
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
          }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
          }),
        new CKEditorWebpackPlugin( {
            // The main language that will be built into the main bundle.
            language: 'vi',

            // Additional languages that will be emitted to the `outputDirectory`.
            // This option can be set to an array of language codes or `'all'` to build all found languages.
            // The bundle is optimized for one language when this option is omitted.
            additionalLanguages: 'all',

            // For more advanced options see https://github.com/ckeditor/ckeditor5-dev/tree/master/packages/ckeditor5-dev-webpack-plugin.
        }),

        
    ]
}