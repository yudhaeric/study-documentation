var jumlahAngkot = 10;

for (var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= 6 && noAngkot !== 5) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik. ');
    } else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10){
        console.log('Angkot No. ' + noAngkot + ' sedang lembur. ');
    }  else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi. ');
    } 
}