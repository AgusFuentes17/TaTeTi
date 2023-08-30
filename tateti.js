let turno = "X";

let ganador=[ 
    [0, 1, 2],
    [0, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const celdas = document.querySelectorAll(".cuadro");
const tablero = document.getElementById("tablero");
let combinaciones = ["","","","","","","","",""];


jugar();

function jugar(){
    celdas.forEach(celdas=>celdas.addEventListener('click',ponerPosicion));
}

function ponerPosicion(){
    const indice = this.dataset.index;
    if(turno=="X" && opciones[indice]==""){
        opciones[indice]="X";
        turno = "O";
    }
    else if(turno=="O" && opciones[indice]==""){
        opciones[indice]="O";
        turno = "X";
    }
    celdas.innerHTML=turno;
}

function reiniciarJuego(){
    options=["","","","","","","","",""];
    turno="X";
  
    celdas.forEach(celda=>{celdas.innerHTML="";});
}