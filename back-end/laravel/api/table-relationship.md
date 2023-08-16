## Table Relationship

Relationship berfungsi untuk membuat relasi antar table yang memungkinkan kita untuk menghubungkan dua tabel dalam database.

Example:

Menghubungkan tabel post dan user, pada model post kita perlu membuat relationship

```
public function author(): BelongsTo
{
    return $this->belongsTo(User::class, 'author_id', 'id');
}
```

Pada method `belongsTo` memiliki beberapa parameter:

- Parameter pertama (User::class): Ini adalah model yang akan dihubungkan dengan model saat ini, dalam hal ini, model User.

- Parameter kedua ('author_id'): Ini adalah nama kolom pada model saat ini yang digunakan untuk menghubungkan relasi.

- Parameter ketiga ('id'): Ini adalah nama kolom pada model User yang menjadi target dari relasi.

Setelah relationship **author** dibuat pada `models/Post.php` kita bisa memanggil nya pada file `Resources`, seperti pada [get detail data](get-detail-data.md)

```
return [
    'id' => $this->id,
    'title' => $this->title,
    'article' => $this->article,
    'created_at' => date_format($this->created_at,"Y/m/d H:i:s"),
    'author_id' => $this->author_id,

    // Memanggil Relationship
    'author' => $this->('author'),
];
```
Lalu pada controller kita bisa memanggil nya menggunakan method `with()`

```
public function detail($id) {
    $article = Post::with('author')->findOrFail($id);
    return new PostDetailResource($article);
}
```

Saat di panggil pada postman, maka semua data user akan muncul

```
"author": {
    "id": 1,
    "email": "admin@gmail.com",
    "username": "admin",
    "created_at": null,
    "updated_at": null,
    "deleted_at": null,
}
```

Jika tidak ingin mengambil semua data user kita bisa memilih pada method `with()` di controller

```
$article = Post::with('author:id,username')->findOrFail($id);
```