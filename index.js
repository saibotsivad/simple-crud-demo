const paths = require('./libs/api-paths.js')
const argv = require('minimist')(process.argv.slice(2))

const port = JSON.parse(argv.ports)[0]

const express = require('express')

const app = express()

console.log('registering all paths...')

paths.forEach(api => {
	console.log(`	${api.request.toUpperCase()} ${api.path}`)
	app[api.request](api.path, api.control)
})

console.log(`starting the server on port ${port}`)

app.listen(port)
