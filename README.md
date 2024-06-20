# ATongs Backend

## Table of Contents

- [ATongs Backend](#atongs-backend)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Tech Stacks](#tech-stacks)
  - [Cloud Infrastructure Diagram](#cloud-infrastructure-diagram)
  - [Application Flow](#application-flow)
  - [API Documentation](#api-documentation)
  - [Deploy on GCP](#deploy-on-gcp)
  - [Running on Localhost](#running-on-localhost)
    - [Using current environment (Recommended)](#using-current-environment-recommended)
    - [Using Dockerfile (Optional)](#using-dockerfile-optional)
    - [Using Docker Compose (Optional)](#using-docker-compose-optional)

## Description
This repository is for the Backend side of the ATongs Application. The results will be an Endpoint URL that will be used when classifying waste in the ATongs App which will be consumed by the Mobile Development Team as an ML Model classification API.

## Tech Stacks

![ATongs Tech Stacks](assets/architecture/atongs-tech-stacks.png)

## Cloud Infrastructure Diagram

![ATongs Infrastructure Diagram](assets/architecture/atongs-infrastructure-diagram.gif)

## Application Flow

![ATongs Application Flow](assets/architecture/atongs-application-flow.gif)

## API Documentation

Check ATongs API's Postman Documentation here
- [Postman Documentation](https://documenter.getpostman.com/view/24299358/2sA3XSB1Ut)

Also check API Testing Example
- [API Testing Example](testing-api.md)

## Deploy on GCP

Follow this [steps](setup.md)

## Running on Localhost

Clone the repository

```bash
git clone https://github.com/ATongs/ATongs-Backend.git
```

### Using current environment (Recommended)

1. Install dependencies

```bash
cd ATongs-Backend

npm install
```

2. Go to `src/services/config.js` or [config.js](src/services/config.js#L7-L8) and change this 2 line

Un-comment the Local Environment and commented out the Deployed Environment, then replace the `REDACTED` with the value of actual `API_KEY`, like this

```js
// const API_KEY = process.env.GOOGLE_API_KEY; // Deployed Environment
const API_KEY = 'REDACTED'; // Local environment
```

3. Run

```bash
npm run start:dev
```

### Using Dockerfile (Optional)

1. Build Docker Image 

```bash
docker build -t <image name> .
```

Example: 

```bash
docker build -t atongs-backend .
```

2. Inspect the image that already builded

```bash
docker images | grep "<image-name>"
```

Example: 

```bash
$ docker images | grep "atongs-backend"
atongs-backend                        latest          80b285313e1c   13 minutes ago   2.07GB
```

3. Run the container in Detached Mode

```bash
docker run -d -p 9000:9000 --name <container-name> <image-name>
```

Example:

```bash
docker run -d -p 9000:9000 --name atongs-backend atongs-backend
```

4. Check the container if it's already running 

```bash
$ docker ps
CONTAINER ID   IMAGE            COMMAND                  CREATED          STATUS          PORTS                                       NAMES
f8c8aebf2098   atongs-backend   "docker-entrypoint.s…"   15 minutes ago   Up 15 minutes   0.0.0.0:9000->9000/tcp, :::9000->9000/tcp   atongs-backend
```


### Using Docker Compose (Optional)

1. Run docker compose up, this will build in detach mode

```bash
docker compose up -d --build
```

2. Check the container if it's already running 

```bash
$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                                       NAMES
7d6fc6bced3a   node:20   "docker-entrypoint.s…"   3 minutes ago   Up 3 minutes   0.0.0.0:9000->9000/tcp, :::9000->9000/tcp   atongs-backend-app-1
```

3.  Stop the container
```bash
docker compose down
```