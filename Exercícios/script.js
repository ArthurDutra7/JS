function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'bom-dia.jpg'
    } else if (hora >= 12 && hora >= 17) {
        //boa tarde 
        img.src = 'boa-tarde.jpg'
    } else {
        //boa noite
        img.src = 'boa-noite.jpg'
    }

        

}