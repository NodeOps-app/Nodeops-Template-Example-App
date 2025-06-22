# Use Node.js 20 slim for smaller image size
FROM node:20-slim

WORKDIR /app

# Set build-time arguments for environment variables
ARG NEXT_PUBLIC_TEST="hello_world"
ENV NEXT_PUBLIC_TEST=${NEXT_PUBLIC_TEST}

# Copy package files first
COPY package.json ./

# Install dependencies
RUN npm install

# Copy source code (excluding node_modules)
COPY . .

# Build the application
RUN npm run build

EXPOSE 3000

# Use npm start instead of pnpm start for better compatibility
CMD ["npm", "start"] 