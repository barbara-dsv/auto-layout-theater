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


function openModal() {
    const saibaMais = document.querySelectorAll(".saiba_mais");

    saibaMais.forEach(botao => {
        botao.addEventListener("click", function() {
            const filme = botao.closest(".filmes"); 
            const modal = filme.querySelector(".sinopse_filme");
            const btnSair = modal.querySelector(".sair"); 

            if (modal) {
                modal.style.display = "flex"; 
            }

            if (btnSair) {
                btnSair.addEventListener("click", function() {
                    modal.style.display = "none"; 
                });
            }
        });
    });
}

openModal();
