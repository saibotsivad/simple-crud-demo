const mustache = require('mustache')
const fs = require('fs')
const path = require('path')
const argv = require('minimist')(process.argv)
const ports = require('./libs/reserved-numbers.js')

if (!argv.domain || !argv.spin || !argv.template) {
	console.error('required params (using --foo-bar): domain, spin, template')
	process.exit(1)
}

const template = fs.readFileSync(argv.template, { encoding: 'utf8' })

argv.ports = ports.get(argv.domain, argv.spin)
argv.listen = argv.listen || 80

const output = mustache.render(template, argv)

if (argv.output) {
	fs.writeFileSync(argv.output, output, { encoding: 'utf8' })
} else {
	process.stdout.write(output)
}
