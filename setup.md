# Deploy step

## 1. Enable Artifact Registry API
```bash
gcloud services enable artifactregistry.googleapis.com cloudbuild.googleapis.com run.googleapis.com
```

## 2. Create Repository Artifact Registry
```bash
gcloud artifacts repositories create capstone-backend --repository-format=docker --location=asia-southeast2 --async
```

## 3. Build Image in Artifact Registry
```bash
gcloud builds submit --tag asia-southeast2-docker.pkg.dev/PROJECT-ID/capstone-backend/atongs-backend:1.0.0
```

<!-- (Unused) gcloud run deploy atongs-backend --source . --port 9000 --allow-unauthenticated -->

## 4. Last step: Deploy (Use this command below instead)
```bash
gcloud run deploy atongs-backend \
    --image asia-southeast2-docker.pkg.dev/PROJECT-ID/capstone-backend/atongs-backend:1.0.0 \
    --allow-unauthenticated \
    --region=asia-southeast2
```