FROM node:16.16.0-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000 $PORT

CMD ["npm", "run", "start:dev"]
