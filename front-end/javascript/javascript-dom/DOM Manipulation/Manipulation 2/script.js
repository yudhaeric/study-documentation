// manipulasi node

// document.createElement() untuk membuat elemen nya 
// document.createTextNode() untuk menulis apa di elemen yang sudah dibuat
// node.appendChild() untuk menyimpan tulisan kedalam elemen yang sudah dibuat
// node.insertBefore() untuk menyimpan tulisan kedalam elemen yang sudah dibuat
// parentNode.removeChild() untuk menghapus
// parentNode.replaceChild() untuk mengganti

// buat elemen baru
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Paragraf Baru');

// simpan tulisan kedalam elemen
pBaru.appendChild(textPBaru);

// simpan pBaru di akhir akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


// Insert Before

const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(textLiBaru);
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);

// Remove Child

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// Replace Child

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(textH2Baru);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';