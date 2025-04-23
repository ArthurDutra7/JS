//UTILIZANDO O (FOR) COM (IN)

var num = [1,7,3,9]

num.sort() // Ordem númerica do menor até o maior.

for(var pos in num){
    console.log(`Mostre os números do vetor: ${num[pos]}`)
}