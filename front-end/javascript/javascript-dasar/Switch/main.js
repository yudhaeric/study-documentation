// Contoh 1
let item = prompt('Masukan nama makanan / minuman : \n (nasi, daging, susu, hamburger, softdrink)');

switch ( item ) {
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('makanan / minuman SEHAT!');
        break;
    case 'hamburger' :
    case 'softdrink' :
        alert('makanan / minuman TIDAK SEHAT!');
        break;
    default:
        alert('anda memasukan nama makanan/minuman yang salah!');
        break;
}

// Contoh 2

// let angka = prompt('Masukan angka : ');

// switch (angka) {
//     case '1':
//         alert('anda memasukan angka 1');
//         break;
//     case '2':
//         alert('anda memasukan angka 2');
//         break;
//     case '3':
//         alert('anda memasukan angka 3');
//         break;
//     default:
//         alert('angka yang anda masukan salah');
//         break;
// }  

