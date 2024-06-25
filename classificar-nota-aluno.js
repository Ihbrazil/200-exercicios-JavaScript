function classificarAluno(nota) {
    if (nota >= 90) {
        console.log("A");
    } else if (nota >= 80) {
        console.log("B");
    } else if (nota >=70) {
        console.log("C");
    } else if (nota >= 60) {
        console.log("D");
    } else {
        console.log("E");
    }
}

classificarAluno(95); // Imprime: A 
classificarAluno(82); // Imprime: B 
classificarAluno(74); // Imprime: C 
classificarAluno(62); // Imprime: D 
classificarAluno(55); // Imprime: F