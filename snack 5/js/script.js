// Snack #5:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
// Stampa l'array nella console.


var oddNumbers = [];

//Soluzione 1:
// for (var i = 0; i < 6; i++){
//     var userNumber = parseInt(prompt("Please insert a number:"));
//     console.log(userNumber);
//     if (userNumber % 2 !=0){
//         oddNumbers.push(userNumber);
//     }
// }

// console.log(oddNumbers);

//Soluzione 2:

for (var i = 0; i < 6; i++){
    var userNumber = parseInt(prompt("Please insert a number:"));
    console.log(userNumber);

    var userNumberOdd = isOdd(userNumber);

    if(userNumberOdd)  {
        oddNumbers.push(userNumber);
    }
}
console.log(oddNumbers);


//----------------
//FUNCTION
function isOdd (num) {
    return (num % 2 !=0) //restituisci TRUE se input e' dispari;
}