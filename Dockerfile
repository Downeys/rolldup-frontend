FROM node:alpine3.15 AS build
WORKDIR /build

COPY package.json ./
COPY package-lock.json ./
RUN npm ci

COPY . ./
RUN npm run build

FROM nginx:alpine
COPY --from=build /build/build/ /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
COPY entrypoint.sh ./entrypoint.sh
CMD ["sh", "-c", "./entrypoint.sh"]
