# ATongs Backend

## Description
This repository is for the Backend side of the ATongs Application. The results will be an Endpoint URL that will be used when classifying waste in the ATongs App which will be consumed by the Mobile Development Team as an ML Model classification API.

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

<br>

### (GET) - Filter Classified Histories

**Endpoints :** 

- `/classify/histories/filter?range=today`
- `/classify/histories/filter?range=yesterday`
- `/classify/histories/filter?range=week`
- `/classify/histories/filter?range=month`

**Example Request:**

```bash
curl -X GET http://localhost:9000/classify/histories/filter?range=week -H "Content-Type: multipart/form-data"
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
                "id": "028b7d1e-c31c-4d18-992f-0b1c97f14d07",
                "createdAt": "2024-06-18T13:22:06.952Z",
                "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/25a1099e-2f17-4580-b336-a297c0cdec70.jpg",
                "result": {
                    "label": "glass",
                    "probability": 0.5613375306129456,
                    "message": "Classified as: glass",
                    "explanation": "Limbah kaca merupakan salah satu jenis limbah padat yang terbuat dari bahan kaca. Ini dapat ditemukan di berbagai tempat, termasuk rumah, bisnis, dan tempat pembuangan sampah. Limbah kaca dapat didaur ulang atau dibuang ke tempat pembuangan sampah. Ketika kaca didaur ulang, kaca tersebut dilebur dan diubah menjadi produk kaca baru. Kaca yang dibuang ke tempat pembuangan sampah membutuhkan waktu ratusan tahun untuk terurai.",
                    "suggestion": "* Bilas wadah kaca sebelum didaur ulang. Hal ini membantu mencegah kontaminasi bahan daur ulang lainnya.\n* Tempatkan wadah kaca di tempat sampah daur ulang yang telah ditentukan. Tidak semua wadah kaca dapat didaur ulang, jadi pastikan untuk menghubungi pusat daur ulang setempat untuk mengetahui bahan apa yang dapat diterima.\n* Ratakan botol dan stoples kaca untuk memperkecil volumenya. Hal ini membantu menghemat ruang dan mempermudah pengangkutan kaca ke fasilitas daur ulang.\n* Jangan masukkan kaca ke dalam kantong plastik sebelum didaur ulang. Hal ini dapat menyebabkan kantong robek, sehingga dapat mencemari bahan daur ulang lainnya."
                }
            },
            {
                "id": "15f07161-5fc3-47d0-9f6d-114fcb1319bb",
                "createdAt": "2024-06-18T13:21:59.214Z",
                "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/4b4da444-d0f0-4886-a342-ca7744357409.jpg",
                "result": {
                    "label": "glass",
                    "probability": 0.5610167384147644,
                    "message": "Classified as: glass",
                    "explanation": "Limbah kaca merupakan salah satu jenis limbah padat yang terbuat dari bahan kaca. Sumbernya bisa bermacam-macam, seperti pecahan gelas, botol, dan stoples. Limbah kaca sering kali dibuang ke tempat pembuangan sampah karena membutuhkan waktu ratusan tahun untuk terurai. Namun, kaca juga dapat didaur ulang, sehingga merupakan pilihan yang lebih ramah lingkungan. Ketika kaca didaur ulang, kaca tersebut dilebur dan diubah menjadi produk kaca baru. Proses ini menghemat energi dan mengurangi kebutuhan bahan baku. Mendaur ulang kaca juga membantu menjauhkannya dari tempat pembuangan sampah, karena dapat mencemari lingkungan.",
                    "suggestion": "Cara mendaur ulang sampah kaca\n\n1. Bilas wadah makanan dan minuman sebelum memasukkannya ke tempat sampah daur ulang.\n2. Lepaskan tutup atau penutup logam atau plastik dan masukkan ke dalam tempat sampah daur ulang.\n3. Hancurkan botol dan stoples kaca menjadi potongan-potongan kecil untuk menghemat ruang di tempat sampah daur ulang.\n4. Tempatkan kaca di tempat sampah atau wadah daur ulang yang telah ditentukan.\n5. Hubungi pusat daur ulang setempat untuk mengetahui jenis kaca apa yang diterima."
                }
            },
            {
                "id": "172ad3bb-6db7-41af-9779-67d5aaae0ea9",
                "createdAt": "2024-06-18T02:52:25.823Z",
                "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/d1fa7cce-0805-4ff5-acbc-c50243b46b0a.jpg",
                "result": {
                    "label": "biological",
                    "probability": 1,
                    "message": "Classified as: biological",
                    "explanation": "Limbah biologis adalah limbah yang berasal dari organisme hidup. Ini termasuk sisa makanan, kotoran hewan, dan bahan tanaman. Limbah biologis dapat diuraikan oleh bakteri dan mikroorganisme lainnya, yang mengubahnya menjadi nutrisi yang dapat digunakan oleh tanaman. Namun, jika limbah biologis tidak dibuang dengan benar, hal ini dapat menimbulkan sejumlah masalah, seperti menarik hama, mencemari sumber air, dan menyebarkan penyakit.",
                    "suggestion": "* Kompos sisa makanan dan sampah pekarangan.\n* Sumbangkan obat-obatan yang tidak terpakai atau kadaluwarsa ke apotek atau rumah sakit setempat.\n* Daur ulang botol dan stoples kaca kosong.\n* Daur ulang wadah dan botol makanan plastik.\n* Daur ulang produk kertas.\n* Sumbangkan pakaian bekas dan barang-barang rumah tangga ke toko barang bekas setempat."
                }
            },
            {
                "id": "25812456-f5fe-40d7-a729-7b495b3050ed",
                "createdAt": "2024-06-18T05:38:38.228Z",
                "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/bafc2a31-e10b-4cce-af06-58e143c87e07.jpg",
                "result": {
                    "label": "paper",
                    "probability": 0.7787671089172363,
                    "message": "Classified as: paper",
                    "explanation": "Limbah kertas merupakan masalah lingkungan yang besar. Diperkirakan lebih dari 100 juta ton kertas diproduksi setiap tahunnya, dan sebagian besarnya berakhir di tempat pembuangan sampah. Produksi kertas membutuhkan banyak sumber daya, termasuk pohon, air, dan energi. Ini juga menghasilkan polusi udara dan gas rumah kaca. Ketika kertas berakhir di tempat pembuangan sampah, diperlukan waktu ratusan tahun untuk terurai. Limbah kertas dapat dikurangi dengan mendaur ulang, membuat kompos, dan menggunakan kembali produk kertas.",
                    "suggestion": "Cara mendaur ulang sampah kertas:\n\n1. Keluarkan semua bahan selain kertas, seperti plastik, logam, atau makanan.\n2. Sobek atau sobek kertas menjadi potongan-potongan kecil agar lebih mudah diolah.\n3. Tempatkan kertas di tempat sampah atau wadah daur ulang.\n4. Hubungi pusat daur ulang setempat untuk mengetahui jenis kertas apa yang diterima."
                }
            },
            {
                "id": "2c33c2dd-5e74-47ae-84f2-aa245e31b1e5",
                "createdAt": "2024-06-18T13:22:04.159Z",
                "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/8362076c-ef0e-4fa4-b680-09938357d4ec.jpg",
                "result": {
                    "label": "glass",
                    "probability": 0.5613375306129456,
                    "message": "Classified as: glass",
                    "explanation": "Limbah kaca merupakan salah satu jenis limbah padat yang terbuat dari bahan kaca. Ini bisa berupa pasca-konsumen atau pasca-industri. Limbah kaca pasca konsumen dihasilkan dari rumah tangga dan dunia usaha, sedangkan limbah kaca pasca industri dihasilkan dari proses manufaktur. Limbah kaca dapat didaur ulang untuk menghasilkan produk kaca baru, atau dapat dibuang ke tempat pembuangan sampah. Daur ulang kaca membantu melestarikan sumber daya alam dan mengurangi emisi gas rumah kaca.",
                    "suggestion": "* Bilas botol dan stoples kaca sebelum didaur ulang.\n* Lepaskan tutup atau tutup logam atau plastik.\n* Tempatkan botol kaca dan stoples di tempat sampah daur ulang.\n* Kaca dapat didaur ulang menjadi produk kaca baru."
                }
            },
            {
                "id": "2cf86a84-ecfd-4efc-804d-b3b60fd484df",
                "createdAt": "2024-06-18T13:21:45.231Z",
                "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/d4f79a7d-ef1d-4dc9-9a82-8cf0fedd7641.jpg",
                "result": {
                    "label": "glass",
                    "probability": 0.5608872175216675,
                    "message": "Classified as: glass",
                    "explanation": "Kaca merupakan salah satu jenis sampah yang dapat didaur ulang. Itu terbuat dari pasir, soda ash, dan kapur. Ketika kaca didaur ulang, kaca tersebut dilebur dan diubah menjadi produk kaca baru. Daur ulang kaca membantu melestarikan sumber daya alam dan mengurangi polusi.",
                    "suggestion": "1. Bilas wadah kaca sebelum didaur ulang.\n2. Tempatkan wadah kaca di tempat sampah daur ulang yang telah ditentukan.\n3. Kaca dikumpulkan dan diangkut ke fasilitas daur ulang.\n4. Kaca disortir berdasarkan warna dan jenis.\n5. Kaca dilebur dan dibentuk kembali menjadi produk kaca baru."
                }
            },
            {
                "id": "2de65e4e-16af-4008-a0b6-282884d04309",
                "createdAt": "2024-06-17T12:07:02.399Z",
                "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/b9cff79a-32c6-42b1-9f39-2f390fcc08f2.jpg",
                "result": {
                    "label": "metal",
                    "probability": 0.9999997615814209,
                    "message": "Classified as: metal",
                    "explanation": "Limbah logam adalah jenis limbah padat yang terdiri dari produk logam yang dibuang. Hal ini dapat berasal dari berbagai sumber, termasuk manufaktur, konstruksi, dan produk konsumen. Limbah logam dapat menjadi masalah lingkungan yang besar, karena dapat mencemari tanah dan air, serta dapat menimbulkan bahaya kebakaran. Namun limbah logam juga dapat menjadi sumber daya yang berharga karena dapat didaur ulang dan digunakan kembali. Mendaur ulang limbah logam membantu melestarikan sumber daya alam, mengurangi kebutuhan penambangan, dan membantu menurunkan emisi gas rumah kaca.",
                    "suggestion": "* Pisahkan sampah logam dari sampah jenis lainnya. Hal ini dapat dilakukan dengan menempatkan benda-benda logam di tempat sampah atau wadah daur ulang yang telah ditentukan.\n* Bersihkan benda logam sebelum mendaur ulangnya. Ini akan membantu menghilangkan kotoran, minyak, atau kontaminan lain yang dapat mengganggu proses daur ulang.\n* Ratakan benda logam jika memungkinkan. Ini akan membantu mengurangi jumlah ruang yang digunakan di tempat sampah atau wadah daur ulang.\n* Tempatkan benda logam di tempat sampah atau wadah daur ulang. Pastikan tempat sampah atau wadah diberi tanda yang jelas untuk daur ulang logam.\n* Bawa barang daur ulang Anda ke pusat daur ulang atau lokasi pengantaran. Sebagian besar komunitas memiliki pusat daur ulang atau lokasi pengantaran tempat Anda dapat mengambil bahan daur ulang."
                }
            },
            {
                "id": "39a04b6f-9722-4aae-9130-78a6d09b8564",
                "createdAt": "2024-06-18T03:07:38.527Z",
                "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/3b5a06f2-2624-4888-bc8b-f688bea75243.jpg",
                "result": {
                    "label": "metal",
                    "probability": 0.9999997615814209,
                    "message": "Classified as: metal",
                    "explanation": "Limbah logam merupakan salah satu jenis limbah yang terbuat dari bahan logam. Hal ini dapat berasal dari berbagai sumber, seperti manufaktur, konstruksi, dan pembongkaran. Limbah logam dapat didaur ulang atau dibuang ke tempat pembuangan sampah. Mendaur ulang limbah logam membantu melestarikan sumber daya alam dan mengurangi kebutuhan untuk mengekstraksi dan memproses logam baru. Penimbunan limbah logam dapat mencemari lingkungan dan menimbulkan risiko bagi kesehatan manusia.",
                    "suggestion": "* Pisahkan sampah logam dari sampah jenis lainnya. Hal ini dapat dilakukan dengan menempatkan benda-benda logam di tempat sampah atau wadah daur ulang yang telah ditentukan.\n* Bersihkan benda logam sebelum mendaur ulangnya. Ini akan membantu menghilangkan kotoran, minyak, atau kontaminan lain yang dapat mengganggu proses daur ulang.\n* Ratakan benda logam jika memungkinkan. Ini akan membantu menghemat ruang dan memudahkan pengangkutan logam ke fasilitas daur ulang.\n* Bawa limbah logam ke fasilitas daur ulang. Sebagian besar komunitas memiliki pusat daur ulang di mana logam dapat dibuang.\n* Mendorong orang lain untuk mendaur ulang limbah logam. Dengan mendaur ulang logam, Anda dapat membantu melestarikan sumber daya alam, mengurangi polusi, dan menghemat energi."
                }
            },
            {
                "id": "5a4556c2-2cdf-4bb4-b1bc-a2c91e28c7ee",
                "createdAt": "2024-06-18T05:30:33.125Z",
                "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/afa7f361-3c30-4975-b478-1233b4d36ce7.jpg",
                "result": {
                    "label": "plastic",
                    "probability": 0.9996485710144043,
                    "message": "Classified as: plastic",
                    "explanation": "Sampah plastik merupakan masalah lingkungan utama yang dapat berdampak negatif terhadap kesehatan manusia, satwa liar, dan lingkungan. Diperkirakan 8 juta metrik ton plastik berakhir di lautan kita setiap tahunnya, dan kemudian terakumulasi dan terurai menjadi potongan-potongan kecil yang dapat tertelan oleh kehidupan laut. Sampah plastik juga dapat mencemari tanah dan saluran air, serta dapat membahayakan satwa liar yang bersentuhan dengannya. Selain itu, produksi plastik memerlukan energi dan sumber daya dalam jumlah besar, dan plastik memerlukan waktu ratusan tahun untuk terurai.\n\nBerikut beberapa tips untuk mengurangi sampah plastik:\n\n* Bawalah tas Anda sendiri yang dapat digunakan kembali saat berbelanja.\n* Hindari penggunaan plastik sekali pakai, seperti sedotan plastik dan peralatan makan.\n* Daur ulang plastik bila memungkinkan.\n* Kompos sisa makanan dan sampah pekarangan.\n* Mendukung bisnis yang mengambil langkah-langkah untuk mengurangi sampah plastik.",
                    "suggestion": "* Bilas wadah plastik sebelum didaur ulang. Hal ini membantu menghilangkan sisa makanan yang dapat menarik hama atau mencemari bahan daur ulang lainnya.\n* Ratakan wadah plastik dan buka tutupnya. Ini membantu menghemat ruang dan mempermudah pemrosesan plastik.\n* Tempatkan barang-barang plastik di tempat sampah daur ulang yang telah ditentukan. Tidak semua plastik dapat didaur ulang, jadi pastikan untuk menghubungi pusat daur ulang setempat untuk mengetahui bahan apa saja yang dapat diterima.\n* Daur ulang kantong plastik secara terpisah. Sebagian besar kantong plastik tidak dapat didaur ulang dalam program daur ulang tepi jalan, jadi carilah lokasi pengantaran di dekat Anda.\n* Pertimbangkan untuk menyumbangkan atau menggunakan kembali barang-barang plastik daripada mendaur ulangnya. Banyak barang plastik yang dapat digunakan kembali, seperti botol dan wadah plastik. Anda juga dapat menyumbangkan barang-barang plastik ke toko barang bekas atau pusat daur ulang setempat."
                }
            },
            {
                "id": "6a7a01f6-8796-4142-a181-a68e423e401d",
                "createdAt": "2024-06-18T02:52:04.414Z",
                "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/5027199b-d017-4b09-8b87-cfc3e6ecad93.jpg",
                "result": {
                    "label": "biological",
                    "probability": 1,
                    "message": "Classified as: biological",
                    "explanation": "Limbah biologis adalah limbah yang berasal dari organisme hidup. Ini termasuk sisa makanan, kotoran hewan, dan bahan tumbuhan. Limbah biologis dapat menjadi sumber utama pencemaran karena dapat melepaskan bahan kimia berbahaya ke lingkungan. Ketika limbah biologis terurai, ia menghasilkan metana, gas rumah kaca yang lebih kuat dibandingkan karbon dioksida. Limbah biologis juga dapat menarik hama dan hewan pengerat sehingga dapat menyebarkan penyakit. Untuk mengurangi dampak limbah biologis terhadap lingkungan, penting untuk membuangnya dengan benar. Hal ini dapat dilakukan dengan membuat kompos dari sisa makanan, mendaur ulang kertas dan karton, serta membuang kotoran hewan dengan benar.",
                    "suggestion": "1. Membuat kompos sisa makanan. Sisa makanan dapat dibuat kompos di rumah atau dibawa ke fasilitas pengomposan setempat. Pengomposan mengubah sisa makanan menjadi bahan pembenah tanah kaya nutrisi yang dapat digunakan untuk memperbaiki kebun dan halaman rumput.\n2. Daur ulang handuk kertas, serbet, dan tisu. Handuk kertas, serbet, dan tisu dapat didaur ulang di sebagian besar komunitas. Tanyakan kepada pusat daur ulang setempat Anda untuk mengetahui bahan apa yang diterima.\n3. Gunakan kembali kantong plastik. Kantong plastik dapat digunakan kembali untuk berbagai keperluan, seperti membawa belanjaan, menyimpan makanan, atau melapisi tong sampah.\n4. Menyumbangkan pakaian dan barang-barang rumah tangga yang sudah tidak terpakai. Pakaian dan barang-barang rumah tangga yang tidak terpakai dapat disumbangkan ke toko barang bekas atau badan amal setempat. Hal ini membantu menjauhkan barang-barang tersebut dari tempat pembuangan sampah dan memberikan kesempatan kepada orang lain untuk menggunakannya.\n5. Buang limbah berbahaya dengan benar. Limbah berbahaya, seperti cat, baterai, dan oli motor, harus dibuang dengan benar di fasilitas pengumpulan limbah berbahaya. Ini membantu melindungi lingkungan dan kesehatan manusia."
                }
            },
            {
                "id": "8362fb50-5001-44bf-812e-c9c6d3fb6ba7",
                "createdAt": "2024-06-19T04:36:20.080Z",
                "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/8cf48bd9-bf3f-4926-8eb0-1b79b9ac1971.jpg",
                "result": {
                    "label": "trash",
                    "probability": 1,
                    "message": "Classified as: trash",
                    "explanation": "Limbah sampah merupakan masalah lingkungan yang besar. Hal ini dapat mencemari lingkungan dan membahayakan kesehatan manusia. Limbah sampah dapat dibagi menjadi dua kategori utama: biodegradable dan non-biodegradable. Sampah biodegradable merupakan sampah yang dapat diuraikan melalui proses alami, seperti sisa makanan dan kertas. Sampah non-biodegradable merupakan sampah yang tidak dapat diuraikan oleh proses alami seperti plastik dan logam. Kedua jenis limbah sampah tersebut dapat memberikan dampak negatif terhadap lingkungan. Sampah sampah yang dapat terurai secara hayati dapat melepaskan gas berbahaya ketika terurai, dan sampah yang tidak dapat terurai secara hayati dapat terakumulasi di tempat pembuangan sampah dan lautan, sehingga dapat membahayakan satwa liar.",
                    "suggestion": "* Bilas wadah makanan dan minuman sebelum didaur ulang. Hal ini membantu menghilangkan sisa makanan yang dapat menarik hama atau mencemari bahan daur ulang lainnya.\n* Ratakan kotak karton dan singkirkan semua komponen plastik atau logam. Ini membantu menghemat ruang dan mempermudah pemrosesan karton.\n* Tempatkan bahan-bahan yang dapat didaur ulang di tempat sampah atau wadah daur ulang yang telah ditentukan. Hal ini membantu menjaga bahan daur ulang agar tidak terkontaminasi sampah.\n* Ikuti panduan program daur ulang setempat Anda. Komunitas yang berbeda mempunyai aturan daur ulang yang berbeda, jadi penting untuk memastikan Anda mendaur ulang dengan benar."
                }
            },
            {
                "id": "8ca11519-376a-475e-a0e1-f4ac16b9a318",
                "createdAt": "2024-06-18T13:21:57.673Z",
                "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/d935cd59-bfdc-4a1f-9f97-62d77f144d80.jpg",
                "result": {
                    "label": "glass",
                    "probability": 0.5606740117073059,
                    "message": "Classified as: glass",
                    "explanation": "Limbah kaca merupakan salah satu jenis limbah padat yang terbuat dari bahan kaca. Sumbernya bisa bermacam-macam, seperti pecahan gelas, botol, dan stoples. Limbah kaca sering kali dibuang ke tempat pembuangan sampah karena membutuhkan waktu ratusan tahun untuk terurai. Namun, kaca juga dapat didaur ulang, sehingga merupakan pilihan yang lebih ramah lingkungan. Ketika kaca didaur ulang, kaca tersebut dilebur dan diubah menjadi produk kaca baru. Mendaur ulang kaca membantu mengurangi jumlah sampah yang dibuang ke tempat pembuangan sampah dan juga menghemat energi.",
                    "suggestion": "1. Bilas stoples dan botol kaca sebelum didaur ulang.\n2. Lepaskan tutup atau penutup logam atau plastik.\n3. Tempatkan kaca di tempat sampah atau wadah daur ulang.\n4. Kaca dapat didaur ulang menjadi produk kaca baru, seperti botol, toples, dan ubin."
                }
            },
            {
                "id": "8d654746-ad27-4b2a-8672-4bfb0e59863e",
                "createdAt": "2024-06-18T05:37:16.323Z",
                "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/2973818e-a294-4d80-9898-286c864a2bd5.jpg",
                "result": {
                    "label": "cardboard",
                    "probability": 0.5191805958747864,
                    "message": "Classified as: cardboard",
                    "explanation": "Karton merupakan salah satu jenis kertas karton yang terbuat dari kertas daur ulang. Ini adalah bahan serbaguna yang dapat digunakan untuk berbagai tujuan, termasuk pengemasan, pengiriman, dan konstruksi. Namun limbah karton merupakan masalah lingkungan yang besar. Di Amerika Serikat, lebih dari 10 juta ton karton diproduksi setiap tahunnya, dan hanya sekitar 30% yang didaur ulang. Sisanya berakhir di tempat pembuangan sampah, yang membutuhkan waktu ratusan tahun untuk terurai.\n\nLimbah karton dapat menimbulkan sejumlah dampak negatif terhadap lingkungan. Ketika terurai di tempat pembuangan sampah, ia melepaskan metana, gas rumah kaca yang kuat. Hal ini juga dapat menarik hama dan hewan pengerat, serta dapat mencemari air tanah. Selain itu, produksi karton baru memerlukan energi dan sumber daya yang cukup besar.\n\nAda beberapa hal yang bisa dilakukan untuk mengurangi sampah kardus. Individu dapat mendaur ulang karton bila memungkinkan, dan bisnis dapat menggunakan karton daur ulang dalam kemasannya. Pemerintah juga dapat menerapkan kebijakan yang mendorong daur ulang karton. Dengan bekerja sama, kita dapat membantu mengurangi dampak lingkungan dari limbah karton.",
                    "suggestion": "1. Ratakan kotak karton. Ini akan membuatnya lebih mudah untuk disimpan dan diangkut.\n2. Lepaskan semua komponen plastik atau logam. Bahan-bahan ini dapat didaur ulang secara terpisah.\n3. Tempatkan karton di tempat sampah atau wadah daur ulang. Pastikan karton bersih dan kering.\n4. Ikuti pedoman daur ulang setempat. Komunitas yang berbeda mempunyai aturan daur ulang yang berbeda, jadi pastikan untuk memeriksa apa yang diterima di wilayah Anda."
                }
            },
            {
                "id": "ca82dbed-633c-4401-9dac-adee8d03ec38",
                "createdAt": "2024-06-18T13:22:04.993Z",
                "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/907271d4-781d-4a8d-993b-35dcd645a96e.jpg",
                "result": {
                    "label": "glass",
                    "probability": 0.5613375306129456,
                    "message": "Classified as: glass",
                    "explanation": "Limbah kaca merupakan salah satu jenis limbah padat yang berupa produk kaca yang telah dibuang. Kaca adalah sumber daya yang tidak dapat diperbarui, jadi penting untuk mendaur ulangnya bila memungkinkan. Kaca dapat didaur ulang menjadi produk kaca baru, atau dapat digunakan untuk membuat produk lain, seperti isolasi fiberglass. Daur ulang kaca membantu melestarikan sumber daya alam, mengurangi polusi, dan menghemat energi.",
                    "suggestion": "1. Bilas stoples dan botol kaca sebelum didaur ulang.\n2. Lepaskan semua komponen logam atau plastik dari benda kaca.\n3. Hancurkan botol dan toples kaca menjadi potongan-potongan kecil.\n4. Tempatkan kaca di tempat sampah daur ulang."
                }
            },
            {
                "id": "e99e3ccd-2ae6-4070-a15e-563fb1e90e93",
                "createdAt": "2024-06-18T13:21:55.906Z",
                "imageUrl": "https://storage.googleapis.com/atongs_bucket_images/images/fc32102d-95c2-4814-a8df-7e85067a55e2.jpg",
                "result": {
                    "label": "glass",
                    "probability": 0.5614463686943054,
                    "message": "Classified as: glass",
                    "explanation": "Limbah kaca merupakan salah satu jenis limbah padat yang terbuat dari bahan kaca. Sumbernya bisa bermacam-macam, seperti pecahan botol, toples, dan produk kaca lainnya. Limbah kaca sering kali dibuang ke tempat pembuangan sampah karena membutuhkan waktu ratusan tahun untuk terurai. Namun, kaca juga dapat didaur ulang, sehingga merupakan pilihan yang lebih ramah lingkungan. Ketika kaca didaur ulang, kaca tersebut dilebur dan diubah menjadi produk kaca baru. Proses ini menghemat energi dan mengurangi kebutuhan bahan baku.",
                    "suggestion": "* Bilas stoples dan botol kaca sebelum didaur ulang.\n* Tempatkan kaca di tempat sampah daur ulang yang telah ditentukan.\n* Kaca dapat didaur ulang menjadi produk kaca baru, seperti botol, toples, dan ubin."
                }
            }
        ]
    }
  ```

</details>