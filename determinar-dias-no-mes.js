function determinarDiasNoMes(mes) {
    switch (mes) {
        case 2:
            console.log("28 ou 29 dias");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("30 dias");
            break;
        default:
            console.log("31 dias");
    }
} 

determinarDiasNoMes(2); // Imprime: 28 ou 29 dias 
determinarDiasNoMes(4); // Imprime: 30 dias 
determinarDiasNoMes(1); // Imprime: 31 dias