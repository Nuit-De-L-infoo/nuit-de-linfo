FROM node:lts-alpine
WORKDIR /app
# Add .dockerignore first to ensure node_modules aren't copied
COPY package*.json ./
RUN npm install
COPY . .

# Build the Next.js application
RUN npm run build

EXPOSE 3000

# Start Next.js in production mode
CMD ["npm", "run", "start"]
