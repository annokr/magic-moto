module.exports = {
	entry: "./mmoto.js",
	output: {
		path: __dirname,
		filename: "./js/bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" }
		]
	}
};
