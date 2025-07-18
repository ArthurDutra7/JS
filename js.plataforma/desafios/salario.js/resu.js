const {gets,print} = require('./salari.js');

const salariobruto = gets();
const adicional = gets()

print('O valor do sálario bruto é '+salariobruto)

function percentual(valor,percentual){
    return valor * (percentual/100)
}

function pegarpercentual(salario){

    if(salario >=0 && salario <= 1100){
        return 5;
    } else if(salario <= 2500){
        return 10;
    } else if(salario > 2500){
        return 15;
    } else{
        print('Valor ínvalido.')
    }
}

const basesalario = pegarpercentual(salariobruto);
const imposto = percentual(salariobruto,basesalario);
const valorfinal = salariobruto - imposto + adicional;

print(valorfinal);