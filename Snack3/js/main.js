// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, 
// ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

// numero dato dall'utente 
let user_number = parseInt(prompt('Inserisci un numero'));

// variabile per il risultato 
let result = document.getElementById('result');

let i = 1;
// cicla fino al numero utente
while (user_number >= i) {

    // crea l'array
    let list = [];

    // cicla fino a che non inserisci 10 numeri da 1 a 100 nell'array
    for (let y = 0; y < 10; y++) {
        let random_number = Math.floor(Math.random() * 100) + 1;
        list.push(random_number);
    }
    // stampa tutti gli array creati  
    result.innerHTML += `Array creato numero <strong>${i}</strong>: <strong>${list}</strong><br>`;
    console.log('Array creato numero ' + i + ': ' + list);

    // incremento 
    i++;
}