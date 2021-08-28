FROM node:14-alpine as base

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . ./

EXPOSE 3001
CMD npm start
