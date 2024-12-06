# syntax=docker/dockerfile:1

FROM node:lts-alpine
WORKDIR /web
# Add .dockerignore first to ensure node_modules aren't copied
COPY package*.json ./
RUN npm install --development
COPY . .
EXPOSE 3000
CMD ["node", "src/index.js"]
