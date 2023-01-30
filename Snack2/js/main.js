// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

// creo array vuoto
let number_request = [];

// creo un contatore
let somma = 0;

// faccio inserire numeri finche il valore non supera 50 
while (somma < 50) {

    // chiedo il numero 
    let number_user = parseInt(prompt('inserisci un numero'));

    // controllo che non superi in 50
    if (isNaN(number_user)) {
        number_user = parseInt(prompt('Hai Sbagliato inserisci un numero vero'));
    } else if (number_user > 50) {
        number_user = parseInt(prompt('Hai Sbagliato inserisci un numero che non supera 50'));
    }

    // aggiungo il numero
    number_request.push(number_user);

    // incremento 
    somma += number_user;
}
// risultato 
alert('Sei arrivato al massimo . La somma è ' + somma + '. I numeri inseriti sono :' + number_request);

