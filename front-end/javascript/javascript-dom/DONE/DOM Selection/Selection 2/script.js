// querySelector -> Element

const p4 = document.querySelector('#b p');
p4.style.backgroundColor = 'lightblue';

const li2 = document.querySelector('#b li:nth-child(2)');
li2.style.backgroundColor = 'lightseagreen';
li2.style.color = 'white';

// kalau tag nya banyak seperti p yang berubah tag p yang pertama
// const p = document.querySelector('p');
// p.innerHTML = 'ini diubah dari javascript';
// p.style.color = 'white';
// p.style.backgroundColor = 'rgb(0, 255, 128)';


// querySelectorAll


const p = document.querySelectorAll('p');
// const p = document.querySelectorAll('p') [0]; bisa taruh index di samping
// p[0].style.backgroundColor = 'lightblue';
// p[1].style.backgroundColor = 'lightblue';
// p[2].style.backgroundColor = 'lightblue';
// p[3].style.backgroundColor = 'lightblue';

// biar tidak ngetik panjang pakai looping
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
    p[i].style.textTransform = 'capitalize';
}

// bisa merubah node root nya (document)
const sectionA = document.getElementById('a');
const linka = sectionA.querySelector('a');
linka.style.backgroundColor = 'red';

const sectionB = document.querySelector('section#b');
const li3 = sectionB.getElementsByTagName('li')[0];
li3.style.backgroundColor = "green";