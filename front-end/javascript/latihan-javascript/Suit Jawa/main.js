var tanya = true;
while ( tanya ) {
    // Menangkap pilihan player
    var p = prompt('pilih : gajah, semut, orang');
    // membangkitkan pilihan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah'; 
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    // Menentukan rules
    var hasil = '';

    if(p == comp) {
        hasil = 'SERI!';
    } else if (p == 'gajah') {
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'Memasukan pilihan yang salah';
    }

    // Tampilkan hasilnya
    alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya: ' + hasil);

    tanya = confirm('Lagi?');
}

alert('terimakasih sudah bermain');