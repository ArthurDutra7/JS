const {gets,print} = require('./ex01.js')

const quantidade = gets();
let maior = 0;

for (let i = 0; i < quantidade; i++) {
    const num = gets();
    if (num > maior){
        maior = num;
    }
    
}

print(maior);