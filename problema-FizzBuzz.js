//Usando um laço while, imprima os números de 1 a 100, mas para múltiplos de 3 imprima "Fizz" e para múltiplos de 5 imprima "Buzz". Para números que são múltiplos de ambos, imprima "FizzBuzz" (Problema FizzBuzz). Descrição: Neste exercício, você precisa imprimir os números de 1 a 100, mas com uma condição especial. Se um número for múltiplo de 3, deve imprimir "Fizz" e o número. Se for múltiplo de 5, deve imprimir "Buzz" e o número. E se for múltiplo de ambos (3 e 5), deve imprimir "FizzBuzz" e o número.

let num = 1;
while (num < 100) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz " + num);
    }
    else if (num % 3 === 0) {
        console.log("Fizz " + num);
    }
    else if (num & 5 === 0) {
        console.log("Buzz " + num);
    }
    else {
        console.log(num);
    }
    num++;
}