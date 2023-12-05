/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.Consigli del giorno

    Scriviamo sempre in italiano i passaggi che vogliamo fare
    Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/


//create var utility

let drow = (''); //word reverse is drow!!!!

//function to create drow (word-reverse)
function paliCheck(word){
    for (let i = word.length - 1; i >= 0; i--) {
        let element = word[i];
        console.log(word[i]);
        drow += element;
    } 
    return drow
}

//input word
const word = prompt('type a word');
paliCheck(word);

console.log(drow);
//check if word === drow
if (word === drow) {
    console.log('Yes');    
} else {
    console.log('No');
}



//}

/* const word = prompt('Typa a word');
paliCheck(word); */