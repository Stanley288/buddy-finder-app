FROM node:alpine

# Create app directory
RUN mkdir -p /app/
WORKDIR /app/

# Install app dependencies
COPY package.json yarn.lock /app/
RUN yarn

# Build production
RUN npm run clean
RUN npm run build

# Serve production
CMD npm run serve

# bundle app source code
COPY . /app

EXPOSE 8080

HEALTHCHECK CMD curl --fail http://localhost:8080/ || exit 1
