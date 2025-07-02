function calcularimc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classe(imc){
    if (imc < 18.5){
        return 'abaixo'
    } else if (imc < 30){
        return 'normal'
    }
}


//Main
(function (){
    const peso =  60
    const altura = 1.70

    const imc = calcularimc(peso , altura)
    console.log(classe (imc));
})(); // PODE SE AUTO EXECUTAR A FUNÇÃO USANDO OS "( )"


/* PODENDO SER ATRIBUIDA PARA OUTRA FUNCTION
main = function(){
    console.log(1)
}
*/

// const main2 = main / ATE SER ALTERADA DE NOME
