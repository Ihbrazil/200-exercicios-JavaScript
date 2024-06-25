//Usando um laço for, imprima todos os números primos de 1 a 100. Descrição: Neste exercício, você precisa percorrer todos os números de 1 a 100 e imprimir apenas aqueles que são primos. Lembre-se, um número primo é um número natural maior do que 1 que não tem divisores positivos outros que 1 e ele mesmo.

for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let div = 2; div < num && isPrime; div++) {
        if (num % div === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}