const {gets,print} = require('./pareimpar.js');

const numeros = gets();

let maiorpar = null
let menorimpar = null

for (let i = 0; i < numeros; i++){
    const numero=gets()
    if(numero%2===0){
        if(maiorpar === null || numero > maiorpar){
            maiorpar = numero
        }
    } else {
        if(menorimpar === null || numero < menorimpar ){
            menorimpar = numero
        } 
    }
    
}

print('Maior número par é '+ maiorpar)
print('Menor número ímpar é '+ menorimpar)