const {gets,print} = require('./media.js')

const media = gets();

console.log(`Você ficou com uma média de: ${media}`);

if(media>=7){
    print('Está Aprovado')
} else if(media>=5 && media<7){
    print('Está de Recuperação')
} else if(media>0){
    print('Está Reprovado')
} else{
    print('Número Inválido')
}
