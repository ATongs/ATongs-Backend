FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Copy the environment file e.g ('.env.prod' or '.env.dev')
COPY .env.prod ./

RUN npm install -g dotenv-cli

ENV PORT=9000

# Load environment variables from e.g ('.env.prod' or '.env.dev') file
RUN dotenv -e .env.prod -- echo "Loaded .env.prod variables"

# Export the corresponding variable values from ('.env.prod' or '.env.dev') file
RUN export MODEL_URL=$(dotenv -e .env.prod -- printenv MODEL_URL) && \
    export BUCKET_IMAGES=$(dotenv -e .env.prod -- printenv BUCKET_IMAGES) && \
    export GCP_PROJECT_ID=$(dotenv -e .env.prod -- printenv GCP_PROJECT_ID) && \
    echo "Environment variables set."

# Environment variables
ENV MODEL_URL=${MODEL_URL}
ENV BUCKET_IMAGES=${BUCKET_IMAGES}
ENV GCP_PROJECT_ID=${GCP_PROJECT_ID}
# Replace 'REDACTED' with Google AI Studio API KEY 
ENV GOOGLE_API_KEY=REDACTED

EXPOSE 9000

CMD ["npm", "run", "start:prod"]
