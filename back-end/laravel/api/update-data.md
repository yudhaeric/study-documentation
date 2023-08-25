# Update Data API

Membuat middleware article-owner yang berfungsi untuk mengecek apakah user yang ingin mengupdate article merupakan penulis/author article tersebut, jika bukan pemilik/author article maka dia tidak bisa mengedit article tersebut

```
php artisan make:middleware ArticleOwner
```

Setelah membuat middleware, kita perlu mendaftarkan nya pada **app/Http/Kernel.php**

```
'article-owner' => \App\Http\Middleware\ArticleOwner::class,
```
Lalu pada file middleware berisi kondisi untuk mengecek user yang sedang login dan mengecek apakah dia pemilik article atau bukan

```
public function handle(Request $request, Closure $next): Response
{
    // Cek apakah middleware sudah terhubung
    // dd("Middleware Article Owner telah terhubung");

    // Mendapatkan data user yang saat ini sedang login
    $currentUser = Auth::user();
    
    // bisa di tes dengan
    // return response()->json($currentUser);

    // Mendapatkan data article yang mau di edit
    $article = Post::findOrFail($request->id);

    // bisa di tes dengan
    // return response()->json($article);

    // bisa juga memanggil salah satu data
    // return response()->json($article->id);

    if ($article->author_id != $currentUser->id) {
        return response()->json(['message' => 'Data not found'], 404);
    }
    
    return $next($request);
}
```

Seluruh code middleware article-owner

```
public function handle(Request $request, Closure $next): Response
{
    $currentUser = Auth::user();
    $article = Post::findOrFail($request->id);

    if ($article->author_id != $currentUser->id) {
        return response()->json(['message' => 'Data not found'], 404);
    }
    
    return $next($request);
}
```

Berikutnya, setelah membuat middleware kita membuat route untuk update data pada API, dan tambahkan **article-owner** pada route update data.

```
Route::patch('/article/{id}', [ArticleController::class, 'update'])->middleware(['article-owner']);
```
Notes: saat user mengakses route update, middleware akan dijalankan terlebih dahulu, jika kondisi nya sesuai, maka user akan masuk ke routes update.

Berikutnya membuat function update data pada controller

```
public function update(Request $request, $id) {
    // Setelah lolos dari middleware, berikutnya user bisa mulai mengisi data terbaru dari article

    // validasi data
    $validated = $request->validate([
        'title' => 'required|max:255',
        'article' => 'required',
    ]);
    
    // Mengambil data article yang mau di edit
    $article = Post::findOrFail($id);

    // Eloquent database untuk update data
    $article->update($request->all());

    return new PostDetailResource($article->loadMissing('author:id,username'));
}
```