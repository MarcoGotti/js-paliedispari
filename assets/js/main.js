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


/* //create var utility

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

//final check
if (word === drow) {
    console.log('Yes');    
} else {
    console.log('No');
} */

//PARI O DISPARI
//console.log('PARI E DISPARI');

//pick even  or odd
const userChoice = prompt('write E for Even or O for Odd');

//pick a numb 1 to 5
const userNumber = Number(prompt('type a number 1-5'));
console.log(userNumber);

//generate random number 1-5 with a function
function randomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}

const rdmNumber = (randomNumber(1, 5));
console.log(rdmNumber);
console.log(rdmNumber + userNumber);

//Sum the two numbers and determine if sum is even or odd
function sum(num_1, num_2){
    return ((num_1 + num_2) % 2)
}

sum(userNumber, rdmNumber);
const modulus = sum(userNumber, rdmNumber);
console.log(modulus);

//declare the winner

if (((modulus == 0) && (userChoice === 'E')) || ((modulus !== 0) && (userChoice === 'O'))) {
    //const rdmSum = userNumber + rdmNumber;
    console.log('you win! ' + (userNumber + rdmNumber) + ' is ' + userChoice);
} else {
    //const rdmSum = userNumber + rdmNumber;
    console.log('you lose! ' + (userNumber + rdmNumber) + ' is not ' + userChoice);
}



/* 
FIRST ATTEMPT it works but messy

//console.log(randomNumber(1, 5));
const rdmNumber = (randomNumber(1, 5));
console.log(rdmNumber);
const rdmSum = (rdmNumber + userNumber);
console.log(rdmSum);

//decide weather the random result is even or odd
function modulusDivision(rdmSum){
    if (((rdmSum % 2 == 0) && (userChoice === 'E')) || ((rdmSum % 2 !== 0) && (userChoice === 'O')))  {
        result = (`you win! ${rdmSum} is ${userChoice}`) //why not const result = () or let result = ()   ????     
    } else if (((rdmSum % 2 !== 0) && (userChoice === 'E')) || ((rdmSum % 2 == 0) && (userChoice === 'O'))){
        result = (`you lose! ${rdmSum} is not ${userChoice}`)
    } 
    console.log(result); 
    return result
}

const modulus = (modulusDivision(rdmSum));
console.log(modulus);
 */