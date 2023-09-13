const MENSAJES = document.querySelector('.mensaje');

const COMBINACIONES = ["", "", "", "", "", "", "", "", ""]; 

const GANADORES = [ 
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let jugando = true; 
let turno = "X"; 

function main() {
  listeners(); 
}

function listeners() {
  document.querySelector('.tablero').addEventListener('click', clickearCelda);
  document.querySelector('.reiniciar').addEventListener('click', reiniciarJuego);
}

function clickearCelda(evento) {
  const celdaClickeada = evento.target;
  if (celdaClickeada.classList.contains('celda')) {
    const indice = Array.from(celdaClickeada.parentNode.children).indexOf(celdaClickeada);
    if (COMBINACIONES[indice] !== '' || !jugando) {
      return false;
    }
    dibujarCelda(celdaClickeada, indice);
    verificarGanador();
  }
}

function dibujarCelda(celdaClickeada, indice) {
  COMBINACIONES[indice] = turno;
  celdaClickeada.innerHTML = turno;
}

function verificarGanador() {
  let ganado = false;
  for (let i = 0; i < GANADORES.length; i++) {
    const combinacionGanadora = GANADORES[i];
    let celda1 = COMBINACIONES[combinacionGanadora[0]];
    let celda2 = COMBINACIONES[combinacionGanadora[1]];
    let celda3 = COMBINACIONES[combinacionGanadora[2]];
    
    if (celda1 !== '' && celda1 === celda2 && celda2 === celda3) {
      ganado = true;
      break;
    }
  }
  
  if (ganado) {
    MENSAJES.innerHTML = `Ganó ${turno}`;
    jugando = false;
    return;
  }
  
  let empatado = !COMBINACIONES.includes("");
  if (empatado) {
    MENSAJES.innerHTML = 'Empate';
    jugando = false;
    return;
  }
  
  definirTurno();
}

function definirTurno() {
  if (turno === "X"){
    turno = "O";
  }
  else if(turno === "O"){
    turno = "X";
  }
}

function reiniciarJuego() {
  jugando = true; 
  turno = "X"; 
  vaciarTablero();
  document.querySelectorAll('.celda').forEach(celda => celda.innerHTML = "");
  MENSAJES.innerHTML = "";
}

function vaciarTablero() {
  for (let i = 0; i < COMBINACIONES.length; i++) {
    COMBINACIONES[i] = '';
  }
}

main();