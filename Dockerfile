# Multi-stage build for Angular app
# ? Stage 1: Build the Angular app
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (clean install for production)
RUN npm ci

# Copy source code
COPY . .

# Build the Angular app for production
RUN npm run build

# ? Stage 2: Serve with nginx
FROM nginx:alpine

# Copy built app from previous stage
COPY --from=builder /app/dist/devsnippets-frontend /usr/share/nginx/html

# Copy custom nginx config (optional - we'll create this)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]