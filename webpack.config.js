var path = require('path')
var webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );
const { styles } = require( '@ckeditor/ckeditor5-dev-utils' );
const Config = require('webpack-chain');
const config = new Config();
module.exports = {
  mode: 'development',
  entry:{
    main:path.resolve(__dirname, './src/main.js')
  }, 
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  /*optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vuevendor: {
            test: /[\\/]node_modules[\\/](vue)[\\/]/,
            name: "vuevendor"
         },
         vuexvendor: {
            test: /[\\/]node_modules[\\/](vuex)[\\/]/,
            name: "vuexvendor"
         },
         vueRoutervendor: {
            test: /[\\/]node_modules[\\/](vue-router)[\\/]/,
            name: "vueRoutervendor"
         },
         axiosvendor:{
             test: /[\\/]node_modules[\\/](axios)[\\/]/,
             name: "vueRoutervendor"
         }
      },
    },
  },*/

plugins:[
     new VueLoaderPlugin(),
     new webpack.HashedModuleIdsPlugin(),
     new HtmlWebpackPlugin({  
      filename: 'index.html',
      template: 'index.html',
      
    })
  ],
  module: {
   
    rules: [
      
      {
        test: /\.css$/,
        use: [
          {loader:'vue-style-loader'},
          {loader: 'css-loader'}
          
        ]
      },
      
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
          // Or /ckeditor5-[^/]+\/theme\/icons\/.+\.svg$/ if you want to limit this loader
          // to CKEditor 5 icons only.
          test: /theme[/\\]icons[/\\][^/\\]+\.svg$/,

          use: [{ loader:'raw-loader' }],
           exclude: [/(node_modules|@ckeditor)/,
                     /(node_modules|@wiris)/ ]
      },
      {
         test: /ckeditor5-[^/]+\/theme\/[\w-/]+\.css$/,
         use: [
              {
                  loader: 'style-loader',
                  options: {
                      injectType: 'singletonStyleTag'
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
              },
          ]
      }
      ]
    },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
