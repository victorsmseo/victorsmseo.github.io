var canvas;
var ctx;
var requestId;
var WINDOW_WIDTH;
var WINDOW_HEIGHT;

var positionX = 0;
var isFacingRight = true;

const unit = 8;
const MARIO_WIDTH = 12;
const SPEED = 1.5;

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
	changeFacingDirection();
	changePositionX();
	
	requestId = requestAnimationFrame(animationLoop);
}

function animateMario() {
	const POSITION_Y = WINDOW_HEIGHT-32;
    if (isFacingRight) {
		drawMario1(positionX, POSITION_Y);
    } else {
        drawMarioFacingLeft(positionX, POSITION_Y);
    }
}

function drawBackground() {
	ctx.fillStyle = "#5B8BFF"; // Sky Blue
	ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.translate(0, WINDOW_HEIGHT*unit-16*unit);
    drawIceBlocks(WINDOW_WIDTH/16,1);
    ctx.restore();
}

function drawMarioFacingLeft(x,y) {
	ctx.save();
	ctx.scale(-1,1);
	drawMario1(-MARIO_WIDTH-x, y);
	ctx.restore();
}

function changeFacingDirection() {
	if (positionX >= WINDOW_WIDTH+MARIO_WIDTH) {
		isFacingRight = false;
	} else if (positionX == -2*MARIO_WIDTH) {
		isFacingRight = true;
	}
}