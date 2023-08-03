## Get Detail Data

Membuat routes untuk get detail data, untuk membuat routes API berbeda dengan CMS, untuk API ada di routes/api.php. Berbeda dengan Get All Data routes untuk detail perlu menambahkan {id} article yang ingin dilihat detail datanya

```
Route::get('/article/{id}', [ArticleController::class, 'detail']);
```

Setelah routes dibuat kita perlu membuat function pada controller, pada controller kita bisa menggunakan resource untuk memilih data apa saja yang ingin kita ambil, atau tanpa menggunakan resource untuk mengambil semua data article.
