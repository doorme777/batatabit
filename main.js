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
  monedas.style.removeProperty("animation");

  move.style.right = "none";
  move.style.left = "2rem";
  move.style.transform = "rotate(180deg)";

  comiciones.style.order = 1;
  comiciones.style.animation = "aparecer 0.3s ease-in-out";

  monedas.style.order = 2;
}

function moveLeft() {
  move.style.removeProperty("left");
  move.style.removeProperty("transform");
  comiciones.style.removeProperty("animation");

  comiciones.style.order = 2;
  monedas.style.order = 1;

  monedas.style.animation = "irse 0.3s ease-in-out";
}
