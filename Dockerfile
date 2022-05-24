# base image
FROM node:16.13.0-alpine

# set working directory
WORKDIR /app

# `/app/node_modules/.bin`을 $PATH 에 추가
ENV PATH /node_modules/.bin:$PATH

# app dependencies, install 및 caching
COPY . .
RUN yarn
RUN yarn run build

CMD ["node", "./dist/main.js"]
