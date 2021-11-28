FROM node:17-alpine

RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server

RUN apk update && apk upgrade
RUN apk add git

COPY . /usr/src/server/
RUN npm install
RUN npm run prod

EXPOSE 3000
CMD [ "npm", "start" ]
