## GET All Data

Membuat routes untuk API berbeda dengan CMS, untuk API ada di `routes/api.php`

```
Route::get('/article', [ArticleController::class, 'index']);
```

**Get All Data Without Resource**

Get data tanpa resource, akan mengambil semua data yang ada pada tabel article dan semua column nya.

```
public function index() {
    $article = Post::all();
    return response()->json(['data' => $article]);
}
```

**Get All Data With Resource**

Resource berfungsi untuk memilih data apa saja yang mau kita ambil.

```
php artisan make:resource PostResource
```

Ketika sudah dibuat ada di `app/Http/Controllers/Resources`. Pada file resource kita perlu mengisi data apa saja yang mau diambil. Contoh di bawah kita akan mengambil data id, title, article, created_at

```
public function toArray(Request $request): array
{
    return [
        'id' => $this->id,
        'title' => $this->title,
        'article' => $this->article,
        'created_at' => date_format($this->created_at,"Y/m/d H:i:s")
    ];
}
```

Bisa juga memasukan data yang tidak ada di database.

```
public function toArray(Request $request): array
{
    return [
        'say' => "Hello, world!",
    ];
}
```

Lalu tambahkan resource pada function

```
public function index() {
    $article = Post::all();
    return PostDetailResource::collection($article);
}
```


