// DEVELOPMENT
const webpack = require('webpack');
const path = require('path');

const entry = [
	'webpack-dev-server/client?http://localhost:8080', // bundle the client for webpack-dev-server and connect to the provided endpoint
	'webpack/hot/only-dev-server', // bundle the client for hot reloading only- means to only hot reload for successful updates
	'./app.js'
]

const output = {
	path: path.join(__dirname, 'dist'),
	publicPath: '/dist',
  filename: 'bundle.min.js'
}

const plugins = [
	new webpack.HotModuleReplacementPlugin(), // enable HMR globally
	new webpack.NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
]

const config = {
  context: path.join(__dirname, 'src'),
  entry: entry,
	output: output,
	devtool: "inline-source-map",
  module: {
    rules: [
			{
				// test: /\.(js|jsx)$/,
				// exclude: /node_modules/,
				// include: path.join(__dirname, 'src'),
				// use: {
				// 	loader: "eslint-loader",
				// 	options: {
	      //     failOnWarning: false,
	      //     failOnError: false
				// 	}
				// }
    	},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				include: path.join(__dirname, 'src'),
				use: {
					loader: "babel-loader"
				}
			},
      {
			  test: /\.(png|jpg|gif)$/,
			  use: [{
			    loader: 'url-loader',
          options: { limit: 10000, name: './images/[name].[ext]' }
			  }]
			},
			{
        test: /\.svg/,
        use: {
            loader: 'svg-url-loader'
        }
			},
			{
				test: /\.(sass|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
  },
	performance: {
		maxAssetSize: 400000000,
		maxEntrypointSize: 400000000,
		hints: 'warning'
	},
	plugins: plugins
}

module.exports = config
