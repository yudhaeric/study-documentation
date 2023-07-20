# Storage Configuration KeystoneJS 6

Storage merupakan tempat untuk menyimpan assets seperti file/image yang di upload oleh user dari CMS/form HTML. Pada KeystoneJS 6 kita bisa membuat local storage atau membuat cloud storage.

contoh membuat local storage:

```
storage: {
    profile_storage: {
    kind: 'local',
    type: 'image',
    generateUrl: path => `http://localhost:5000/images${path}`,
    serverRoute: {
        path: '/images',
    },
    storagePath: 'public/images',
    }
},
```

Setelah membuat konfigurasi untuk storage, kita perlu membuat lists/fitur upload image pada **Schema.ts**

```
profile: image({ storage: 'profile_storage' }),
```

`profile_storage:`

Nama dari storage yang digunakan untuk mengatur pengaturan penyimpanan file gambar.

`kind: 'local'`

Menunjukkan bahwa file-file gambar yang diunggah akan disimpan secara lokal (pada mesin/server tempat aplikasi berjalan).

`type: 'image'`

Mengatur format/jenis data yang akan disimpan kedalam storage adalah gambar.

`generateUrl: path => 'http://localhost:5000/images${path}'`

URL lengkap untuk mengakses gambar yang diunggah. Misalnya, jika gambar diunggah ke public/images/my-image.jpg, maka path akan menjadi /my-image.jpg.

`serverRoute: { path: '/images' }`

Menentukan rute (URL) yang akan dibuat dalam backend Keystone untuk melayani gambar yang diunggah.

`storagePath: 'public/images'`

Menentukan direktori tempat gambar yang diunggah akan disimpan pada server. Di sini, gambar akan disimpan dalam direktori public/images pada server.

**Notes:**

Pastikan direktori storagePath telah benar-benar ada di server Anda sehingga gambar dapat disimpan dengan benar.


**Full Documentation:**

https://keystonejs.com/docs/guides/images-and-files

