var amigo = {
    nome: 'jose', 
    sexo: 'Homem', 
    peso: 85.4, 
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    } 
}
amigo.engordar(3)
console.log(`${amigo.nome} um ${amigo.sexo} que pesa ${amigo.peso}`)