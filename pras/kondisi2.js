//Buat nilai rata-rata dari 4 nilai input nilai
let nilai1=parseInt(prompt("masukan nilai 1"))
let nilai2=parseInt(prompt("masukan nilai 2"))
let nilai3=parseInt(prompt("masukan nilai 3"))
let nilai4=parseInt(prompt("masukan nilai 4"))
let ratarata=(nilai1+nilai2+nilai3+nilai4)

//ketik kode konversi rata-rata ke nilai
if (ratarata>=85){
    nilai_huruf="A";
}
else if(ratarata>=65){
    nilai_huruf="B";
}
else if(ratarata>70) {
    nilai_huruf="C";
}
else{
    nilai_huruf="D"
}
document.write("nilai :"+nilai_huruf+"<br>")
document.write(ratarata);



