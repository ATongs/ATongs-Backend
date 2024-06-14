FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=9000

# replace 'REDACTED' with corresponding value

# MODEL URL
ENV MODEL_URL=REDACTED

# GCS Bucket Image
ENV BUCKET_IMAGES=REDACTED

# GCP Project ID
ENV GCP_PROJECT_ID=REDACTED

# Google AI Studio API Key
ENV GOOGLE_API_KEY=REDACTED

EXPOSE 9000

CMD ["npm", "run", "start:prod"]
