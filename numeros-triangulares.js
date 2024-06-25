//Usando um laço for, imprima os primeiros 10 números triangulares (n*(n+1)/2). Descrição: Neste exercício, você deve imprimir os primeiros 10 números triangulares. Um número triangular é obtido através da fórmula n*(n+1)/2, onde n é a posição do número na sequência. Por exemplo, os primeiros 5 números triangulares são 1, 3, 6, 10, 15...

for (let n=1;n<=10;n++) {
    let triangular = n*(n+1)/2;
    console.log(triangular);
}