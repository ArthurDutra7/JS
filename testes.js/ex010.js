var agora = new Date()
//Tem que ter isso junto
var hora = agora.getHours() 
//Para pegarmos a hora real do computador

console.log(`Agora são exatamente ${hora} horas.`)
if (hora <= 5) {
    console.log('Boa madrugada.')
}
else if (hora < 12) {
    console.log('Bom dia.')
}
else if (hora <= 17) {
    console.log('Boa tarde.')
}
else if (hora > 0){
    console.log('Boa noite.')
}

