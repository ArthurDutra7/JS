 class pessoa{
    nome;
    idade;
    
    constructor(nome,idade,){
        this.nome = nome
        this.idade = idade
    }

    descreva() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos e trabalho como ${this.profissao}`)
    }
}

function comparar(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`)
    }
}

const arthur = new pessoa('Arthur',22)
const pedro = new pessoa('Pedro',22)

comparar(arthur,pedro)