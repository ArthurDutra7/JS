const lista =[5,3,4,1,14,8];
let i = 0

function gets(){
    const num = lista[i];
    i++;
    return num;
}

function print(texto){
    console.log(texto)
}

module.exports = { gets,print }
