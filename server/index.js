const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const argv = require('minimist')(process.argv.slice(2))
const port = parseInt(argv.port, 10)
const config = require(argv.config)

const database = require('common/db')(config)

const paths = require('common/api')

const app = express()
app.use(bodyParser.json())

const static = path.join(__dirname, '../build')
console.log(`serving static files from ${static}`)
app.use(express.static(static))

console.log('registering all paths...')

paths({ database }).forEach(api => {
	app[api.request](api.path, api.control)
	console.log(`  ${api.request.toUpperCase()} ${api.path}`)
})

console.log(`starting the server on port ${port}`)

app.listen(port)
