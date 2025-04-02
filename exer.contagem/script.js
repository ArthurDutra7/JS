function contar(){

    var inicio = document.getElementById('txtin')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpa')
    var resu = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length  == 0 || passo.value.length  == 0) {
        resu.innerHTML = 'Impossível a contagem!'
        //alert('[ERRO] Faltam dados, tente novamente!')
    } else{
        resu.innerHTML = 'Contando: <br> '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if( p <= 0){
            alert('Passo inválido! Considerando PASSO 1.')
            p = 1
        }
        if(i < f){
            //contagem crescente
            for (var c = i; c <= f; c += p ){
                resu.innerHTML += ` ${c} 🔜 `
            }
            
        } else {
            //contagem regressiva
            for(c = i; c >= f; c -= p){
                resu.innerHTML += ` ${c} 🔜 `
            }
        }
        resu.innerHTML += `📍 `
}

       




}
