#Base image
FROM node:21

#Working directory
WORKDIR /usr/src/app

#Package and package-lock json files
COPY package*.json .

#Installing dependencies, ci: clean install
RUN npm ci

#Rest of frontend code
COPY . .

#Running server
CMD ["npm", "start"]