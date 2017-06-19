const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const glob = require('glob')
const sh = require('shell-tag')
const mustache = require('mustache')
const argv = require('minimist')(process.argv.splice(2))

const template = read('./server/api/index.html')
const outputPath = './build/api'
const assetOutputPath = './build/api/assets'
const mainEntry = read('./server/api/index.js')
const dependencies = readJson('./server/api/dependencies.json')

const dependencyFileMap = {}
const templateModel = {
	title: 'API Demo - Simple Crud Demo',
	main: mainEntry
}

console.log('Beginning build...')

console.log('Copying files...')
mkdirp.sync(outputPath)
mkdirp.sync(assetOutputPath)
Object.keys(dependencies).map(key => {
	dependencyFileMap[key] = []
	dependencies[key].forEach(globbedFile => {
		glob.sync(globbedFile).forEach(file => {
			const filename = path.parse(file).base
			dependencyFileMap[key].push(filename)
			sh`cp ${file} ${assetOutputPath}`
		})
	})
})

const output = mustache.render(template, templateModel)

write(path.join(outputPath, 'index.html'), output)

console.log('Done!')

// ==========

function read(filename) {
	return fs.readFileSync(filename, { encoding: 'utf8' })
}

function write(filename, writeableData) {
	return fs.writeFileSync(filename, writeableData, { encoding: 'utf8' })
}

function readJson(filename) {
	const content = read(filename)
	return content && JSON.parse(content)
}

function die(message, exitStatus = 1) {
	console.log(message)
	process.exit(exitStatus)
}
