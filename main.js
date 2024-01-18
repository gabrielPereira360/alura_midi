// Obtem todos os elementos dos botões
const listaDeTeclas = document.querySelectorAll('.tecla');

function  tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play(); // Faz a reprodução do som
}

// Percorrer a Lista
for (let i = 0; i < listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i]; // Configura a tecla
    const instrumento = tecla.classList.item(1); // Configura o instrumento
    const idAudio = `#som_${instrumento}`; // Configura o id do Audio completo
    tecla.onclick = function (){
        tocaSom(idAudio); // toca o som do instrumento de acordo com a tecla
    };
}
