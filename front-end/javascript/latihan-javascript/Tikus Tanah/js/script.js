const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('.papan-skor');
const pop = document.querySelector('#pop');

// Variabel yang berfungsi agar tikus tidak bisa muncul 2x di tanah yang sama
// Nilai dari tanah sebelumnya 0
let tanahSebelumnya;

// variabel yang akan mengetahui kapan game nya selesai, default awalnya tidak selesai
let selesai;
let skor;

// Function ini berfungsi untuk membuat bilangan random, 
// agar tikus muncul secara random
function randomTanah(tanah) {
    // variabel untuk membuat nilai random 0-5 sesuai isi variabel tanah
    // Math.floor berfungsi untuk membulatkan nilai, jika tidak pakai ini nilai akan ada komanya 1.09888733
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t]; // tanah[t] / tanah[0-5]

    if (tRandom == tanahSebelumnya) {
        randomTanah(tanah);
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}

// function yang berfungsi untuk membuat waktu random 
// agar tikus muncul cepat atau lambat
function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// Function ini berfungsi untuk menambahkan class muncul pada tanah
function munculkanTikus() {
    const tRandom = randomTanah(tanah);
    // variabel waktu kecepatan tikus muncul
    const wRandom = randomWaktu(500, 900);

    tRandom.classList.add('muncul');
    setTimeout(() => {
        tRandom.classList.remove('muncul');
        if (!selesai) {
            // fungsi tikus di jalankan terus menerus sampai bernilai true
            // selesai nya sesuai waktu yang ada di function mulai
            munculkanTikus();
        }
    }, wRandom);
}

function mulai () {
    // karena berakhir dengan true, makanya setiap awal mengklik button
    // kita set kembali variabel selesai menjadi false, dan merubah skor menjadi 0
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;

    munculkanTikus();
    setTimeout(() => {
        selesai = true;
    }, 10000);

    // karena setelah waktu nya habis, variabel selesai akan bernilai true
}

// function yang berfungsi ketika tikus terkena pukul akan menambah skor
// dan langsung kembali ngumpet di bawah tanah
function pukul() {
    skor++;
    papanSkor.textContent = skor;
    pop.play();
    // this = tikus, ambil parent nya yaitu tanah, kemudian remove class muncul
    this.parentNode.classList.remove('muncul');
}

// Karena tikus berbentuk array / node list, maka kita looping menggunakan forEach
// Lalu ambil satu tikus dan di beri nama t, dan ketika di klik akan menjalankan function pukul
tikus.forEach(t => {
    t.addEventListener('click', pukul);
});