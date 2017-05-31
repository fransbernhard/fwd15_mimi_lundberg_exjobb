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
	devtool: "cheap-eval-source-map",
  module: {
    rules: [
			{
	      test: /\.(js|jsx)$/,
	      include: path.join(__dirname, 'src'),
	      use: [{
	        loader: 'babel-loader'
	      }]
    	},
      {
			  test: /\.(png|jpg|gif)$/,
			  use: [{
			    loader: 'url-loader',
          options: { limit: 10000, name: './img/[name].[ext]' }
			  }]
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
	plugins: plugins
}

module.exports = config
