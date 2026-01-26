FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . . 

RUN yarn build

#FROM node:22-alpine

#WORKDIR /app

#COPY --from=builder /app/.output ./.output

EXPOSE 3000

ENTRYPOINT ["node", ".output/server/index.mjs"]
