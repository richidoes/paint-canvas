'use strict'

//set json of keycodes 
var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};
//set variables 
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
var pincel = "black";
var grosor = 1;
var contorno = cuadrito.width - 1;

//set event listener for keycodes
document.addEventListener("keydown", dibujarTeclado);

//set the point to start drawing
dibujarLinea("orange",149,149,151,151,papel, 3);

//Left/Bottom edges
dibujarLinea("green",1,1,0,contorno, papel, 3);
dibujarLinea("green",1,contorno,contorno,contorno, papel, 3);
//Right/Top edges
dibujarLinea("green",contorno,0,1,1, papel, 3);
dibujarLinea("green",contorno,contorno,contorno,1, papel, 3);

// Change color
function defcolor(c) {
	pincel = c;
}

//Change bulk
function defgrosor(g) {
	grosor = g;
}

//Creates the reference to print in canvas
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo, ancho){
	
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = ancho;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();

}

/* With this function we get the key data selected 
and its position, so if we keep it pressed, it will start 
drawing in that direction, and every time we change the key, 
we will get that new value and we will continue drawing.

If you want to increase the speed at which the line is drawn,
change the "movimiento" value to whatever you want */
function dibujarTeclado(evento){

	var colorcito = pincel;
	var movimiento = 2;

	switch(evento.keyCode){

		case teclas.UP:
			dibujarLinea(colorcito, x, y, x, y - movimiento, papel, grosor);
			y = y - movimiento;
			break;
		case teclas.DOWN:
			dibujarLinea(colorcito, x, y, x, y + movimiento, papel, grosor);
			y = y + movimiento;
		break;
		case teclas.LEFT:
			dibujarLinea(colorcito, x, y, x - movimiento, y, papel, grosor);
			x = x - movimiento;
		break;
		case teclas.RIGHT:
			dibujarLinea(colorcito, x, y, x + movimiento, y, papel, grosor);
			x = x + movimiento;
		break;
		default:
			console.log("Na bro, esa es otra tecla...");
			break;
	}
}