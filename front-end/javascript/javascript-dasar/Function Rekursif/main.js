// Rekursif memanggil fungsi di dalam fungsi itu sendiri

// function declaration
function tampilAngka(n) {
    if (n === 0 ) return;
    console.log(n)
    return tampilAngka(n-1)
}

tampilAngka(10);

// function expression, fungsi nya ada di dalam variabel lebih modern
var tampilAngka = function (n) {
    if (n === 0 ) return;
    console.log(n)
    return tampilAngka(n-1)
}

tampilAngka(10);
