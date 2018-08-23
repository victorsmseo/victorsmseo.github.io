var canvas;
var ctx;
var unit = 200;

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // ctx.fillStyle = 'red';
    // ctx.fillRect(0,0,unit,unit);
}