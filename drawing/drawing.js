var canvas;
var ctx;

var unit = 5;

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // drawRuler(10);
    // ctx.fillRect(unit,unit,10*unit,10*unit);
}