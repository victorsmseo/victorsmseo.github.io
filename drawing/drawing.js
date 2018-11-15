var canvas;
var ctx;

var unit = 5;

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.canvas.width  = 0.84*window.innerWidth;
	ctx.canvas.height = 0.7*window.innerHeight;
}

function transitionAnimation() {
    var nav = document.getElementById('sideNav');
    var can = document.getElementById("canvas");
    nav.classList.add('sideNavAnimation');
    can.classList.add('canvasAnimation2');
}

function goHome() {
    window.location.href = "../index.html";
}