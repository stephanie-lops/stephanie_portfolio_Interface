# Etapa 1: build do app
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: servir com 'serve'
FROM node:18

RUN npm install -g serve
WORKDIR /app

COPY --from=build /app/build ./build

CMD ["serve", "-s", "build", "-l", "3000"]

