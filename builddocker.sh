#!/bin/bash

# Build the Docker image
docker build -t my-node-app .

# Run the Docker container
docker run -p 3001:3001 my-node-app