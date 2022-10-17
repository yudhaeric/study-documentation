const masuk = confirm("Anda Mau Masuk?");

if(masuk) {
    const nama = prompt("Siapa nama anda?");
    alert(`Hello ${nama}`);
} else {
    alert("Bye Bye!");
}

