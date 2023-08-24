const move = document.getElementById("flecha-derecha");
const comiciones = document.getElementsByClassName("tabla-comisiones")[0];
const monedas = document.getElementsByClassName("tabla")[0];

let concurrent = 0;

move.addEventListener("click", incrementNumber);

function incrementNumber() {
  if (concurrent === 0) {
    ++concurrent;
    moveRight();
  } else {
    --concurrent;
    moveLeft();
  }
}

function moveRight() {
  comiciones.style.order = 1;
  monedas.style.order = 2;
}

function moveLeft() {
  comiciones.style.order = 2;
  monedas.style.order = 1;
}
