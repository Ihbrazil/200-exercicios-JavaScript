function dentroDoIntervalo(numero, limiteInferior, limiteSuperior) {
    if (numero >= limiteInferior && numero <= limiteSuperior) {
        console.log(numero + " está dentro do intervalo");
    } else {
        console.log(numero + " está fora do intervalo");
    }
}

dentroDoIntervalo(5, 1, 10); // Imprime: 5 está dentro do intervalo 
dentroDoIntervalo( 15, 1, 10); // Imprime: 15 está fora do intervalo