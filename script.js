let quantidadeCartas = Number(prompt('Quer iniciar o jogo com quantas cartas? Min-4; Max-14'));
let jogadas = 0
let arrayCartasTotal = [
    'bobrossparrot.gif',
    'bobrossparrot.gif',
    'explodyparrot.gif',
    'explodyparrot.gif',
    'fiestaparrot.gif',
    'fiestaparrot.gif',
    'metalparrot.gif',
    'metalparrot.gif',
    'revertitparrot.gif',
    'revertitparrot.gif',
    'tripletsparrot.gif',
    'tripletsparrot.gif',
    'unicornparrot.gif',
    'unicornparrot.gif',
];

comecarJogo();


function comecarJogo(){
    let carta = document.querySelector('.carta');
    carta.innerHTML = '';
    let arrayCartasJogo = [];
    while (quantidadeCartas < 4 || quantidadeCartas > 14 || quantidadeCartas % 2 === 1 || isNaN(quantidadeCartas)) {

        quantidadeCartas = Number(prompt('Quer iniciar o jogo com quantas cartas? Min-4; Max-14'));
    }

    for (let i = 0; arrayCartasJogo.length < quantidadeCartas; i++) {
        arrayCartasJogo.push(arrayCartasTotal[i]);
    }

    arrayCartasJogo.sort(parametro);
    function parametro() {
        return Math.random() - 0.5;  /**EMBARALHA OS PARES */
      }

    for (let i = 0; i < quantidadeCartas; i++) {
        carta.innerHTML += `

            <div class="ficha" onclick="clicar(this)">
                <div class="frente-lado token">
                <img src="imagens/front 1.svg"/>                
                </div>
                <div class="costas-lado token">
                <img src="imagens/${arrayCartasJogo[i]}"/>                
                </div>
            </div>
        `
    }
}
/**FIM DA RENDERIZACAO DO HTML */

function clicar(element) {
    let cartaClicada = document.querySelectorAll('.ficha.selecionado');
    if (cartaClicada[0] === undefined) {
        let desvirada = element.querySelector('.frente-lado')
        let virada = element.querySelector('.costas-lado')
        desvirada.classList.add('frente-lado-vira');
        virada.classList.add('costas-lado-vira');
        element.classList.add('selecionado');
    } else if (cartaClicada[1] === undefined) {
        let desvirada = element.querySelector('.frente-lado');
        let virada = element.querySelector('.costas-lado')
        desvirada.classList.add('frente-lado-vira');
        virada.classList.add('costas-lado-vira');
        element.classList.add('selecionado');
      }

      verificaPar()
}

function verificaPar() {
    let cartaClicada = document.querySelectorAll('.ficha.selecionado');
    if (cartaClicada.length === 2) {
      if (cartaClicada[0].innerHTML === cartaClicada[1].innerHTML) {
        par();
      } else {
        setTimeout(naoPar, 1000);
      }
    }
  }
  
  function par() {
    let cartaClicada = document.querySelectorAll('.ficha.selecionado');
    cartaClicada[0].classList.remove('selecionado');
    cartaClicada[1].classList.remove('selecionado');
    cartaClicada[0].classList.add('par');
    cartaClicada[1].classList.add('par');
    jogadas = jogadas + 2
    finalJogo();
  }
  
  function naoPar() {
    let cartaClicada = document.querySelectorAll('.ficha.selecionado');
    let viradaFrente = document.querySelectorAll('.selecionado .frente-lado-vira');
    let viradaCostas = document.querySelectorAll('.selecionado .costas-lado-vira');
    viradaFrente[0].classList.remove('frente-lado-vira');
    viradaFrente[1].classList.remove('frente-lado-vira');
    viradaCostas[0].classList.remove('costas-lado-vira');
    viradaCostas[1].classList.remove('costas-lado-vira');
    cartaClicada[0].classList.remove('selecionado');
    cartaClicada[1].classList.remove('selecionado');
    jogadas = jogadas + 2
  }
  
  function finalJogo() {
    let cartaCombinada = document.querySelectorAll('.par');
    if (cartaCombinada.length === Number(quantidadeCartas)) {   /** MENSAGEM DE FINAL DO JOGO*/
      alert(`Você ganhou em ${jogadas} jogadas!`);
    }
  }