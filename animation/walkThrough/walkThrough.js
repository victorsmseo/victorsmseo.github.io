var canvas;
var ctx;
var requestId;
var WINDOW_WIDTH;
var WINDOW_HEIGHT;

var time = 0;
var positionX = 0;

const unit = 8;
const LOOP_TIME = 20;
const SPEED = 1;

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.canvas.width  = 0.85*window.innerWidth;
    ctx.canvas.height = 0.7*window.innerHeight;
    WINDOW_HEIGHT = canvas.height / unit;
    WINDOW_WIDTH = canvas.width / unit;
	startAnimation();
}

function startAnimation() {
	requestId = requestAnimationFrame(animationLoop);
}

function animationLoop(timeStamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawBackground();
    animateMario();
    changePositionX();
    changeTime();

	requestId = requestAnimationFrame(animationLoop);
}

function animateMario() {
	const POSITION_Y = WINDOW_HEIGHT-32;
    if (0 <= time && time < LOOP_TIME/2) {
        drawMario2(positionX, POSITION_Y);
    } else if (LOOP_TIME/2 <= time && time <= LOOP_TIME) {
        drawMario3(positionX, POSITION_Y);
    }
}

function changePositionX() {
	if (positionX <= WINDOW_WIDTH) {
		positionX += SPEED;
	} else {
		positionX = -16;
	}
}

function changeTime() {
    if (time >= LOOP_TIME) {
        time = 0;
    } else {
        time += 1;
    }
}

function drawBackground() {
	ctx.fillStyle = "#5B8BFF"; // Sky Blue
	ctx.fillRect(0,0,canvas.width,canvas.height);
    drawGroundBlocks(0,WINDOW_HEIGHT-16,WINDOW_WIDTH/16,1);
}