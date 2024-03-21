let bil1=parseInt(document.getElementById("angka1").value);
let bil2=parseInt(document.getElementById("angka2").value);
let op=document.getElementById("operator").value;
// document.write(bil1);
// document.write(bil2);
// document.write(op);
let hasil=0;
switch (op) {
    case "+":
        hasil=bil1+bil2;
        break;
    case "-":
        hasil=bil1-bil2;
        break;
    case "*":
        hasil=bil1*bil2;
        break;
    case "/":
        hasil=bil1/bil2;
        break; 
    default:
        break;
}
document.write(bil1+" "+op+" "+bil2+" = "+hasil);