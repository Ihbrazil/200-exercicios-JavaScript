//Usando um laço for, imprima todos os números perfeitos de 1 a 100 (um número é perfeito se a soma de seus divisores, incluindo 1 mas não ele mesmo, é igual ao próprio número).Este código usa um laço for externo para iterar de 1 a 100. Em cada iteração, inicia uma variável soma como 0 e então usa um laço for interno para iterar de 1 até i. Se i for divisível por j, j é somado à soma. Depois que o laço interno é concluído, verifica se a soma é igual a i. Se for, imprime i como um número perfeito. 

for (let i = 1 ; i <= 100 ; i++)
{ 
       let soma = 0 ; 
       for ( let j = 1 ; j < i; j++)
        { 
           if (i % j === 0)
            { 
             soma += j; 
            } 
        } 
        if (soma === i) {
        console .log(i); 
        }

}