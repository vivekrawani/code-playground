FROM node:16-alpine

WORKDIR /app

COPY package*  .
RUN npm install

COPY prisma ./prisma
RUN npx prisma generate

COPY . .
RUN npm run build


EXPOSE 3000

CMD ["node", "build/index.js"]