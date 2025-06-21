# Use Node.js 20 slim for smaller image size
FROM node:20-slim

WORKDIR /app

# Copy package files first
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN npm install -g pnpm && pnpm install

# Copy source code (excluding node_modules)
COPY . .

# Build the application
RUN pnpm run build

EXPOSE 3000

# Use npm start instead of pnpm start for better compatibility
CMD ["npm", "start"] 