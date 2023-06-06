# Step for Create Data to Database

Buat tampilan form tambah data

![Create Form](img/create-form.png)

Buat route untuk masuk ke tampilan form tambah data

![Create Route](img/create-route.png)

Buat button tambah data, berikan route pada href ke halaman tambah data

Buat function "create" pada controller untuk return view tambah data

![Create Function](img/create-function.png)

Buat route dengan method post, route nya sesuaikan dengan atribut action pada form

![Create Function](img/store-route.png)

Karena menggunakan mass asignment kita perlu menulis column apa saja yang perlu diisi pada models

![Create Function](img/create-models.png)

Terakhir buat function store untuk mengirim data ke database

![Create Function](img/store-function.png)

**Note:**

Request pada parameter akan menangkap value apa saja yang diisi user pada input form, untuk debugging atau melihat semua value nya bisa menggunakan

```
dd($request->all());
```

Bisa juga satu value, samakan value nya sesuai atribut name pada element input html

```
dd($request->task);
```
