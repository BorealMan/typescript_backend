FROM node

COPY / /app

WORKDIR /app

RUN apt update && apt upgrade -y

RUN apt install npm -y

RUN npm install 

RUN npm install -g typescript

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]

