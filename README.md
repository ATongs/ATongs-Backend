# ATongs Backend

## Description
This repository is for the Backend side of the ATongs Application. The results will be an Endpoint URL that will be used when classifying waste in the ATongs App which is being developed by the Mobile Development Team as an ML Model classification API.

## API Requests & Responses

### (POST) - Classifying Image

**Endpoint :** `/classify`

**Request :**

```bash
curl -X POST http://localhost:9000/classify -H "Content-Type: multipart/form-data" -F "image=@biological-1.jpg"
```

**Response :**

<details>
  <summary>View Response</summary>
  
  ```
    {
      "status": "success",
      "message": "Model is classified successfully",
      "data": {
        "id": "f499550d-3c4a-4717-8b08-0e4ad116af30",
        "result": {
          "label": "biological",
          "probability": 1,
          "message": "Classified as: biological"
        },
        "createdAt": "2024-06-11T07:12:22.754Z"
      }
    }
  ```

</details>

<br>

### (GET) - Classified Histories

**Endpoint :** `/classify/histories`

**Request :**

```bash
curl -X GET http://localhost:9000/classify/histories -H "Content-Type: multipart/form-data"
```

**Response :**

<details>
  <summary>View Response</summary>

  ```
    {
      "status": "success",
      "message": "Classification histories fetched successfully",
      "data": [
        {
          "result": {
            "probability": 0.9999983310699463,
            "label": "glass",
            "message": "Classified as: glass"
          },
          "createdAt": "2024-06-11T07:15:07.373Z",
          "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/f1b257fc-0570-4440-849a-5b47dbf5aac1.jpg",
          "id": "9c34bc3a-4f90-4442-b5c6-dc07aa8de791"
        },
        {
          "result": {
            "probability": 0.5176808834075928,
            "label": "plastic",
            "message": "Classified as: plastic"
          },
          "createdAt": "2024-06-11T07:13:55.519Z",
          "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/44e56031-f883-470e-b59a-82b326702385.jpg",
          "id": "b1c6d175-e38c-4c3f-9355-ba5e25103d16"
        },
        {
          "result": {
            "probability": 1,
            "label": "biological",
            "message": "Classified as: biological"
          },
          "createdAt": "2024-06-11T07:12:22.754Z",
          "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/1cf18867-7e71-406a-bd53-84f7bda826f8.jpg",
          "id": "f499550d-3c4a-4717-8b08-0e4ad116af30"
        }
      ]
    }
  ```

</details>