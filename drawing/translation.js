var canvas;
var ctx;

const UNIT = 20;

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    translatedMario();
}

function translatedRect() {
    ctx.save(); // 1. Saving the translation rules.
    ctx.translate(1*UNIT,1*UNIT); // 2. Translate the image below to specified x & y coordinates.
    ctx.fillRect(0,0,10*UNIT,10*UNIT);
    ctx.restore(); // 3. Resets the translation rules.
}

function translatedMario() {
    ctx.save();
    ctx.translate(20*UNIT,5*UNIT);
    drawMario1(0,0);
    ctx.resotre();
}

function translated__() {
    
}