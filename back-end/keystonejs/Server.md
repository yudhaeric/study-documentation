# Server Configuration KeystoneJS 6

Perintah yarn dev dan start dari terminal akan memulai Keystone server web Express. Server ini dikonfigurasi melalui opsi konfigurasi server.

Merubah Port menjadi 8000, contoh:

```
server: {
    cors: { origin: ['http://localhost:3000'], credentials: true },
    port: 8000,
    maxFileSize: 200 * 1024 * 1024,
    healthCheck: {
    path: '/my-health-check',
    data: () => ({
        status: 'healthy',
        timestamp: Date.now(),
        uptime: process.uptime(),
    }),
    },
},
```

`cors:`

URL yang ditentukan dalam opsi cors adalah URL dari frontend atau sumber daya web yang akan mengakses server (backend).

Dengan mengaktifkan opsi credentials yang diatur ke true. Ini memastikan bahwa permintaan dengan kredensial (seperti cookies atau header otorisasi) dapat dikirim dari sumber daya tersebut.

`maxFileSize:`

Ketika ada fitur upload image, kita dapat mengatur ukuran file maksimum yang diizinkan untuk diunggah ke server melalui permintaan (request) HTTP. 

maxFileSize: 200 * 1024 * 1024, itu berarti Anda membatasi ukuran maksimum file yang diunggah menjadi 200 MiB (Mebibyte).

`healthCheck:`

Endpoint untuk memeriksa apakah server berfungsi dengan baik dan siap melayani permintaan dari aplikasi lain.

**Full Documentation:**

https://keystonejs.com/docs/config/config#server
