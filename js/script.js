function carregar() {
    var msg = window.document.getElementById('msg') 
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = '/image/img01.jpg'
        document.body.style.background = '#F1C471'    
    } else if (hora >= 12 && hora <= 18) {
        img.src = '/image/img02.jpg'
        document.body.style.background = '#EAC4B0'
    } else { 
        img.src = '/image/img03.jpg'
        document.body.style.background = '#003362'
    }
 }


