FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=9000

# replace 'REDACTED' with model url
ENV MODEL_URL=REDACTED

# GCS Bucket Image
ENV BUCKET_IMAGES=REDACTED

EXPOSE 9000

CMD ["npm", "run", "start:prod"]
