var num = document.querySelector('input#num')
var lista = document.querySelector('select#lista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {
       valores.push(Number(num.value))
       var item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado.`
       lista.appendChild(item)
       res.innerHTML = ''
    } else{
        window.alert('Valor inválido ou já encontrado na Lista.')
    }
    num.value = ''
    num.focus() 
    //Para a barra de escrita zerar ao ser adicionado.
}

function finalizar() {
    if (valores.length == 0){
        alert("Adicione valores antes de finalizar")
    } else{
        var total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        var soma = 0
        var media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        } 
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p> `
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p> `
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p> ` 
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p> ` 
        res.innerHTML += `<p>A média de todos os valores é ${media}.</p> ` 
    } 
 } 