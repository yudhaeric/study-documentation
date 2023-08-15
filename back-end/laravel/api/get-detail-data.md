## Get Detail Data

Membuat routes untuk get detail data, untuk membuat routes API berbeda dengan CMS, untuk API ada di routes/api.php. Berbeda dengan Get All Data routes untuk detail perlu menambahkan {id} article yang ingin dilihat detail datanya

```
Route::get('/article/{id}', [ArticleController::class, 'detail']);
```

Setelah routes dibuat kita perlu membuat function pada controller, pada controller kita bisa menggunakan resource untuk memilih data apa saja yang ingin kita ambil, atau tanpa menggunakan resource untuk mengambil semua data article.

### Get Detail Data No Resource

Kita hanya perlu membuat function get detail data dan semua detail data akan terambil

```
public function detail($id) {
    $article = Post::findOrFail($id);
    return response()->json(['data' => $article]);
}
```

### Get Detail Data With Resource

Pertama kita perlu membuat resource

```
php artisan make:resource PostDetailResource
```
Masukan data apa saja yang ingin kita ambil pada resource

```
public function toArray(Request $request): array
{
    return [
        'id' => $this->id,
        'title' => $this->title,
    ];
}
```

Bisa juga memasukan data yang tidak ada di database

```
public function toArray(Request $request): array
{
    return [
        'hallo' => "ini data custom" 
    ];
}
```

Setelah membuat resource kita perlu membuat function detail pada controller, karena hanya satu data yang kita ambil makan menggunakan `new` bukan `::collection` seperti pada [get all data](get-all-data.md)

```
public function detail($id) {
    $article = Post::findOrFail($id);
    return new PostDetailResource($article);
}
```

