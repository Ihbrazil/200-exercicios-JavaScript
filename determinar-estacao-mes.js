function determinarEstacao(mes) {
    if (mes < 3 || mes === 12) {
        console.log("Verão");
    } else if (mes < 6) {
        console.log("Outono");
    } else if (mes < 9) {
        console.log("Inverno");
    } else {
        console.log("Primavera");
    }
}

determinarEstacao(12); // Imprime: Verão 
determinarEstacao(4);  // Imprime: Outono 
determinarEstacao(7);  // Imprime: Inverno 
determinarEstacao(10); // Imprime: Primavera