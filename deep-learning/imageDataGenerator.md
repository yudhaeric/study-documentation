## Image Data Generator

Kelas ImageDataGenerator memiliki tiga metode flow(), flow_from_directory() dan flow_from_dataframe() untuk membaca gambar dari array numpy besar dan folder yang berisi gambar.

Berikut adalah atribut yang paling sering digunakan bersama dengan method flow_from_directory():

![](img/train_gen.png)

**Penjelasan Method:**

1. Direktori harus diatur ke jalur di mana kelas folder 'n' ada.
2. Target_size adalah ukuran gambar input, setiap gambar akan diubah ukurannya menjadi ukuran ini.
3. color_mode: jika gambar hitam putih atau skala abu-abu setel "skala abu-abu" atau jika gambar memiliki tiga saluran warna, setel "rgb".
4. batch_size: Jumlah gambar yang akan dihasilkan dari generator per batch.
5. class_mode: Setel "biner" jika hanya memiliki dua kelas untuk diprediksi, jika tidak disetel ke "kategorikal", jika  mengembangkan sistem Autoencoder, input dan output mungkin akan menjadi gambar yang sama, untuk set kasus ini untuk "input".
6. shuffle: Atur True jika ingin mengacak urutan gambar yang sedang dihasilkan, jika tidak, atur False.
7. seed: Benih acak untuk menerapkan pembesaran gambar acak dan mengacak urutan gambar.