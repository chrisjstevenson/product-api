FROM node:9.11.1

# Avoid cert errors
RUN npm config set strict-ssl false

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN yarn

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080

ENTRYPOINT ["yarn", "start"]