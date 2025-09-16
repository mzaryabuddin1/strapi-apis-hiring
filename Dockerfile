# Base Node.js image
FROM node:18.20.5-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build Strapi (optional if you’re using TypeScript or need build step)
# RUN npm run build

# Expose default Strapi port
EXPOSE 1337

# Run Strapi
CMD ["npm", "run", "develop"]
