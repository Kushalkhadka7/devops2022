FROM node:16 AS builder

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

COPY . .

RUN yarn 

RUN yarn build

# Run react-app in nginx server.
FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]