function verificarBissexto(ano){
    if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
        console.log(ano + " é um ano bissexto");
    } else {
        console.log(ano + " não é um ano bissexto");
    }
}

verificarBissexto( 2000 );   // Imprime: 2000 é um ano bissexto 
verificarBissexto( 2001 );   // Imprime: 2001 não é um ano bissexto
verificarBissexto( 2100 );   // Imprime: 2100 não é um ano bissexto
verificarBissexto( 2016 );