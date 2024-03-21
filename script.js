
function carregar(){
    let img= document.querySelector('#image')
    let msg = document.getElementById('msg')
    let data = new Date()
    let minute = data.getMinutes()
   //let hora = 9
    let hora = data.getHours()
    msg.innerHTML = `<strong>Agora são: ${hora}:${minute} horas </strong>`

    if(hora >= 0 && hora<=12){
        img.src = 'manha.png'
        document.body.style.backgroundColor = '#9DABB8'
        
    }else if(hora<18){
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#ECB468'
        
}else{
    img.src = 'noite.png'
    document.body.style.backgroundColor = '#314550'

}
}
