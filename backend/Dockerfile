# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the backend application
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Command to run the backend application
CMD ["npm", "start"]