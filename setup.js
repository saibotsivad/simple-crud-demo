const fs = require('fs')
const ports = require('./libs/reserved-numbers.js')

const domain = process.argv[2]
const spin = process.argv[3]
const nginxFolder = process.argv[4]
const portsRequired = 1

const message = `
use like: node setup.js [domain] [spin] [nginx folder]
allowed spins: boson, fermion
when running setup make sure to delete '.config.json' file
nginx folder is probably one of these:
  /usr/local/etc/nginx/sites-enabled
  /etc/nginx/sites-enabled
`

if (!domain || !spin || !nginxFolder || (spin !== 'boson' && spin !== 'fermion')) {
	console.log(message)
	process.exit(1)
}

ports.register(domain, spin, portsRequired)

const output = JSON.stringify({ domain, spin, nginxFolder }, undefined, 2)

fs.writeFileSync('.config.json', output, { encoding: 'utf8' })

const shellConfig = `
DOMAIN=${domain}
SPIN=${spin}
NGINX_FOLDER=${nginxFolder}
`

fs.writeFileSync('.config.sh', shellConfig, { encoding: 'utf8' })
