const valor = 100
const pagamento = 1

function prod(produto,desconto){
    console.log('O valor do produto é',produto, '\n')
    return (produto - (produto *( desconto/100)))
}

function desconto(){
    if(pagamento === 1){
        console.log('O valor com desconto de 10% ficou',prod(valor,10))
    } else if(pagamento ===2){
        console.log('O valor com desconto de 15% ficou',prod(valor,15))
    } else if(pagamento ===3){
        console.log('O valor no cartão divido em 2x s/juros ficou',prod(valor,0))
    } else if(pagamento ===4){
        console.log('O valor no cartão divido em + de 2x ficou',prod(valor,-10))
    }
}
desconto()