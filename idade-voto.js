function podeVotar(idade) {
    if (idade >= 18 && idade < 70) {
        console.log("Voto obrigatório.");
    } else if ((idade >= 16 && idade < 18) || idade >= 70) {
        console.log("Voto facultativo.");
    } else {
        console.log("Não vota.");
    }
}

podeVotar( 15 );   // Imprime: Não vota. 
podeVotar( 16 );   // Imprime: Voto facultativo. 
podeVotar( 18 );   // Imprime: Voto obrigatório. 
podeVotar( 70 );   // Imprime: Voto facultativo.