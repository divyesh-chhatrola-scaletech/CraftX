#!/bin/bash

# Configuration
IMAGE_NAME="craftx-website-new"
CONTAINER_NAME="craftx-website-new"
PORT=4003

echo "🚀 Starting deployment for $IMAGE_NAME..."

# Check current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "❌ Error: Not on main branch. Current branch is '$CURRENT_BRANCH'."
  exit 1
fi

echo "📥 Pulling latest changes from main..."
git pull origin main

if [ $? -ne 0 ]; then
  echo "❌ Error: git pull failed."
  exit 1
fi

# Check if docker is installed
if ! [ -x "$(command -v docker)" ]; then
  echo 'Error: docker is not installed.' >&2
  exit 1
fi

# Build the image with a temporary tag
echo "📦 Building new Docker image..."
docker build -t ${IMAGE_NAME}:new .

if [ $? -ne 0 ]; then
    echo "❌ Build failed. The old version is still running."
    exit 1
fi

# If build succeeded, we can proceed to swap
echo "✅ Build successful. Swapping containers..."

# Stop and remove existing container if it exists
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "🛑 Stopping existing container: $CONTAINER_NAME..."
    docker rm -f $CONTAINER_NAME
fi

# Tag the new image as the main one
docker tag ${IMAGE_NAME}:new ${IMAGE_NAME}:latest

# Run the new container
echo "🏃 Running new container: $CONTAINER_NAME on port $PORT..."
docker run -d --name $CONTAINER_NAME -p $PORT:$PORT ${IMAGE_NAME}:latest

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 App is running at http://localhost:$PORT"
else
    echo "❌ Deployment failed."
    exit 1
fi
