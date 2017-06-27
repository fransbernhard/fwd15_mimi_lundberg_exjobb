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
	  // 'process.env.NODE_ENV': JSON.stringify('production')
		'process.env': {
	    NODE_ENV: JSON.stringify('production')
	  }
	}),
	new webpack.optimize.UglifyJsPlugin({
		mangle: false,
		compress: {
			warnings: false
		}
	}),
  new ExtractTextPlugin('bundle.css'), // creation of HTML files to serve your webpack bundles
	new HtmlWebpackPlugin({
		template: 'index-template.html'
	}),
	new webpack.optimize.CommonsChunkPlugin({
		name: 'bundle',
		filename: '[name].common.js'
	})
]

const config = {
  context: path.join(__dirname, 'src'),
  entry: entry,
	output: output,
	devtool: "source-map",
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
			  use: [{
					loader: 'url-loader',
					options: { limit: 10000, name: './images/[name].[ext]' } // Convert images < 10k to base64 strings (all in images folder)
				}]
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
								plugins: (loader) => [ require('autoprefixer')() ]
							}
						},
			      'sass-loader',
			    ]
			  })
			}
		]
  },
	performance: {
		maxAssetSize: 100000000000000000,
		maxEntrypointSize: 3000000000000000,
		hints: 'warning'
	},
	plugins: plugins,
	externals: {
	  jquery: 'jQuery'
	}
}

module.exports = config;
