# ATongs Backend

## Description
This repository is for the Backend side of the ATongs Application. The results will be an Endpoint URL that will be used when classifying waste in the ATongs App which is being developed by the Mobile Development Team as an ML Model classification API.

## API Requests & Responses


**Request :** (POST) - Classifying Image

```bash
curl -X POST http://localhost:9000/classify -H "Content-Type: multipart/form-data" -F "image=@biological-1.jpg"
```

**Response :** (POST) - Classifying Image

<details>
  <summary>View Response</summary>
  
  ```
    {
      "status": "success",
      "message": "Model is classified successfully",
      "data": {
        "id": "6c0df7b3-f48d-49b5-847f-d4655cf5e06f",
        "result": {
          "label": "biological",
          "probability": 1,
          "message": "Valid: biological 100%"
        },
        "createdAt": "2024-06-09T10:24:12.221Z"
      }
    }
  ```

</details>

<br>
<hr>
<br>

**Request :** (GET) - Classified Histories

```bash
curl -X GET http://localhost:9000/classify/histories -H "Content-Type: multipart/form-data"
```

**Response :** (GET) - Classified Histories

<details>
  <summary>View Response</summary>

  ```
    {
      "status": "success",
      "message": "Classification histories fetched successfully",
      "data": [
        {
          "result": {
            "probability": 1,
            "label": "biological",
            "message": "Valid: biological 100%"
          },
          "createdAt": "2024-06-09T10:24:12.221Z",
          "imageUrl": "https://storage.googleapis.com/atongs_classified_images/images/8d43463e-468c-4096-b657-aabc3ed5bf43.jpg",
          "id": "6c0df7b3-f48d-49b5-847f-d4655cf5e06f"
        },
        {
          "result": {
            "probability": 0.5176808834075928,
            "label": "plastic",
            "message": "Valid: plastic 100%"
          },
          "createdAt": "2024-06-09T10:27:54.979Z",
          "imageUrl": "https://storage.googleapis.com/atongs_classified_images/images/0eaf9624-3fcb-4b29-8265-0cff88a1920d.jpg",
          "id": "6cbb1816-fe9d-4215-a4f0-bc642e66bfc3"
        },
        {
          "result": {
            "probability": 0.9999983310699463,
            "label": "glass",
            "message": "Valid: glass 100%"
          },
          "createdAt": "2024-06-09T10:26:02.424Z",
          "imageUrl": "https://storage.googleapis.com/atongs_classified_images/images/a9b77922-ea6a-42b9-a160-ee065c335154.jpg",
          "id": "87116014-6245-4e9d-b749-7c09b814c65d"
        }
      ]
    }
  ```

</details>