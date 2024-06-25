function calcularMedia (nota1, nota2) {
    var media = (nota1 + nota2) / 2 ; 
    if (media >= 7) { 
       console .log("Aluno aprovado com a média: " + media);
    } else { 
       console .log("Aluno reprovado com a média: " + media); 
    } 
} 
 calcularMedia( 8 , 6 );   // Imprime: Aluno aprovado com a média: 7 
calcularMedia( 5 , 6 );   // Imprime: Aluno reprovado com a média: 5.5

