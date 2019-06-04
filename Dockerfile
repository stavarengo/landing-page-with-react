FROM node:10.16.0

ENV STA_APP_DIR=/root/app \
    STA_HTTP_PORT=3000 \
    NODE_ENV=production
ENV STA_HELPER_FUNCTIONS_FILE=$STA_APP_DIR/docker/helper-functions.sh

WORKDIR $STA_APP_DIR

COPY package.json "$STA_APP_DIR/package.json"
COPY package-lock.json "$STA_APP_DIR/package-lock.json"
COPY makeReactScriptGenerateBundleStatsAgain.js "$STA_APP_DIR/makeReactScriptGenerateBundleStatsAgain.js"

RUN cd "$STA_APP_DIR" && \
    NODE_ENV=development npm install

RUN cd "$STA_APP_DIR" && \
    node "$STA_APP_DIR/makeReactScriptGenerateBundleStatsAgain.js"

COPY ./ "$STA_APP_DIR"

RUN cd "$STA_APP_DIR" && \
    NODE_ENV=production GENERATE_SOURCEMAP=false npm run build

#RUN cd "$STA_APP_DIR" && \
#    NODE_ENV=production npm prune --production

COPY docker/entrypoint.sh /usr/local/bin

EXPOSE $STA_HTTP_PORT

ENTRYPOINT ["entrypoint.sh"]
