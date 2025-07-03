class carro{
    marca;
    cor;
    gasto;

    constructor(marca,cor,gasto){
        this.marca = marca;
        this.cor = cor;
        this.gasto= gasto;        
    }

    calculo(distancia,preco){
        return (distancia * this.gasto) * preco;
    }

}
const bmw = new carro('BMW','vermelha',1/8);
console.log('Minha bmw gasta',bmw.calculo(80,6),'reais na viagem')

const meca = new carro('Mercedes','Prata',1/11)
console.log('Minha Mercedes gasta',meca.calculo(70,6),'reais na viagem')
