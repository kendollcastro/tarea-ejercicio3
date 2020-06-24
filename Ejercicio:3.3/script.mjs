// Ejercicio 3.3
//Agregamos la funcionalidad del usuario

let numero = parseInt(prompt("Enter your number: "));
let asteristico = ' ';
let contador = 0;

while(contador < numero){
    asteristico = asteristico + ' *';
    while(asteristico < numero){
        asteristico = asteristico + ' *';
    }
    console.log(asteristico);
    contador++;
}
