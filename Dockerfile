FROM node as build_client

# cant run parcel from /
WORKDIR /client 

COPY client/package.json .

RUN npm i 

COPY client .

RUN npm run build



FROM node as build_server

COPY server/package.json .

RUN npm i 



FROM node:alpine

WORKDIR /app

COPY --from=build_client /client/dist client/

COPY server/app.js server/

COPY --from=build_server node_modules server/node_modules

EXPOSE 80

CMD node server/app.js