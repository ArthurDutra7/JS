class pessoa{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura
    }

    calculo(){
        return this.peso / (this.altura * this.altura);
    }

    classificacao(){
        const imc = this.calculo();
        if (imc < 18.5){
            return('abaixo do peso')
        } else if (imc < 30){
            return('normal')
        }
    }
}

const jose = new pessoa('Jose',70,1.75)
console.log(`O IMC de ${jose.nome} é`,jose.classificacao())

const arthur = new pessoa('Pedro',90,1.80)
console.log(`O IMC de ${arthur.nome} é`,arthur.classificacao())