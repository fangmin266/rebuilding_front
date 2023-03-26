#Base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application to the working directory
COPY . .

# Build the React application
RUN npm run build

# Set the environment variable
ENV NODE_ENV production

# Expose the port on which the application will run
EXPOSE 3000

# Start the application
CMD ["npm", "start"]