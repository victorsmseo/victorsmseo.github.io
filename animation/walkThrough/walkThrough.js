var canvas;
var ctx;
var requestId;

var unit = 10;
var time = 0;
var positionX = 0;
var positionY = 0;
var isFacingRight = true;

const marioWidth = 12*unit;
const red = '#FF0000';
const brown = "#880000";
const orange = "#FFA800";
const blue = "#3D00FE";

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    positionX = canvas.width/2-marioWidth;
	startAnimation();
}

function startAnimation() {
	requestId = requestAnimationFrame(animationLoop);
}

function animationLoop(timeStamp) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

    var loopTime = 20;

    ctx.save();
    ctx.translate(positionX, canvas.height/3+positionY);
    if (time >= 0 && time < loopTime/2) {
        drawMario2();
    } else if (time >= loopTime/2 && time <= loopTime) {
        drawMario3();
    }
    ctx.restore();
	
	// Changes the x coordinates based on isFacingRight.
	if (positionX < canvas.width) {
		positionX += 10;
	} else {
		positionX = -marioWidth;
    }
    
    if (time >= loopTime) {
        time = 0;
    } else {
        time += 1;
    }

	requestId = requestAnimationFrame(animationLoop);
}