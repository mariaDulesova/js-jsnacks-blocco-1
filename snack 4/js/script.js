// Snack #4:
// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.


var firstName = ["Maria", "Francesca", "Davide", "Giacomo", "Paolo", "Simona"];
console.log(firstName);
var lastName = ["Rossi", "Verdi", "Bianchi", "Neri", "Valentini", "Benetton"];
console.log(lastName);

var invitees = [];

//Soluzione 1:
// for (var i=0; i<10; i++) {
//     var index1 = listaInvitati(firstName);
//     var index2 = listaInvitati(lastName);
//     var inTheList = firstName[index1] + " " + lastName[index2];
//     invitees.push(inTheList);
//     document.getElementById("invitati").innerHTML += "<li> " + invitees[i] + "</li>";
// }
// console.log(invitees);

//----------------------------
//FUNCTION

// function listaInvitati (array) {
//     var index = Math.floor(Math.random() * (array.length));
//     return index;
// }

// Soluzione 2:
for(var i = 0; i < 10; i++)  {
    invitees.push(invitati (firstName, lastName));
    document.getElementById("invitati").innerHTML += "<li> " + invitees[i] + "</li>";
}
console.log(invitees);

//-------------------------
//FUNCTION
function invitati (arr1, arr2) {
    var index1 = Math.floor(Math.random() * (arr1.length));
    var index2 = Math.floor(Math.random() * (arr2.length));
    var inTheList = arr1[index1] + " " + arr2[index2];
    
    return inTheList;
}