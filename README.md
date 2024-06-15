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
            "id": "0a4412c2-6600-42b3-8920-0b797c937300",
            "createdAt": "2024-06-15T02:59:48.396Z",
            "result": {
                "label": "biological",
                "probability": 1,
                "message": "Classified as: biological",
                "explanation": "Limbah biologis adalah segala limbah yang dihasilkan oleh organisme hidup. Ini mencakup limbah tumbuhan dan hewan, serta limbah mikroorganisme. Limbah biologis dapat terurai secara hayati atau tidak dapat terurai secara hayati. Sampah biodegradable dapat diuraikan oleh mikroorganisme menjadi zat yang tidak berbahaya, sedangkan sampah non biodegradable tidak dapat diuraikan dan dapat bertahan di lingkungan selama bertahun-tahun. Limbah biologis dapat menimbulkan sejumlah risiko lingkungan dan kesehatan, termasuk penyebaran penyakit, kontaminasi pasokan air, dan terciptanya kondisi yang tidak sedap dipandang dan menimbulkan bau.",
                "suggestion": "Pengomposan: Pengomposan adalah proses alami yang memecah bahan organik menjadi bahan pembenah tanah yang kaya nutrisi. Sampah biologis seperti sisa makanan, sisa-sisa pekarangan, dan pupuk kandang dapat dibuat kompos di rumah atau di fasilitas pengomposan komersial.\nPencernaan anaerobik: Pencernaan anaerobik adalah proses yang mengubah bahan organik menjadi biogas, sumber energi terbarukan. Biogas dapat digunakan untuk menghasilkan listrik, pemanas, atau bahan bakar kendaraan.\nHidrolisis enzimatik: Hidrolisis enzimatik adalah proses yang memecah bahan organik menjadi molekul yang lebih sederhana menggunakan enzim. Produk yang dihasilkan dapat digunakan sebagai pakan ternak, pupuk, atau biofuel.\nSel bahan bakar mikroba: Sel bahan bakar mikroba (MFC) adalah perangkat yang mengubah bahan organik menjadi listrik menggunakan mikroorganisme. MFC dapat digunakan untuk menghasilkan listrik dari air limbah, sisa makanan, atau sumber sampah organik lainnya."
            }
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
                "id": "050d6d29-ee3d-4829-b942-714613ce6fc2",
                "createdAt": "2024-06-14T06:51:40.798Z",
                "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/407acd52-910a-4603-abea-d56b4e629dac.jpg",
                "result": {
                    "label": "cardboard",
                    "probability": 0.9303997755050659,
                    "message": "Classified as: cardboard",
                    "explanation": "Limbah karton merupakan salah satu jenis limbah padat yang dihasilkan dari pembuangan kardus dan bahan kemasan lainnya. Karton merupakan bahan yang dapat didaur ulang, namun seringkali berakhir di tempat pembuangan sampah karena sering terkontaminasi dengan makanan dan limbah lainnya. Jika karton tidak didaur ulang, diperlukan waktu hingga 20 tahun untuk terurai di tempat pembuangan sampah. Selain itu, limbah karton dapat menarik hama dan hewan pengerat, serta melepaskan bahan kimia berbahaya ke lingkungan. Dengan mendaur ulang karton, kita dapat membantu mengurangi jumlah sampah yang dibuang ke tempat pembuangan sampah, dan juga membantu melindungi lingkungan.",
                    "suggestion": "1. Ratakan kotak karton. Ini akan membantu menghemat ruang dan memudahkan pengangkutan karton ke pusat daur ulang.\n2. Keluarkan semua komponen plastik atau logam dari karton. Bahan-bahan ini tidak dapat didaur ulang dengan karton.\n3. Tempatkan karton di tempat sampah atau wadah daur ulang. Sebagian besar masyarakat telah menyediakan tempat sampah atau wadah daur ulang untuk karton.\n4. Ikuti pedoman daur ulang di komunitas Anda. Setiap komunitas mungkin memiliki peraturan dan regulasi daur ulang yang berbeda, jadi penting untuk mengikuti pedoman khusus komunitas Anda."
                }
            },
            {
                "id": "05763091-eb67-473d-8f90-e90bf72a3142",
                "createdAt": "2024-06-13T19:04:33.975Z",
                "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/ffcb7bdf-6dd2-46cf-aaa5-0431e86bfe2a.jpg",
                "result": {
                    "label": "paper",
                    "probability": 0.6749331951141357,
                    "message": "Classified as: paper",
                    "explanation": "Limbah kertas merupakan masalah lingkungan yang besar. Diperkirakan lebih dari 100 juta ton kertas diproduksi setiap tahun di Amerika Serikat saja, dan sebagian besar berakhir di tempat pembuangan sampah. Produksi kertas memerlukan banyak energi dan sumber daya, dan juga dapat berkontribusi terhadap deforestasi. Jika kertas tidak didaur ulang, maka diperlukan waktu ratusan tahun untuk terurai. Banyak hal yang bisa dilakukan untuk mengurangi sampah kertas, seperti menggunakan kembali produk kertas, mendaur ulang kertas, dan memilih membeli produk yang berbahan kertas daur ulang.",
                    "suggestion": "* Bilas wadah makanan dan minuman sebelum didaur ulang. Ini akan membantu mencegah kontaminasi bahan daur ulang lainnya.\n* Ratakan kotak karton dan singkirkan semua komponen plastik atau logam. Ini akan membantu menghemat ruang dan memudahkan pemrosesan karton.\n* Tempatkan produk kertas di tempat sampah daur ulang yang telah ditentukan. Hal ini akan membantu memastikan bahwa bahan dikumpulkan dan didaur ulang dengan benar.\n* Hubungi pusat daur ulang setempat untuk mempelajari tentang persyaratan daur ulang tertentu. Komunitas yang berbeda mempunyai program daur ulang yang berbeda, jadi penting untuk mengetahui bahan apa yang diterima di wilayah Anda."
                }
            },
            {
                "id": "0a4412c2-6600-42b3-8920-0b797c937300",
                "createdAt": "2024-06-15T02:59:48.396Z",
                "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/82e3c9d7-fcc0-47fe-922f-012d4979632b.jpg",
                "result": {
                    "label": "biological",
                    "probability": 1,
                    "message": "Classified as: biological",
                    "explanation": "Limbah biologis adalah segala limbah yang dihasilkan oleh organisme hidup. Ini mencakup limbah tumbuhan dan hewan, serta limbah mikroorganisme. Limbah biologis dapat terurai secara hayati atau tidak dapat terurai secara hayati. Sampah biodegradable dapat diuraikan oleh mikroorganisme menjadi zat yang tidak berbahaya, sedangkan sampah non biodegradable tidak dapat diuraikan dan dapat bertahan di lingkungan selama bertahun-tahun. Limbah biologis dapat menimbulkan sejumlah risiko lingkungan dan kesehatan, termasuk penyebaran penyakit, kontaminasi pasokan air, dan terciptanya kondisi yang tidak sedap dipandang dan menimbulkan bau.",
                    "suggestion": "Pengomposan: Pengomposan adalah proses alami yang memecah bahan organik menjadi bahan pembenah tanah yang kaya nutrisi. Sampah biologis seperti sisa makanan, sisa-sisa pekarangan, dan pupuk kandang dapat dibuat kompos di rumah atau di fasilitas pengomposan komersial.\nPencernaan anaerobik: Pencernaan anaerobik adalah proses yang mengubah bahan organik menjadi biogas, sumber energi terbarukan. Biogas dapat digunakan untuk menghasilkan listrik, pemanas, atau bahan bakar kendaraan.\nHidrolisis enzimatik: Hidrolisis enzimatik adalah proses yang memecah bahan organik menjadi molekul yang lebih sederhana menggunakan enzim. Produk yang dihasilkan dapat digunakan sebagai pakan ternak, pupuk, atau biofuel.\nSel bahan bakar mikroba: Sel bahan bakar mikroba (MFC) adalah perangkat yang mengubah bahan organik menjadi listrik menggunakan mikroorganisme. MFC dapat digunakan untuk menghasilkan listrik dari air limbah, sisa makanan, atau sumber sampah organik lainnya."
                }
            },
            {
                "id": "19d6ac50-0294-44d2-acc0-209d2d973461",
                "createdAt": "2024-06-13T18:50:05.408Z",
                "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/96e273a1-7ca6-41aa-ae84-e57a30813ffd.jpg",
                "result": {
                    "label": "glass",
                    "probability": 0.9999856948852539,
                    "message": "Classified as: glass",
                    "explanation": "Limbah kaca adalah jenis limbah yang dihasilkan ketika kaca dibuang. Kaca adalah sumber daya yang tidak dapat diperbarui, jadi penting untuk mendaur ulangnya bila memungkinkan. Kaca dapat didaur ulang tanpa batas waktu tanpa kehilangan kualitasnya. Ketika kaca didaur ulang, kaca tersebut dilebur dan diubah menjadi produk kaca baru. Daur ulang kaca membantu melestarikan sumber daya alam, mengurangi emisi gas rumah kaca, dan menghemat energi.",
                    "suggestion": "1. Bilas stoples dan botol kaca sebelum didaur ulang.\n2. Keluarkan semua komponen logam atau plastik dari wadah kaca.\n3. Tempatkan stoples dan botol kaca di tempat sampah daur ulang.\n4. Kaca akan dikumpulkan dan diangkut ke fasilitas daur ulang.\n5. Di fasilitas daur ulang, kaca akan disortir berdasarkan jenis dan warna.\n6. Kaca tersebut akan dicairkan dan diubah menjadi produk kaca baru."
                }
            }
        ]
    }
  ```

</details>