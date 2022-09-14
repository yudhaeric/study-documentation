const color = document.querySelector('.hexa');

let hexa;

function changeColor() {
    hexa = color.innerHTML = "#" + Math.floor(Math.random() * 100 * 100 * 100);
    return hexa;
}