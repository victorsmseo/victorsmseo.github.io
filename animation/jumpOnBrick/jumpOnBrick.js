const LOOP_TIME = 20;
const MARIO_WIDTH = 10;
const JUMP_POSITION = 35;
const BRICK_POSITION = 80;
const FALL_POSITION = 192;
const LAND_POSITION = 237;
const SPEED = 1;
const ACCELERATION = 0.05;

var canvas;
var ctx;
var requestId;

var WINDOW_WIDTH;
var WINDOW_HEIGHT;
var POSITION_Y;

var isJumping = false;
var positionX = -MARIO_WIDTH;
var positionY = 0;
var time = 0;
var unit = 6;
var jumpSpeed = 2.55;

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.canvas.width  = 0.85*window.innerWidth;
    ctx.canvas.height = 0.7*window.innerHeight;

    WINDOW_HEIGHT = canvas.height / unit;
    WINDOW_WIDTH = canvas.width / unit;
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
    changeTime();
    changeIsJumping();
    changePositionX();
    changePositionY();

	requestId = requestAnimationFrame(animationLoop);
}

function animateMario() {
    if (isJumping) {
        drawMario3(positionX, positionY);
    } else {
        if (0 <= time && time < LOOP_TIME/2) {
            drawMario2(positionX, positionY);
        } else if (LOOP_TIME/2 <= time && time <= LOOP_TIME) {
            drawMario3(positionX, positionY);
        }
    }
}

function changeIsJumping() {
    if ((JUMP_POSITION <= positionX) && (positionX <= BRICK_POSITION)) {
        isJumping = true;
    } else if ((FALL_POSITION <= positionX) && (positionX <= LAND_POSITION)) {
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
    if ((JUMP_POSITION <= positionX) && (positionX < BRICK_POSITION)) {
        positionY -= jumpSpeed;
        jumpSpeed -= ACCELERATION;
    } else if ((FALL_POSITION <= positionX) && (positionX < LAND_POSITION)) {
        positionY += jumpSpeed;
        jumpSpeed += ACCELERATION;
    } else if ((BRICK_POSITION <= positionX) && (positionX < FALL_POSITION)) {
        positionY = WINDOW_HEIGHT-96;
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
    drawBrickBlocks(80,WINDOW_HEIGHT-80,7,1);
}
