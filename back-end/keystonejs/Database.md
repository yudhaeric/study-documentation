# Database Configuration KeystoneJS 6

Opsi konfigurasi 'db' mengkonfigurasi database yang digunakan untuk menyimpan data dalam sistem Keystone. Keystone mendukung jenis database **PostgreSQL, MySQL, dan SQLite**. Default nya menggunakan **SQLite**.

Kita dapat mengatur database ke MySQL dengan mengubah nilai provider menjadi **'mysql'** dan mengatur **'url'** dengan koneksi URL untuk database MySQL.

```
url: 'mysql://dbuser:dbpass@localhost:3306/dbname'
```

**Contoh:**

```
db: {
  provider: 'mysql',
  url: 'mysql://root:yudha@localhost:3306/article_keystonejs',
  enableLogging: true,
  idField: { kind: 'cuid' },
  onConnect: async context => {
    ...
  }
},
```

**Opsional Configuration:**

`enableLogging: true`

Opsi ini menentukan apakah log dari klien Prisma akan diaktifkan atau tidak. Logging adalah proses mencatat kejadian atau informasi yang berguna untuk pemecahan masalah atau pemantauan.

`idField: { kind: 'cuid' }`

Opsi ini menentukan tipe bidang ID yang digunakan dalam skema database. Kita dapat memilih dari beberapa pilihan, seperti **'cuid', 'uuid', atau 'autoincrement'**.

ID dengan CUID:

```
{
  "id": "96c1b7e3-75a0-4be9-9b15-4b799a73d69d",
  "name": "John Doe"
}
```

ID dengan UUID:

```
{
  "id": "ckrkj3ls100005tktgkscau1r",
  "name": "John Doe"
}
```

`onConnect: async context => {...}`

Berfungsi untuk melakukan tindakan apa pun yang mungkin diperlukan saat menjalankan server, seperti [seeding data](./Seeding.md).

**Full Documentation:**

https://keystonejs.com/docs/config/config#db