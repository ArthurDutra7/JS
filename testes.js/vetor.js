var num = [9 ,4 ,3 ,6, 7]

num.sort() // - Coloca em ordem númerica os valores do vetor.

num.push(14) // - Coloca o valor no ultimo indice do vetor.

console.log(`Vetor = ${num}.`)

console.log(`O vetor tem ${num.length} posições.`) 
// Mostra quantas posições tem no vetor.
console.log(`O 1 vetor é ${num[0]}.`)
console.log(`O ultimo vetor é ${num[5]}.`)  

var pos = num.indexOf(6) // Mostra qual o indice que tem esse valor, Caso não tenha esse valor no Vetor, irá mostrar (-1). 

console.log(`O valor 6 está na posição ${pos}`)


/* PODENDO SER FEITO ASSIM - Simplicando

for(var pos=0;pos<num.length;pos++){
    console.log(`Mostre os números do vetor ${num[pos]}`)
}

SIMPLIFICANDO AINDA +
*/

/*
for(var pos in num){
    console.log(`Mostre ${num[pos]}`)
}
var pos - posição dos indices no Vetor.
*/

