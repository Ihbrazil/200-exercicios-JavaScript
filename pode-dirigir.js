function podeDirigir(idade) {
    if (idade >=18) {
        console.log("Pode dirigir");
    } else {
        console.log("Não pode dirigir");
    }
}

podeDirigir(15);   // Imprime: Não pode dirigir 
podeDirigir(18);   // Imprime: Pode dirigir
podeDirigir(36);   // Imprime: Pode dirigir