module.exports = {
	entry: "./mmoto.js",
	output: {
		path: __dirname,
		filename: "./js/bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.scss$/, loaders: ["style", "css", "sass"] },
			{ test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' }
		]
	}
};
