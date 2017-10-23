const webpack = require("webpack"),
	path  = require("path")

const DEV = path.resolve(__dirname, "dev")
const OUTPUT = path.resolve(__dirname, "output")

const config = {
	entry: DEV + "/index.jsx",
	output: {
		path: OUTPUT,
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			include: DEV,
			loader: "babel-loader",
		}]
	}
}
module.exports = config
