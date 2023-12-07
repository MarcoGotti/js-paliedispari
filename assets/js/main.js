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
/* ************************************************************************** */

//PALINDROMA


//function to create drow (word-reverse)
function paliCheck(word){
    let drow = ''; 
    for (let i = word.length - 1; i >= 0; i--) {
        let element = word[i];
        drow += element; //drow += word[i]   senza creare element
        // drow = element + drow ciclo da inizio a fine e non da fine a inizio
    } 
    return drow
}

//input word



//final check on the click
const buttonEl = document.querySelector('button');
const outputEl = document.getElementById('output');
buttonEl.addEventListener('click', function () {
    const word = document.querySelector('input').value;
    let reverse = paliCheck(word);
    if (word === reverse) {
    outputEl.innerText = (word + ' is palindroma');    
    outputEl.classList.add('text-bg-success');
    outputEl.classList.remove('text-bg-danger');
    } else {
    outputEl.innerText = (word + ' is not palindroma');
    outputEl.classList.add('text-bg-danger');
    outputEl.classList.remove('text-bg-success');
    }
})



/* ***************************************************************** */

//PARI O DISPARI

//declare the winner
document.getElementById('button').addEventListener('click', function (){
    //pick even  or odd
    const userChoice = document.getElementById('inputChoice').value
    //pick a numb 1 to 5
    const userNumber = Number(document.getElementById('inputNumber').value)
    //generate random number 1-5 with a function
    function randomNumber(min, max) {
        return Math.floor(Math.random() * max) + min;
    }
    //Sum the two numbers and determine if sum is even or odd
    function sum(num_1, num_2){
        return ((num_1 + num_2) % 2)
    }

    const rdmNumber = Number(randomNumber(1, 5));
    const total = (userNumber + rdmNumber);
    const modulus = sum(userNumber, rdmNumber);

    if (((modulus == 0) && (userChoice === '1')) || ((modulus !== 0) && (userChoice === '2'))) {
        document.querySelector('.result').classList.remove('d-none');
        document.querySelector('.result').classList.add('text-bg-success');
        document.querySelector('.result').classList.remove('text-bg-danger');
        document.getElementById('numero').innerText = (`${userNumber} + ${rdmNumber} = ${total}`);
        document.getElementById('thumb').innerHTML = ('<i class="fa-solid fa-thumbs-up"></i>' + ' you win! ' + (userNumber + rdmNumber) + ' is ' + userChoice);
    } else {
        document.querySelector('.result').classList.remove('d-none');
        document.querySelector('.result').classList.add('text-bg-danger');
        document.querySelector('.result').classList.remove('text-bg-success');
        document.getElementById('numero').innerText = (`${userNumber} + ${rdmNumber} = ${total}`);
        document.getElementById('thumb').innerHTML = ('<i class="fa-solid fa-thumbs-down"></i>' + ' you lose! ' + (userNumber + rdmNumber) + ' is not ' + userChoice);  
    }
})






