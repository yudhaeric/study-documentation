// Memanipulasi Elemen
// untuk menambahkan atribut pada html
// setAttribute
// kalau menambahkan atribut class dia mengganti class sebelumnya

const judul = document.getElementById('judul');
judul.setAttribute('name', 'Yudha');

// untuk melihat atribut pada tag html
judul.getAttribute('name');

// untuk mengahapus atribut pada html
const a = document.querySelector('section#a a');
a.removeAttribute('href');

// classList
// element.classList.add('') untuk menambahkan class baru tanpa menimpa class yang lama
// element.classList.remove('') untuk menghapus class yang ada
// element.classList.toggle('')
// kalo di html sudah ada class label dia akan menghapusnya kalau belum ada dia akan menambahkan nya

// element.classList.item('') untuk mengetahui class tertentu pada sebuah elemen
// element.classList.contains('') untuk mengecek pada sebuah elemen ada ngga class tertentu
// element.classList.replace('') untuk mengganti class yang ada dengan class yang baru