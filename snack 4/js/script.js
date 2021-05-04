// Snack #4:
// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.

var firstName = ["Maria", "Francesca", "Davide", "Giacomo", "Paolo", "Simona"];
console.log(firstName);
var lastName = ["Rossi", "Verdi", "Bianchi", "Neri", "Valentini", "Benetton"];
console.log(lastName);

var invitees = [];

for (var i=0; i<10; i++) {
    var inTheList = firstName[listaInvitati(firstName)] + " " + lastName[listaInvitati(lastName)];
    invitees.push(inTheList);
    document.getElementById("invitati").innerHTML += "<li> " + invitees[i] + "</li>";
}

console.log(invitees);


//----------------------------
//FUNCTION

function listaInvitati (array) {
    var index = Math.floor(Math.random() *(array.length - 0));
    return index;

}

