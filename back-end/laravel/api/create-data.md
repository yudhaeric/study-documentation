## Create Data Article

Membuat atau menambah data Article, pertama buat route pada folder routes/api.php. Logika nya untuk user bisa create data dia perlu login ke akun nya dulu, jadi pada route perlu di tambahkan autentikasi `->middleware(['auth:sanctum'])`

```
Route::post('/article', [ArticleController::class, 'store']);
```
Membuat function store dan mengecek sudah terhubung atau belum

```
public function store() {
    return response()->json('route store berhasil di akses');
}
```

Lalu cek pada postman dengan mengakses route yang sudah dibuat, jika sudah terhubung antara routes dan function, berikutnya buat validasi pada inputan user agar mengisi data yang benar

```
public function store(Request $request) {
    $validated = $request->validate([
        'title' => 'required|max:255',
        'article' => 'required',
    ]);
}
```

setelah membuat validasi kita perlu mengirimkan datanya ke database

```
public function store(Request $request) {
    $validated = $request->validate([
        'title' => 'required|max:255',
        'article' => 'required',
    ]);

    $article = Post::create($request->all());

    return new PostDetailResource($article->loadMissing('author:id,username'));
}
```

Lalu karena pada tabel article ada field `author_id` kita ingin mengisi nya dengan id pada tabel user. Kode ini digunakan untuk mengatur nilai 'author_id' pada objek $request sebelum data disimpan.

```
$request['author_id'] = Auth::user()->id;
```

Penjelasan:

- $request: objek ini berisi data yang dikirimkan oleh klien ke server, seperti data formulir, data query string, header, dan lainnya.

- 'author_id': merupakan nama column pada table artikel. Nama column ini ingin diatur nilai atau diisi sebelum data tersebut disimpan.

- Auth::user(): cara untuk mengakses objek user yang saat ini telah diautentikasi atau login.

- id: mengakses properti id dari objek user yang saat ini diautentikasi, ini adalah cara untuk mendapatkan nilai id dari user yang sudah diautentikasi atau login.



