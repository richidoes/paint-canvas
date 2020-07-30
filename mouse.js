"use strict";

// Set variables
var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var rect = cuadro.getBoundingClientRect();
var xini = 0;
var yini = 0;
var pincel = "black";
var grosor = 1;
var nuevaLinea = false;

//set mouse events
document.addEventListener("mousedown", tocarMouse);
document.addEventListener("mouseup", soltarMouse);
document.addEventListener("mousemove", moverMouse);

// Change color
function defcolor(c) {
  pincel = c;
}

//Change bulk
function defgrosor(g) {
  grosor = g;
}

//Capture mouse position to start drawing
function tocarMouse(evento) {
  xini = evento.clientX - rect.left;
  yini = evento.clientY - rect.top;
  nuevaLinea = true;
  console.log("pincel a cruadro");
}

//will draw as long as you hold the mouse down
function moverMouse(evento) {
  if (nuevaLinea == true) {
    dibujarLinea(
      pincel,
      xini,
      yini,
      evento.clientX - rect.left,
      evento.clientY - rect.top,
      papel
    );
    xini = evento.clientX - rect.left;
    yini = evento.clientY - rect.top;
    console.log("dibujando...");
  }
}

//will stop drawing when you release your mouse
function soltarMouse(evento) {
  nuevaLinea = false;
  console.log("pincel arriba");
}

//Creates the reference to print in canvas
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = grosor;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
