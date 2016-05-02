const request = require('request')
const test = require('tape')

const argv = require('minimist')(process.argv.slice(2))
const port = JSON.parse(argv.ports)[0]

const domain = 'localhost'

test('that the server is running at all', t => {
	t.plan(1)
	request(`http://${domain}:${port}/`, (err, response) => {
		t.equal(response.statusCode, 404, 'unsupported endpoint')
		t.end()
	})
})

test('that the list of users is returned', t => {
	t.plan(1)
	request(`http://${domain}:${port}/user`, (err, response) => {
		t.equal(response.statusCode, 200, 'endpoint responds with 200 status')
		t.end()
	})
})
