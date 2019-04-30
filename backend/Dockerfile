FROM node:12.0.0-alpine

WORKDIR /app/backend

COPY package.json .
RUN npm install --quiet

COPY . .