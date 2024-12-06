FROM node:lts-alpine
WORKDIR /app
# Add .dockerignore first to ensure node_modules aren't copied
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

# Start Next.js in development mode
CMD ["npm", "run", "dev"]
