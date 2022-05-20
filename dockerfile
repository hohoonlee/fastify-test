FROM node:16
WORKDIR /app

COPY package.json .
COPY src/ ./src/
COPY patches/ ./patches/

RUN yarn
RUN yarn global add pm2
RUN pm2 install pm2-logrotate

ENV NODE_ENV=development
ENV PORT=8080

#CMD ["pm2", "start", "./src/index.js"]
CMD ["yarn", "start"]