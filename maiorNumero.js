function maiorNumero(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        console.log(n1 + " é o maior número");
    } else if (n2 > n1 && n2 > n3) {
        console.log(n2 + " é o maior número");
    } else {
        console.log(n3 + " é o maior número");
    }
}

maiorNumero(1, 2, 3);   // Imprime: 3 é o maior número 
maiorNumero(5, 3, 4);   // Imprime: 5 é o maior número 
maiorNumero(7, 8, 7);   // Imprime: 8 é o maior número