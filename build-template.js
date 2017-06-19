// node build-template.js --template=server/api/index.html --main=server/api/index.js --dependencies=server/api/dependencies.json --output=build/api

const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const glob = require('glob')
const sh = require('shell-tag')
const argv = require('minimist')(process.argv.splice(2))

const entryPoint = argv.main || die('Required entry point: --main=file.js')
const template = read(argv.template) || die('Required template: --template=file.html')
const outputPath = argv.output || die('Required output path: --output=build/path')
const dependencies = readJson(argv.dependencies) || die('Required dependencies JSON: --dependencies=file.json')

const assetOutputPath = path.join(outputPath, 'assets')
const dependencyFileMap = {}

console.log('Beginning build...')

console.log('Copying files...')
mkdirp.sync(outputPath)
mkdirp.sync(assetOutputPath)
Object.keys(dependencies).map(key => {
	const files = dependencies[key]
	files.forEach(globbedFile => {
		glob.sync(globbedFile).forEach(file => {
			const filename = path.parse(file).base
			dependencyFileMap[file] = filename
			sh`cp ${file} ${assetOutputPath}`
		})
	})
})

console.log(dependencyFileMap)

// ==========



function read(filename) {
	return fs.readFileSync(filename, { encoding: 'utf8' })
}

function readJson(filename) {
	const content = read(filename)
	return content && JSON.parse(content)
}

function die(message, exitStatus = 1) {
	console.log(message)
	process.exit(exitStatus)
}
