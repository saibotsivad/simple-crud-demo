#!/bin/bash

source .config.sh

if [ -f .rollback.conf ]; then
	echo "prod nginx conf already exists: .rollback.conf"
	echo "delete it before deploying"
	exit 1
fi

echo "save existing for rollback"
cp -v $NGINX_FOLDER/$DOMAIN.conf .rollback.conf

echo "generate nginx conf file"
node generate-nginx.js \
	--domain=$DOMAIN \
	--spin=$SPIN \
	--template=nginx.conf \
	--output=$NGINX_FOLDER/$DOMAIN.conf

nginx -t
nginx -s reload
