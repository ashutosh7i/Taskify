#!/bin/bash

# Start MongoDB container
docker run -d -p 27017:27017 --name mongodb mongo

# Wait for MongoDB to start
echo "Waiting for MongoDB to start..."
sleep 10

# Build Docker image for Node.js app
docker build -t my-node-app .

# Run Node.js Express server in a Docker container
docker run -d -p 3000:3000 --name my-node-container --link mongodb my-node-app
