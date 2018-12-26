//  PRODUCTION

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = {
	app: path.join(process.cwd(), 'src/app.js')
}

const output = {
	path: path.join(__dirname, 'dist'),
	filename: 'bundle.min.js',
}

const plugins = [
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('production')
		}
	}),
  	new ExtractTextPlugin('bundle.css'),
	new HtmlWebpackPlugin({
		template: 'index-template.html',
		inject: true,
	    minify: {
	      removeComments: true,
	      collapseWhitespace: true,
	      removeRedundantAttributes: true,
	      useShortDoctype: true,
	      removeEmptyAttributes: true,
	      removeStyleLinkTypeAttributes: true,
	      keepClosingSlash: true,
	      minifyJS: true,
	      minifyCSS: true,
	      minifyURLs: true,
	    }
	})
]

const config = {
	context: path.join(__dirname, 'src'),
	mode: 'production',
	entry: entry,
	output: output,
	optimization: {
	    minimize: true,
		splitChunks: {
			chunks: 'all'
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				include: path.join(__dirname, 'src'),
				use: "babel-loader"
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader',
		        options: {
					name: '/images/[name].[ext]'
		        },
				// use: [
				// 	'file-loader',
				// 	{
				// 		loader: 'image-webpack-loader',
				// 		options: {
				// 			bypassOnDebug: true,
				// 			disable: true,
				// 			name: '[path][name].[ext]'
				// 		}
				// 	},
				// ]
			},
			{
				test: /\.(sass|scss)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								config: {
									path: __dirname + '/postcss.config.js'
								}
							},
						},
						'sass-loader'
					]
				})
			}
		]
	},
	plugins: plugins,
}

module.exports = config;
