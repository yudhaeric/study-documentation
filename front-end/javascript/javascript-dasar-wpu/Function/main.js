function tambah(a,b) {
    return a + b;
}

function kali(a,b) {
    return a * b;
}

// var a = parseInt(prompt('Masukan nilai 1:'));
// var b = parseInt(prompt('Masukan nilai 1:'));
// var hasil = tambah(a*2,b*2);
// console.log(hasil);

var hasil = kali(tambah(1,2), tambah(3,4));
console.log(hasil);
