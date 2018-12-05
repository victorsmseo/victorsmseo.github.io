var canvas;
var ctx;
var requestId;
var positionY;

var WINDOW_WIDTH;
var WINDOW_HEIGHT;
var JUMP_POSITION;
var PEAK_POSITION;
var LAND_POSITION;
var POSITION_Y;

var isJumping = false;
var jumpSpeed = 2;
var positionX = 0;
var time = 0;
var unit = 8;

const ACCELERATION = 0.05;
const LOOP_TIME = 20;
const MARIO_WIDTH = 16;
const SPEED = 1;

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.canvas.width  = 0.85*window.innerWidth;
    ctx.canvas.height = 0.7*window.innerHeight;

    WINDOW_HEIGHT = canvas.height / unit;
    WINDOW_WIDTH = canvas.width / unit;
    JUMP_POSITION = WINDOW_WIDTH/3;
    PEAK_POSITION = WINDOW_WIDTH/2;
    LAND_POSITION = 2*WINDOW_WIDTH/3;
    POSITION_Y = WINDOW_HEIGHT-32;
    
	startAnimation();
}

function startAnimation() {
	requestId = requestAnimationFrame(animationLoop);
}

function animationLoop(timeStamp) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBackground();
    animateMario();
    changeIsJumping();
    changePositionX();
    changePositionY();
    changeTime();

	requestId = requestAnimationFrame(animationLoop);
}

function animateMario() {
    if (isJumping) {
        drawMario3(positionX, positionY);
    } else {
        if (0 <= time && time < LOOP_TIME/2) {
            drawMario2(positionX, POSITION_Y);
        } else if (LOOP_TIME/2 <= time && time <= LOOP_TIME) {
            drawMario3(positionX, POSITION_Y);
        }
    }
}

function changeIsJumping() {
    if ((JUMP_POSITION <= positionX) && (positionX <= LAND_POSITION)) {
        isJumping = true;
    } else {
        isJumping = false;
    }
}

function changePositionX() {
	if (positionX <= WINDOW_WIDTH) {
		positionX += SPEED;
	} else {
		positionX = -MARIO_WIDTH;
	}
}

function changePositionY() {
    if ((JUMP_POSITION <= positionX) && (positionX < PEAK_POSITION)) {
        positionY -= jumpSpeed;
        jumpSpeed -= ACCELERATION;
    } else if ((PEAK_POSITION <= positionX) && (positionX < LAND_POSITION)) {
        positionY += jumpSpeed;
        jumpSpeed += ACCELERATION;
    } else {
        positionY = POSITION_Y;
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