FROM node:16-alpine


RUN apk update
WORKDIR /app


COPY package*.json ./
COPY tsconfig.json ./

COPY . .



RUN yarn
RUN yarn run prebuild 
RUN yarn run build

EXPOSE 8080

CMD [ "node", "./dist/index.js" ]