// Variable: Something that stores a value that could change over time.
var canvas;
var ctx;
var unit = 10;

// When the window (page) loads up, it calls the init function.
window.onload = init;

// Function: A group of task that could be called upon.
function init() {
    // Canvas in js connects with canvas in html.
    canvas = document.getElementById("myCanvas");
    // Setting up the context to 2D.
    ctx = canvas.getContext("2d");
    drawGoomba();
    drawRuler(10);
}