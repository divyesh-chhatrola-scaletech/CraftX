# Use the official Node.js image as the base  
FROM node:20-alpine AS base

# Set the working directory inside the container  
WORKDIR /app  

# Copy package.json and package-lock.json to the container  
COPY package*.json ./  
COPY . .

FROM base AS prod-deps
RUN npm install --omit=dev --ignore-scripts

FROM base AS build 

# Install dependencies  
RUN npm install --ignore-scripts

# Build the Next.js app  
RUN npm run build  

FROM base 
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/.next /app/.next

# Expose the port the app will run on  
EXPOSE 4003
ENV PORT 4003

# Start the application
CMD ["npm", "start"] 