const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = {
	app: path.join(process.cwd(), 'src/app.js')
}

const output = {
	path: path.join(__dirname, 'dist'),
	filename: 'bundle.[hash:6].min.js'
}

const plugins = [
	new webpack.DefinePlugin({
	  'process.env': {
	    NODE_ENV: JSON.stringify('production')
	  }
	}),
	new webpack.optimize.UglifyJsPlugin({mangle: false, compress: {warnings: false}}),
  new ExtractTextPlugin('bundle.[hash:6].css'), // creation of HTML files to serve your webpack bundles
	new HtmlWebpackPlugin({
		template: 'index-template.html'
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
	      include: path.join(__dirname, 'src'),
	      use: [{
	        loader: 'babel-loader'
	      }]
    	},
      {
			  test: /\.(png|jpg|gif)$/,
			  use: [{
			    loader: 'url-loader',
          options: { limit: 10000, name: './img/[name].[ext]' } // Convert images < 10k to base64 strings
			  }]
			},
			{
				test: /\.(sass|scss)$/,
				use: ExtractTextPlugin.extract({
			    fallback: 'style-loader',
			    use: [
			      'css-loader',
			      { loader: 'postcss-loader', options: { plugins: (loader) => [ require('autoprefixer')() ] } },
			      'sass-loader',
			    ]
			  })
			}
		]
  },
	plugins: plugins
}

module.exports = config;
