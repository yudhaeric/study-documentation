# Step for Soft Delete Data to Database

Buat route untuk soft delete data.

![Soft Delete Route](img/delete-route.png)

Buat form untuk button soft delete, pada html tidak mendukung method delete, jadi tetap menggunakan post dan menggunakan @method('delete'). Tambahkan juga action nya sesuai route yang sudah dibuat.

![Soft Delete Form](img/delete-form.png)

Buat function untuk melakukan soft delete.

![Soft Delete Function](img/delete-function.png)

**NOTED:**

Kalau ingin melakukan soft delete perlu menambahkan nya pada model

![Soft Delete Model](img/soft-delete-model.png)

lalu perlu juga menambahkan column delete_at pada tabel dengan migration

![Soft Delete Model](img/soft-delete-migration.png)

