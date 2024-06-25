//imprimir os primeiros 10 números da sequência de Fibonacci. A sequência de Fibonacci é uma sequência de números onde cada número subsequente é a soma dos dois anteriores. Ela começa assim: 0, 1, 1, 2, 3, 5, 8, 13...

let num1 = 0;
let num2 = 1;
console.log(num1);
console.log(num2);
for (let i = 2;i < 10;i++) {
    let nextNum = num1 + num2;
    console.log(nextNum);
    num1 = num2;
    num2 = nextNum;
}