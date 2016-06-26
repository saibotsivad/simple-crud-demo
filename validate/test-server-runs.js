const request = require('request')
const test = require('tape')

const argv = require('minimist')(process.argv.slice(2))
const port = parseInt(argv.port, 10)

const domain = 'localhost'
const username = 'mistertester'
const token = 'horse-battery-staple'

// test('that the server is running at all', t => {
// 	t.plan(1)
// 	request(`http://${domain}:${port}/`, (err, response) => {
// 		t.equal(response.statusCode, 200, 'landing page')
// 		t.end()
// 	})
// })

test('that the list of users is returned', t => {
	t.plan(1)
	request(`http://${domain}:${port}/user`, (err, response) => {
		t.equal(response.statusCode, 200, 'endpoint responds with 200 status')
		t.end()
	})
})

// test('should be able to create a user', t => {
// 	t.plan(1)
// 	request.put(`http://${domain}:${port}/user/${username}`, (err, response) => {
// 		t.equal(response.statusCode, 200, 'endpoint responds with 200 status')
// 		t.end()
// 	})
// })
