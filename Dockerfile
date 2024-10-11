FROM node:20-alpine

WORKDIR /home/app

COPY . /home/app

RUN npm install

EXPOSE 3000

CMD ["node", "/home/app/app.js"]
