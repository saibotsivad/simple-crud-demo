// TODO once reserved-numbers is a require-able module this can go away

const exec = require('child_process').execSync

module.exports = {
	get: (site, spin) => {
		if (!site || !spin) { throw 'site and spin required' }
		const portsString = exec(`reserved-numbers-cli get ${site}:${spin}`).toString()
		const ports = JSON.parse(portsString)
		if (!ports || ports.length <= 0) { throw `no ports reserved for ${site}:${spin}` }
		return ports
	},
	register: (site, spin, portsRequired) => {
		if (!site || !spin) { throw 'site and spin required' }
		return exec(`reserved-numbers-cli register ${site}:${spin} ${portsRequired}`)
	}
}
