let exo1 = document.getElementById("is-integer");

if(Number.isInteger(parseFloat(exo1.innerHTML))) {
    exo1.innerHTML += " est un nombre entier.";
}
else {
    exo1.innerHTML += " n'est pas un nombre entier.";
}

let exo2 = document.getElementById("is-nan");

if(isNaN(exo2.innerHTML) === false) {
    exo2.innerHTML += " est un nombre"
}
else {
    exo2.innerHTML += " n'est pas un nombre"
}

let exo3 = document.getElementById("parse-float");
let ecrit = exo3.innerHTML.substring(parseFloat(exo3.innerHTML).toString().length);

exo3.innerHTML = (parseFloat(exo3.innerHTML) * 28) + ecrit;

let exo4 = document.getElementById("parse-int");
exo4.innerHTML = (Math.trunc(parseFloat(exo4.innerHTML) / 28) + exo4.innerHTML.substring(parseFloat(exo4.innerHTML).toString().length));

let exo5 = document.getElementById("to-fixed");
let modif1 = Number.parseFloat(exo5.innerHTML);
let modif2 = modif1.toFixed(2);
exo5.innerHTML = modif2;