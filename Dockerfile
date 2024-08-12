# Use an official Node.js image as the base
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Install Vite globally
RUN npm install -g vite

# Copy the rest of your application code
COPY . .

# Expose the port that the application listens on
EXPOSE 5173

# Command to run your application
CMD ["npm", "run", "dev"]

