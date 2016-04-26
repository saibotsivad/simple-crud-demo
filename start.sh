#!/bin/bash

source .config.sh

psy stop $SITE:$SPIN

psy start -n $SITE:$SPIN -- node index.js --site=$SITE --spin=$SPIN
