const CracoLessPlugin = require('craco-less')
const { resolve } = require('path')
const rewireBabelLoader = require('craco-babel-loader')
const theme = require('./src/theme')
const { realpathSync } = require('fs')

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: theme,
						javascriptEnabled: true,
					},
				},
			},
		},
		{
			plugin: rewireBabelLoader,
			options: {
				includes: [
				// On force un absolute path car c'est requis par babel-loader
				forceAbsolutePackage('node_modules/@planingo/ditto')
				],
			},
		}
	],
}

// https://www.npmjs.com/package/craco-babel-loader
function forceAbsolutePackage(relativePath) {
	const appDirectory = realpathSync(process.cwd())
	return resolve(appDirectory, relativePath)
}