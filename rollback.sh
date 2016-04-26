#!/bin/bash

source .config.sh

cp -v .rollback.conf $NGINX_SITES_ENABLED_FOLDER/$SITE.conf

nginx -t
nginx -s reload
