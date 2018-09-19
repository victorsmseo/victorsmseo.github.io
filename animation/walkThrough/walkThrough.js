var canvas;
var ctx;
var requestId;

var unit = 10;
var time = 0;
var positionX = 0;
var positionY = 20*unit;
var isFacingRight = true;

const marioWidth = 12*unit;
const loopTime = 20;
const speed = 10;

const red = "#FF0000";
const brown = "#880000";
const orange = "#FFA800";
const blue = "#3D00FE";

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
	startAnimation();
}

function startAnimation() {
	requestId = requestAnimationFrame(animationLoop);
}

function animationLoop(timeStamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Background
    ctx.fillStyle = "#5B8BFF";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.translate(0, 36*unit);
    ctx.scale(0.5,0.5);
    drawGroundBlocks(17,2);
    ctx.restore();

    // Animation
    walkingAnimation();
    changePositionX();
    changeTime();

	requestId = requestAnimationFrame(animationLoop);
}

// Draw the character depending on .
function walkingAnimation() {
    ctx.save();
    ctx.translate(positionX, positionY);
    if (time >= 0 && time < loopTime/2) {
        drawMario2();
    } else if (time >= loopTime/2 && time <= loopTime) {
        drawMario3();
    }
    ctx.restore();
}

// Change the x position
function changePositionX() {
    if (positionX < canvas.width) {
		positionX += speed;
	} else {
		positionX = -marioWidth;
    }
}

function changeTime() {
    if (time >= loopTime) {
        time = 0;
    } else {
        time += 1;
    }
}