
################################################################################
# Use node image for base image for all stages.
FROM node:24 AS dev

# Set working directory for all build stages.
# RUN npm install -g deno
# WORKDIR /home/node
################################################################################
# Create a stage for installing production dependencies.

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.yarn to speed up subsequent builds.
# Leverage bind mounts to package.json and yarn.lock to avoid having to copy them
# into this layer.

COPY  . ./
RUN  npm install
CMD ["npm", "run", "dev"]


FROM dev AS build

RUN  npm run build


FROM node:24-alpine

USER node
WORKDIR /app
RUN npm install undici

COPY --chown=node:node package.json ./
COPY --chown=node:node adapters ./adapters
COPY --chown=node:node public ./public

COPY --chown=node:node --from=dev node_modules ./node_modules
COPY --chown=node:node --from=build dist ./dist
COPY --chown=node:node --from=build server ./server

# Pay attention to set the correct origin and port for the application.
# This is used by the application to determine the origin of requests.
# If you don't set this, the application will default to http://localhost:3000
# If you set a wrong origin, the application may not work correctly, for example routeAction$ will not work
# ENV ORIGIN https://example.com


# Expose the port that the application listens on.
EXPOSE 3004

# Run the application.
CMD ["node", "server/entry.node-server.js"]