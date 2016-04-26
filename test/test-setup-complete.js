const test = require('tape')

const config = require('../.config.json')
const ports = require('../libs/reserved-numbers.js').get(config.domain, config.spin)

test('that the setup was run', t => {
	t.ok(ports, 'there should be ports')
	t.equal(ports.length, 1, 'there should just be the one')
	t.end()
})
