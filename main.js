// Obtem todos os elementos dos botões
const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio); // Obtem os dados do elemento
    if (elemento && elemento.localName === 'audio') { // Verifica se elemento é nulo e se é um audio   
        elemento.play();
    }else {
        console.log('Elemento não encontrado ou seletor inválido!');
    }
}

// Percorrer a Lista
for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i]; // Configura a tecla
    const instrumento = tecla.classList.item(1); // Configura o instrumento
    const idAudio = `#som_${instrumento}`; // Configura o id do Audio completo
tecla.onkeydown = function (teclado) { // Evento que vai capturar as informações da tecla no teclado
        if (teclado.code === "Enter" || teclado.code === "Space") {
            listaDeTeclas[i].classList.add('ativa');
        }
    };
    tecla.onclick = function () {
        tocaSom(idAudio); // toca o som do instrumento de acordo com a tecla
    };
    tecla.onkeyup = function () {
        listaDeTeclas[i].classList.remove('ativa');
    };

}
