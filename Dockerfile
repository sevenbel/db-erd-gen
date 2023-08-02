# Use a base image with Node.js pre-installed
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the TypeScript application with Vite
RUN npm run build

# Expose the port that the Vite development server is listening on (default: 3000)
EXPOSE 3000

# Set the entrypoint for the container
CMD ["npm", "run", "dev"]
