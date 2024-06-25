//simular um jogo onde o usuário "pensa" em um número de 1 a 100 e o programa deve adivinhar o número usando o método de busca binária. Para simplificar, vamos supor que o número pensado pelo usuário é 50.

let min = 1;
let max = 100;
let chute = Math.floor((min + max)/2);
let numeroPensado = 50;

while (chute !== numeroPensado) {
    if (chute > numeroPensado) {
        max = chute;
    }
    else {
        min = chute;
    }
    chute = Math.floor((min + max)/2);
}
console.log("O numero pensado é: " + chute);