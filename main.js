const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio); 
    if (elemento && elemento.localName === 'audio') { 
        elemento.play();
    }else {
        console.log('Elemento não encontrado ou seletor inválido!');
    }
}

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i]; 
    const instrumento = tecla.classList.item(1); 
    const idAudio = `#som_${instrumento}`; 
tecla.onkeydown = function (teclado) {
        if (teclado.code === "Enter" || teclado.code === "Space") {
            listaDeTeclas[i].classList.add('ativa');
        }
    };
    tecla.onclick = function () {
        tocaSom(idAudio); 
    };
    tecla.onkeyup = function () {
        listaDeTeclas[i].classList.remove('ativa');
    };

}
