function pegarHoraAtual (){
    const elementoP = document.querySelector('.hora-atual')
    const agora = new Date();
    let periodo = agora.getHours() >= 12 ? 'PM' : 'AM';

    let hora = `${agora.getHours()}:${agora.getMinutes()} ${periodo}`

    if(agora.getMinutes() <= 9){
        hora = `${agora.getHours()}:0${agora.getMinutes()}  ${periodo}`
    }
    elementoP.textContent = hora;
}

pegarHoraAtual()   

    const saibaMais = document.querySelector(".saiba_mais")
    const modal = document.querySelector(".sinopse_filme")
    const btnSair = document.querySelector(".sair")

    saibaMais.onclick = function(){
        modal.showModal()
    }

    btnSair.onclick = function(){
        modal.close()
    }






