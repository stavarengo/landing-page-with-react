#!/usr/bin/env bash

AT=$@
if [ ! "$AT" = "" ]; then
    $AT
    exit
fi

chmod +x "$STA_HELPER_FUNCTIONS_FILE"
source "$STA_HELPER_FUNCTIONS_FILE"

trap _sigint SIGINT SIGTERM SIGQUIT
trap _exit EXIT

cd "$STA_APP_DIR"
NODE_ENV=production npm run start-express-ssr-without-build-client-no-nodemon &

_waitAll
