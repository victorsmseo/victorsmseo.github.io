var canvas;
var ctx;
var unit = 21;

const mario1Width = 12*unit;
const mario2Width = 11*unit;

window.onload = init;

const red = '#FF0000';
const brown = "#880000";
const orange = "#FFA800";
const blue = "#3D00FE";

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    ctx.translate(4*unit,4*unit);
    drawMario1();

    ctx.translate(mario1Width+9*unit,0);
    drawMario2();

    ctx.translate(mario2Width+7*unit,0);
    drawMario3();
}