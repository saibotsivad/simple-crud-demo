# simple-crud-demo

A simple CRUD app, used as a demo for some NGINX tools.

You install some stuff on your server, and then run the
NGINX tools to update things.

## setup

Install:

* nodejs
* update npm
* install these: `npm install -g reserved-numbers-cli psy`
* on your path (e.g. `~/.profile` or `~/.bashrc` or whatever) set
	the environment variable `NGINX_SITES_ENABLED_FOLDER` to wherever
	your folder is, probably like `/usr/local/etc/nginx/sites-enabled`
* make a folder where you'll run things, like `/var/www/simplecrud.dev`
* clone the repo twice, like this:

	git clone https://github.com/tobiaslabs/simple-crud-demo.git fermion
	git clone https://github.com/tobiaslabs/simple-crud-demo.git boson

inside each repo, run the setup script `./setup.sh SPIN` e.g.

	cd fermion
	./setup.sh fermion
	cd ../boson
	./setup.sh boson

## deploy

Run the command `npm run deploy`

It runs tests, starts the API, tests that the API is
working, and updates and reloads the NGINX conf file.

## rollback

If the deployed API 