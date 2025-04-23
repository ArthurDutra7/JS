var num = document.getElementById('num')
var lista = document.getElementById('lista')
var res = document.querySelector('div#res')
var valores = []

function isNum(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inlista(n, l){
    if (l.indexOf(Number(n) != -1)){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNum(num.value) && !inlista(num.value)) {
       
    } else{
        window.alert('Valor inválido ou já encontrado na Lista.')
    }
    
    
    
    
    
    /*if(num.value == 0 || num.value > 100){
        window.alert('Valor inválido ou já encontrado na Lista.')
    } else{
        
    } */

}
