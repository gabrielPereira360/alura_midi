// Obtem todos os elementos dos botões
const listaDeTeclas = document.querySelectorAll('.tecla');

function  tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

// Percorrer a Lista
let i = 0;
while (i < listaDeTeclas.length){
    listaDeTeclas[i].onclick = tocaSomPom;
    i++;
    console.log(i);
}