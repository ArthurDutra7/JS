const conjunto = [20,24,29,45,38,98];
let i = 0;

function gets(){
    const valor = conjunto[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
} 

module.exports = { gets,print }
 