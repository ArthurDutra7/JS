
function nome(meu){
   return('Meu nome é',meu)
}

function idade(id){
    console.log('Meu nome é',nome('Arthur'))
    console.log('Tenho',id,'anos')
    if(id < 18){
        console.log('Sou menor de idade')
    } else {
        console.log('Sou maior de idade')
    }
}
idade(18)
