
################################################################################
# Use node image for base image for all stages.
FROM node:24 AS dev 

WORKDIR /app
COPY  . ./
RUN  npm i
CMD ["npm", "run", "dev"]

FROM dev as build

RUN  npm run build

FROM node:24-alpine

USER node
WORKDIR /app
RUN npm i undici


# COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app/dist ./dist
COPY --chown=node:node --from=build /app/server ./server

# Pay attention to set the correct origin and port for the application.
# This is used by the application to determine the origin of requests.
# If you don't set this, the application will default to http://localhost:3000
# If you set a wrong origin, the application may not work correctly, for example routeAction$ will not work
# ENV ORIGIN https://example.com


# Expose the port that the application listens on.
EXPOSE 3004

# Run the application.
CMD ["node", "server/entry.node-server.js"]