# simple-crud-demo

A simple CRUD app, used as a demo for some NGINX tools.

You install some stuff on your server, and then run the
NGINX tools to update things.

## setup

Install:

* nodejs
* update npm
* make a folder where you'll run things, like `/var/www/simplecrud.dev`
* clone the repo twice, like this:

	git clone https://github.com/tobiaslabs/simple-crud-demo.git fermion
	git clone https://github.com/tobiaslabs/simple-crud-demo.git boson

inside each repo, run the `setup.js` command, e.g.

	cd fermion
	node setup.js simplecrud.dev fermion /etc/nginx/sites-enabled
	cd ../boson
	node setup.js simplecrud.dev boson /etc/nginx/sites-enabled

## test it all

Check out the scripts in [packages.json](packages.json), but it's like this:

* `npm run test` : Run the module JS tests
* `npm run start` : Restart the server using [psy](https://www.npmjs.com/package/psy)
* `npm run validate` : Run some basic HTTP requests to make sure server is running
* `npm run deploy` : Generate and copy out the nginx config file and reload nginx
* `npm run rollback` : Rollback the nginx conf file to it's previous version

## normal use

You would use `git fetch` to grab the latest, then run

	npm run bump

This runs all the things, leaving you with production running whatever
is in this folder.

## license

All content published and released under the [Very Open License](http://veryopenlicense.com/).

<3
