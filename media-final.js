function situacaoEstudante(mediaFinal) {
    if(mediaFinal >= 7) {
        console.log("Aprovado");
    } else if(mediaFinal >= 5 && mediaFinal < 7) {
        console.log("Em recuperação.");
    } else {
        console.log("Reprovado.");
    }
}

situacaoEstudante( 7 );   // Imprime: Aprovado. 
situacaoEstudante( 6 );   // Imprime: Em recuperação. 
situacaoEstudante( 4 );   // Imprime: Reprovado.