function verificarNumero(num) {
    if (num >0) {
        console.log("O número é positivo");
    } else if (num < 0) {
        console.log("O número é negativo");
    } else {
        console.log("O número é zero");
    }
}

verificarNumero(10);
verificarNumero(-5);
verificarNumero(0);