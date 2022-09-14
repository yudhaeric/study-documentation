function ubahWarnaP2(){
    p2.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const textLiBaru = document.createTextNode('Item Baru');
    liBaru.appendChild(textLiBaru);
    ul.appendChild(liBaru);
});
