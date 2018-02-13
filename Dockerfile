from node:8-slim

env TopDogApp.options.database.url mongodb://localhost:2717/topdogs
EXPOSE 3000

WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm install

COPY tsconfig.json /usr/src/app/tsconfig.json
COPY ./src /usr/src/app/src
RUN npm run build

CMD ["npm", "start"]
