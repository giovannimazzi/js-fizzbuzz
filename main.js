//Variabile per mostrare l'output
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

  /*Se la variabile di output è ancora stringa vuota, 
    le assegno il valore corrente del contatore*/
  if (!output) {
    output = i;
  }

  //Stampo il valore della variabile di output
  console.log(output);
}
