FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install

ENV FAST=somesecertvalue

EXPOSE 3000

CMD ["node", "index.js"]

