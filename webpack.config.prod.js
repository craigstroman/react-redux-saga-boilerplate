const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: {
	   app: path.join(__dirname, 'src/index.jsx')
	},

  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'bundle.js'
  },

	resolve: {
	  extensions: [
	    '.js','.jsx'
	  ]
	},

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /public/],
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ],
  },

	plugins: [
	  new webpack.DefinePlugin({
	    'process.env.NODE_ENV': JSON.stringify('production')
	  })
	]
};
