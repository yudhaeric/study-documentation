// DOM Selection
// getElementsByID -> element

const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#333';
judul.innerHTML = 'Yudha Eric Pamungkas';

// getElementsByTagName -> HTML Collections
// harus diberi index seperti array

const p = document.getElementsByTagName('p');
// const p = document.getElementsByTagName('p') [0]; bisa taruh index di samping
// p[0].style.backgroundColor = 'lightblue';
// p[1].style.backgroundColor = 'lightblue';
// p[2].style.backgroundColor = 'lightblue';
// p[3].style.backgroundColor = 'lightblue';

// biar tidak ngetik panjang pakai looping
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
    p[i].style.textTransform = 'capitalize';
}

// getElementsByClassName -> HTML Collections
// harus diberi index seperti array

const p1 = document.getElementsByClassName('p1') [0];
p1.innerHTML = 'ini diubah dari javascript';