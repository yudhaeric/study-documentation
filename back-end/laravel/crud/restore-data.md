# Step for Restore Data to Database

Buat route untuk restore data.

![Restore Route](img/restore-route.png)

Buat button untuk restore data, tambahkan juga href nya sesuai route yang sudah dibuat.

![Restore Form](img/restore-form.png)

Buat function untuk melakukan restore. 

![Restore Function](img/restore-function.png)

**NOTED:**

withTrashed() berfungsi untuk mencari semua item berdasarkan id, termasuk yang telah di soft delete.

onlyTrashed() biasa digunakan untuk mengambil data atau get() semua data yang sudah di soft delete.