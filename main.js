// * VERSIONE ORIGINALE

/* //Variabile per mostrare l'output
let output;

//Ciclo che scorre i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
  //Inizializzo variabile di output con stringa vuota
  output = "";

  //Intercetto multipli di 3
  if (i % 3 === 0) {
    output += "Fizz";
  }

  //Intercetto multipli di 5
  if (i % 5 === 0) {
    output += "Buzz";
  }

  //Se la variabile di output è ancora stringa vuota, 
  //le assegno il valore corrente del contatore
  if (!output) {
    output = i;
  }

  //Stampo il valore della variabile di output
  console.log(output);
} */
//***************************************************** */

// * VERSIONE BONUS STEFANO

// ? Non usare la concatenazione, ma stampa diretta

/* //Variabile per mostrare l'output
let output;

//Variabili per individuare multipli
let isMulti3, isMulti5;

//Ciclo che scorre i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
  //Inizializzo le variabili dei multipli
  isMulti3 = false;
  isMulti5 = false;

  //Intercetto multipli di 3
  if (i % 3 === 0) {
    isMulti3 = true;
  }

  //Intercetto multipli di 5
  if (i % 5 === 0) {
    isMulti5 = true;
  }

  if (isMulti3 && isMulti5) {
    output = "FizzBuzz";
  } else if (isMulti3) {
    output = "Fizz";
  } else if (isMulti5) {
    output = "Buzz";
  } else {
    output = i;
  }

  //Stampo il valore della variabile di output
  console.log(output);
} */
//***************************************************** */

// * VERSIONE BONUS TIZIANO

// ? fai scegliere all'utente un numero 
// ? custom di cui sostituire tutti i multipli con la parola "Boom"

//Variabile per mostrare l'output
let output;

//Chiedo all'utente numero custom
const 

//Ciclo che scorre i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
  //Inizializzo variabile di output con stringa vuota
  output = "";

  //Intercetto multipli di 3
  if (i % 3 === 0) {
    output += "Fizz";
  }

  //Intercetto multipli di 5
  if (i % 5 === 0) {
    output += "Buzz";
  }

  //Se la variabile di output è ancora stringa vuota, 
  //le assegno il valore corrente del contatore
  if (!output) {
    output = i;
  }

  //Stampo il valore della variabile di output
  console.log(output);
}

//***************************************************** */


