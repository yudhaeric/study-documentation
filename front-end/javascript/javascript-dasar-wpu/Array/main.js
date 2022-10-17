var nama = ['Yudha', 'Eric', 'Pamungkas'];

// Method pada array
// 1. Join, untuk menampilkan isi array
console.log(nama.join(' - '));

// 2. Push & Pop
// Push, menambah elemen terakhir array, bisa lebih dari satu elemen
// nama.push('Rose', 'Edelweis')
// Pop, menghapus elemen terakhir array, harus satu satu
nama.pop();
nama.push('Jasmine');
console.log(nama.join(' - '));

// 3. Unshift & Shift
// Unshift, menambah elemen pertama array, bisa lebih dari satu elemen
// nama.unshift('Rose', 'Edelweis')
// Shift, menghapus elemen terakhir array, harus satu satu
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
// untuk mengubah array  
// slice(awal, akhir);
var nama2 = nama.slice(1, 4);
console.log(nama2.join(' - '));

// 6. Foreach
// Looping pada array seperti for tapi lebih keren
var mahasiswa = ['Yudha', 'Eric', 'Pamungkas'];

mahasiswa.forEach(function (mhs, i) {
    console.log("Mahasiswa ke " + (i+1) + " adalah : " + mhs);
});

// 7. Map
// Mengembalikan nilai array, foreach tidak
var angka = [1,2,3,4,5];
var angka2 = angka.map(function (e) {
    return e * 2;
});

console.log(angka2.join(' - '));

// 8. Sort
// Untuk mengurut nilai array
var angka3 = [1,2,4,3,6,5,7];
angka3.sort();
console.log(angka3.join(' - '));

// 9. Filter & Find
// Filter, untuk mencari banyak nilai
// Find, untuk menemukan satu nilai
var angka4 = angka3.filter(function (x) {
    return x > 5;
});
console.log(angka4.join(' - '));

var angka5 = angka3.find(function (x) {
    return x > 5;
});
console.log(angka5);
