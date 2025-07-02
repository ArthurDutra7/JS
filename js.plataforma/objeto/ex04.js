// Class - define o que deve ser
class pessoa{
    nome;
    idade;

    descreva() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

// Instancia - o que ele pode ser, podendo ser mais de um MAS seguem o mesmo padrão
const arthur = new pessoa()
arthur.nome = 'Arthur Souza'
arthur.idade = 18

const pedro = new pessoa()
pedro.nome = 'Pedro'
pedro.idade = 22

arthur.descreva()
pedro.descreva()


/*
const dados = {
    nome:'Arthur souza',
    idade:18,
    trabalho:'Programador',

    descreva: function(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos, e trabalho como ${this.trabalho}`)
    }
}
*/

// (dados['nome']) - PODENDO ESCOLHER DINAMICAMENTE

// dados.altura=1.71; ADICIONAR POR FORA

// delete dados.idade - PARA REMOVER