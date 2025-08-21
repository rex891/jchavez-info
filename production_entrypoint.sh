#! /bin/sh

npm run drizzle:generate
npm run drizzle:migrate

node server/entry.node-server.js