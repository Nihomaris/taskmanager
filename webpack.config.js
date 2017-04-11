var ExtractTextPlugin = require('extract-text-webpack-plugin');
 
  plugins: [
    
  ]

module.exports = {
	context: __dirname + '/app', // дерриктория где хранится приложение
	entry: './app.js', //входящий файл
	output: {
		path: __dirname + '/public', //куда будут сохранятся обработанные файлы
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
						fallback: "style-loader",
						use: ["css-loader", "less-loader"]
					 })
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({filename: 'style.css'})
	]
}