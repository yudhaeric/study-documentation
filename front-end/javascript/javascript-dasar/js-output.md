## JavaScript Output

JavaScript bisa "menampilkan" data dengan beberapa cara:

- Menulis di elemen HTML, menggunakan innerHTML.
- Writing into the HTML output menggunakan document.write().
- Menulis di alert box, menggunakan window.alert() atau alert().
- Menulis di browser console, menggunakan console.log().
- Print halaman web, menggunakan window.print().

### Using innerHTML

Untuk mengakses elemen HTML, JavaScript dapat menggunakan metode document.getElementById(id).

Atribut id mendefinisikan elemen HTML. Properti innerHTML mendefinisikan konten HTML:

![Inner HTML](img/output1.png)

### Using document.write()

Untuk tujuan pengujian, akan lebih mudah menggunakan document.write(). 

Menggunakan document.write() setelah dokumen HTML dimuat, akan menghapus semua HTML yang ada

Contoh:

Ketika button di klik hanya muncul angka 11

![Document Write](img/output2.png)

### Using alert()

Kita dapat menggunakan alert box untuk menampilkan data:

![Alert](img/output3.png)

### Using Confirm()

Kita dapat membuat input berupa alert sebagai konfirmasi untuk sebelum masuk ke web

![Confirm](img/output4.png)
### Using console.log()

Untuk tujuan debugging, dapat memanggil metode console.log() di browser untuk menampilkan data.

![Console Log](img/output5.png)

### Using window.print()

Metode di browser untuk print konten window saat ini.

![Print](img/output6.png)