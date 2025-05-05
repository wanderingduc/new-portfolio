# Use a lightweight Node.js image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies without cache to ensure fresh packages
RUN npm install --no-cache

# Copy the rest of the application files
COPY . .

# Use a non-root user for security
# RUN addgroup -S appgroup && adduser -S appuser -G appgroup
# USER appuser

# Expose the port (if your app runs on a specific port)
EXPOSE 3000

# Set the command to start the application
CMD ["npm", "run", "dev"]