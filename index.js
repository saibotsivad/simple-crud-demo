const ports = require('./libs/reserved-numbers.js')
const paths = require('./libs/api-paths.js')
const config = require('./.config.json')
const port = ports.get(config.domain, config.spin)[0]

const express = require('express')

const app = express()

console.log('registering all paths...')

paths.forEach(api => {
	console.log(`	${api.request.toUpperCase()} ${api.path}`)
	app[api.request](api.path, api.control)
})

console.log(`starting the server:
	domain: ${config.domain}
	spin: ${config.spin}
	port: ${port}
`)

app.listen(port)
