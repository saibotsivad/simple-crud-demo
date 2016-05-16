# simple-crud-demo

A simple CRUD app, used as a demo for some NGINX tools.

You install some stuff on your server, and then run the
NGINX tools to update things.

> Note: This is a project I'm working on that's mostly
> for my own use. My goal is to be able to really really
> quickly redeploy a site off Github, restarting the
> api and whatever all in one clean sweep.

## TODO: this project is still rough

* I want a single command like `npm run bump` that
	also grabs the stuff off Github and deploys in
	one nice and tidy step.
* This should run a `shutdown` before rebuilding.
* Obviously the express paths aren't doing anything,
	but I want to make them validate incoming data
	using JSON Schema, and stuff like that. Pretty
	simple stuff though, just a demo.
* This should have a better readme, so that you can
	know what to do with it, and how to set it up.

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
