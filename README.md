# ATongs Backend

## Description
This repository is for the Backend side of the ATongs Application. The results will be an Endpoint URL that will be used when predicting waste in the ATongs App which is being developed by the Mobile Development Team as an ML Model prediction API.

# Request

```bash
curl -X POST http://url-endpoint/predict -H "Content-Type: multipart/form-data" -F "image=@trash-bag.jpg"
```

## Response API

```
{
  "status": "success",
  "message": "Model is predicted successfully",
  "data": {
    "id": "641f00e4-1f7e-4401-801a-035dfbdf2578",
    "result": [
      {
        "label": "clothes",
        "probability": 0.9999936819076538
      },
      {
        "label": "paper",
        "probability": 0.000006061812655389076
      },
      {
        "label": "cardboard",
        "probability": 2.8072204827367386e-7
      }
    ],
    "createdAt": "2024-06-06T04:34:27.606Z"
  }
}
```