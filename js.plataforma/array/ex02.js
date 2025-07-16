const lista = [2,4,6,7,9,10,13]

for (let i = 0; i < lista.length; i++) {
    const par = lista[i];
    const impar = lista[i];
    
    if(par%2 ===0){
        console.log('esses numeros são par',par);  
    } else if(par%2 ===1){
        console.log('esses numeros são impar',impar);  
    }

}