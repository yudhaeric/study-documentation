## Eager Loading

Docs Lanjutan dari [table relationship](table-relationship.md) setelah memanggil relasi **author** yang sudah dibuat pada file `PostDetailResources` kita perlu menambahkan `Eager Loading`, supaya ketika routes lain menggunakan `PostDetailResources` data relationship tidak ikut terpanggil.

Example:

Menampilkan data User saat get detail data

```
public function detail($id) {
    $article = Post::with('author:id,username')->findOrFail($id);
    return new PostDetailResource($article);
}
```

Tetapi ketika tidak ingin menampilkan data User pada routes yang lain data User akan ikut terpanggil kalau tidak memakai `Eager Loading`.

```
public function detail2($id) {
    $article = Post::findOrFail($id);
    return new PostDetailResource($article);
}
```

Cara memakai `Eager Loading` pada file **Resources**

```
// Tanpa Eager Loading

return [
    'author' => $this->author,
];

// Eager Loading

return [
    'author' => $this->whenLoaded('author'),
];

```