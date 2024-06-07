# ATongs Backend

## Description
This repository is for the Backend side of the ATongs Application. The results will be an Endpoint URL that will be used when classifying waste in the ATongs App which is being developed by the Mobile Development Team as an ML Model classification API.

## API Requests & Responses


**Request :** (POST) - Classifying Image

```bash
curl -X POST http://url-endpoint/classify -H "Content-Type: multipart/form-data" -F "image=@battery.jpg"
```

**Response :** (POST) - Classifying Image

<details>
  <summary>View Response</summary>
  
  ```
  {
    "status": "success",
    "message": "Model is classified successfully",
    "data": {
      "id": "2e7bf7b4-8b85-48aa-8b81-d781f9d43868",
      "result": [
        {
          "label": "plastic",
          "probability": 0.8748536705970764
        },
        {
          "label": "white-glass",
          "probability": 0.12288793176412582
        },
        {
          "label": "paper",
          "probability": 0.0014800921780988574
        }
      ],
      "createdAt": "2024-06-07T01:35:23.788Z"
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
        "result": [
          {
            "probability": 0.8748536705970764,
            "label": "plastic"
          },
          {
            "probability": 0.12288793176412582,
            "label": "white-glass"
          },
          {
            "probability": 0.0014800921780988574,
            "label": "paper"
          }
        ],
        "createdAt": "2024-06-07T01:35:23.788Z",
        "id": "2e7bf7b4-8b85-48aa-8b81-d781f9d43868"
      },
      {
        "result": [
          {
            "probability": 0.9983554482460022,
            "label": "plastic"
          },
          {
            "probability": 0.0011787937255576253,
            "label": "white-glass"
          },
          {
            "probability": 0.0003602729120757431,
            "label": "paper"
          }
        ],
        "createdAt": "2024-06-07T01:33:47.641Z",
        "id": "516d46db-dba9-4f51-84ec-6fc1929617a4"
      },
      {
        "result": [
          {
            "probability": 0.9983554482460022,
            "label": "plastic"
          },
          {
            "probability": 0.0011787937255576253,
            "label": "white-glass"
          },
          {
            "probability": 0.0003602729120757431,
            "label": "paper"
          }
        ],
        "createdAt": "2024-06-07T01:27:27.810Z",
        "id": "e2249545-d2ad-4301-986b-ddfd33ec7ec5"
      }
    ]
  }
  ```

</details>