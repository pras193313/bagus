//menampilkan data bilangan ganjil
let bil=0;
while (bil%2===0) {
    document.write(bil+"<br>");
    bil=parseInt(prompt("masukan sembarang angka"))
}

do {
    document.write(bil+"<br>");
    bil=parseInt(prompt("masukan sembarang angka"))
} while (bil<20);