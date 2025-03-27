function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value == 0 || fano.value > ano) {
       alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement ('img')
        img.setAttribute('id','foto')
        
        if(sexo[0].checked){
            genero = 'Homem'
            if (idade>=0 && idade< 14){
                //criança
                img.setAttribute('src','foto.bebeho.jpg')
            } else if(idade <22){
                //jovem
                img.setAttribute('src','foto.jovemho.jpg')
            } else if (idade<55){
                //adulto
                img.setAttribute('src','foto.adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src','foto.velho.jpg')
            }
        } 
        else if(sexo[1].checked){
            genero = 'Mulher'
            if (idade>=0 && idade< 14){
                //criança
                img.setAttribute('src','foto.bebemu.jpg')
            } else if(idade <22){
                //jovem
                img.setAttribute('src','foto.jovemmu.jpg')
            } else if (idade<55){
                //adulto
                img.setAttribute('src','foto.adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src','foto.velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}