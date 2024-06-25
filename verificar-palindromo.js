function verificarPalindromo(palavra) {
    var palavraInvertida = palavra.split('').reverse().join('');
    if(palavra == palavraInvertida) {
        console.log(palavra + " é um palíndromo");
    } else {
        console.log(palavra + " não é um palíndromo");
    }
}

verificarPalindromo( "arara" );   // Imprime: arara é um palíndromo 
verificarPalindromo( "gato" );   // Imprime: gato não é um palíndromo

// split(''): Este método é usado para dividir uma string em um array de substrings. Quando você passa uma string vazia como argumento (''), ele divide a string original em um array de caracteres individuais.

//reverse(): Este método é usado para inverter a ordem dos elementos de um array. Quando aplicado ao array de caracteres criado pelo método split, ele inverte a ordem dos caracteres da palavra.

//join(''): Este método é usado para juntar todos os elementos de um array em uma única string. Passando uma string vazia como argumento (''), ele concatena os caracteres do array invertido sem adicionar nenhum caractere entre eles.