FROM node:latest

WORKDIR /app

COPY package*.json ./

# RUN npm install

RUN npm ci 

COPY . .

RUN npm i -g vite

RUN npx vite build

EXPOSE 8000

CMD ["npm", "run", "dev"]