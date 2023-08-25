# Delete Data API

Membuat route untuk delete data, sama seperti update data untuk delete data juga perlu middleware **article-owner**. Hanya author/penulis article yang bisa menghapus nya

```
Route::delete('/article/{id}', [ArticleController::class, 'destroy'])->middleware(['article-owner']);
```

Membuat function destroy untuk delete data pada controller

```
public function destroy($id) {
    // Mendapatkan data yang mau di hapus
    $article = Post::findOrFail($id);

    // Eksekusi data yang sudah di dapatt
    $article->delete();

    // Sekarang agar kita tau, kita mau ngirim ke frontend data apa sih yang dihapus

    // tinggal kita return aja data yang ke hapus
    return new PostDetailResource($article->loadMissing('author:id,username'));
}
```