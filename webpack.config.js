var path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

// const = es6 | var = es5
const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const entry = PRODUCTION
	// if production is true
	?	[ 	'./src/app.js' 	]
	// if false: development
	:	[
				'./src/app.js',
				'webpack-dev-server/client?http://localhost:8080',
				'webpack/hot/only-dev-server'
		];

var plugins = PRODUCTION
  ? [
				// "tree shakin" remove unused code from bundle
				new webpack.optimize.UglifyJsPlugin(),
				new ExtractTextPlugin('style-[contenthash:10].css'),
				new HTMLWebpackPlugin({
						template: 'index-template.html',
				})
		]
  : [ new webpack.HotModuleReplacementPlugin() ];

plugins.push (
		new webpack.DefinePlugin({
				DEVELOPMENT: JSON.stringify(DEVELOPMENT),
				PRODUCTION: JSON.stringify(PRODUCTION)
		})
)

const cssIdentifier = PRODUCTION
	? 	'[hash:base64:10]'
	: 	'[path].[name]---[local]';

const cssLoader = PRODUCTION
	? 	ExtractTextPlugin.extract({
					loader: ['css-loader?localIdentName=' + cssIdentifier + '!postcss-loader', 'sass-loader']
			})
	:		['style-loader', 'css-loader?localIdentName=' + cssIdentifier + '!postcss-loader', 'sass-loader' ];

config = {
		entry: entry,
	  plugins: plugins,
	  module: {
	      loaders: [{
	          test: /\.(js|jsx)$/,
	          loaders: 'babel-loader',
	          exclude: /node_modules/
	      }, {
						test: /\.(png|jpg|gif)$/,
						loaders: 'url-loader?limit=10000&name=images/[hash:12].[ext]',
				}, {
						test: /\.(sass|scss)$/,
						loaders: cssLoader,
				}, {
						test: /\.json$/,
						loader: 'json-loader',
				}]
	  },
	  output: {
				path: path.join(__dirname, 'dist'),
				publicPath: PRODUCTION
				? 	'/'
				: 	'/dist/',

				filename: PRODUCTION
				? 	'bundle.[hash:12].min.js'
				: 	'bundle.js'
	  },
		devtool: 'source-map',
};

module.exports = config;
