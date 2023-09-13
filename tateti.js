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

const MENSAJE_GANADOR = `Ganó ${turno}`; 

const MENSAJE_EMPATE = `Empate`;

let jugando = true; 
let turno = "X"; 

function main() {
  listeners(); 
}

function listeners() {
  document.querySelector('.tablero').addEventListener('click', clickearCelda);
  document.querySelector('.reiniciar').addEventListener('click', reiniciarJuego);
}

function mostrarMensaje(mensaje) {
  MENSAJES.innerHTML = mensaje;
}

function reiniciarJuego() {
  jugando = true; 
  turno = "X"; 
  vaciarTablero();
  document.querySelectorAll('.celda').forEach(celda => celda.innerHTML = "");
  mostrarMensaje("");
}

function clickearCelda(evento) {
  const celdaClickeada = evento.target;
  if (celdaClickeada.classList.contains('celda')) {
    const indiceCelda = Array.from(celdaClickeada.parentNode.children).indexOf(celdaClickeada);
    if (COMBINACIONES[indiceCelda] !== '' || !jugando) {
      return false;
    }
    dibujarCelda(celdaClickeada, indiceCelda);
    verificarGanador();
  }
}

function dibujarCelda(celdaClickeada, indiceCelda) {
  COMBINACIONES[indiceCelda] = turno;
  celdaClickeada.innerHTML = turno;
}

function verificarGanador() {
  let ganado = false;
  for (let i = 0; i < GANADORES.length; i++) {
    const combinacionGanadora = GANADORES[i];
    let pos1 = COMBINACIONES[combinacionGanadora[0]];
    let pos2 = COMBINACIONES[combinacionGanadora[1]];
    let pos3 = COMBINACIONES[combinacionGanadora[2]];
    
    if (pos1 !== '' && pos1 === pos2 && pos2 === pos3) {
      ganado = true;
      break;
    }
  }
  
  if (ganado) {
    mostrarMensaje(MENSAJE_GANADOR());
    jugando = false;
    return;
  }
  
  let empatado = !COMBINACIONES.includes("");
  if (empatado) {
    mostrarMensaje(MENSAJE_EMPATE());
    jugando = false;
    return;
  }
  
  definirTurno();
}

function definirTurno() {
  turno = turno === "X" ? "O" : "X";
}

function vaciarTablero() {
  for (let i = 0; COMBINACIONES.lenght(); i++) {
    COMBINACIONES[i] = '';
  }
}

main();
