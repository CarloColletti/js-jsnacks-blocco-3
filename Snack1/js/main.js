// Chiedi all'utente un valore minimo ed un valore massimo. Genera un numero casuale all'interno del range fornito dall'utente.

// chiedo di inserire il valore minimo
const min = parseInt(prompt("inserisci un valore minimo"));
console.log(min);

// chiedo di inserire il valore massimo
const max = parseInt(prompt("inserisci un valore massimo"));
console.log(max);

// verifico che l'utente non abbia scritto lettere al posto di numeri
if ((isNaN(min)) && (isNaN(max))) {
    // allert per dirgli che ha sbagliato 
    alert("inserisci valori corretti")
} else {
    // creazione del numero casuale 
    const casual = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(casual);
    alert(casual);
}
