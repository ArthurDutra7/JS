const etanol = 3.15
const gasolina = 5.70
const litro = 8 //8 litros para cada km
const km = 260
const tipocombu = 'Gasolina'

const consumo = km / litro

if(tipocombu === 'etanol'){
    const valor = consumo * etanol
    console.log('O valor que será gasto se for escolhido Etanol será de:',valor)
} else{
    const valor = consumo * gasolina
    console.log('O valor que será gasto se for escolhido Gasolina será de:',valor)
}