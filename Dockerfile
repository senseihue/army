FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json .

RUN yarn install

RUN yarn build
FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./

CMD ["tail", "-f", "/dev/null"]

