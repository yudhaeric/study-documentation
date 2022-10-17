let nama = ['Yudha', 'Eric', 'Pamungkas'];

// Method pada array
// 1. Join, untuk menampilkan isi array
console.log(nama.join(' - '));

// 2. Push & Pop
// Push, menambah index array terakhir, bisa lebih dari satu elemen
// nama.push('Rose', 'Edelweis')
// Pop, menghapus index array terakhir, harus satu satu
nama.pop();
nama.push('Jasmine');
console.log(nama.join(' - '));

// 3. Unshift & Shift
// Unshift, menambah elemen pertama array, bisa lebih dari satu elemen
// nama.unshift('Rose', 'Edelweis')
// Shift, menghapus index array pertama, harus satu satu
nama.shift();
nama.unshift('Elsa');
console.log(nama.join(' - '));

// 4. Splice
// untuk menyisipkan elemen di tengah tengah
// splice(index awal, mau dihapus berapa, elemenbaru1, elemenbaru2, ...);
nama.splice(1, 0, 'Yudha');
nama.splice(3, 0, 'Pamungkas');
console.log(nama.join(' - '));

// 5. Slice
// untuk memecah array dan membuat array baru
// slice(index awal, ambil berapa data);
let nama2 = nama.slice(1, 4);
console.log(nama2.join(' - '));

// 6. Foreach
// Looping pada array seperti for tapi lebih keren
let mahasiswa = ['Yudha', 'Eric', 'Pamungkas'];

mahasiswa.forEach(function (mhs, i) {
    console.log("Mahasiswa ke " + (i+1) + " adalah : " + mhs);
});

// 7. Map
// Mengembalikan nilai array, foreach tidak
let angka = [1,2,3,4,5];
let angka2 = angka.map(function (e) {
    return e * 2;
});

console.log(angka2.join(' - '));

// 8. Sort
// Untuk mengurut nilai array dari a - z
let alpabet = ["f", "a", "d", "c", "b", "e"];
alpabet.sort();
console.log(alpabet.join(' - '));

// 9. Filter & Find
// Filter, untuk mencari banyak nilai
let angka3 = [1,2,3,4,5,6,7,8,9,10];
let angka4 = angka3.filter(function (x) {
    return x > 5;
});
console.log(angka4.join(' - '));

// Find, untuk menemukan satu nilai
let angka5 = angka3.find(function (x) {
    return x > 9;
});
console.log(angka5);

// 10. Array Tables
const animal = [];
animal.push("Kucing", "Dinosaurus", "Ayam", "Bebek", "Naga", "Sapi");

console.table(animal);

animal[0] = "Kucing";
animal[1] = "Anjing";
animal[2] = "Monyet";

console.table(animal);
