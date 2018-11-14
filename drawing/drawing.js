var canvas;
var ctx;

var unit = 5;

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
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