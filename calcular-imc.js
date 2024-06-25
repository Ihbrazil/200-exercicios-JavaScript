function calcularIMC(peso, altura) {
    var imc = peso / (altura*altura);

    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 25) {
        console.log("Peso Normal");
    } else if (imc >= 25 && imc < 30) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidade");
    }
}

calcularIMC( 60 , 1.7 );   // Imprime: Peso normal 
calcularIMC( 80 , 1.7 );   // Imprime: Sobrepeso 
calcularIMC( 90 , 1.7 );   // Imprime: Obesidade
calcularIMC(90,1.78);