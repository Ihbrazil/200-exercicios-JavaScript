function verificaSemafaro(cor) {
    if (cor === "verde") {
        console.log("Siga em Frente");
    }else if (cor === "amarelo") {
        console.log("Atenção, diminua a velocidade");
    }else if (cor === "vermelho") {
        console.log("Pare seu veículo");  
    }else {
        console.log("Envie uma cor válida");
    }
}

verificaSemafaro("verde");   // Imprime: Siga em frente
verificaSemafaro("amarelo"); // Imprime: Atenção, diminua a velocidade
verificaSemafaro("vermelho"); // Imprime: Pare seu veículo
verificaSemafaro("azul");     // Impime: Envie uma cor válida