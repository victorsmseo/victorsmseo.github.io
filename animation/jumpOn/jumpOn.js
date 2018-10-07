var canvas;
var ctx;
var requestId;

var unit = 5;
var time = 0;
var positionX = 0;
var positionY = 0;
var isFacingRight = true;
var isJumping = false;

const marioWidth = 12*unit;
const loopTime = 20;
const speed = 8;
const jumpSpeed = 12;

const red = "#FF0000";
const brown = "#880000";
const orange = "#FFA800";
const blue = "#3D00FE";

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    positionY = 3*canvas.height/4 - 7*unit;
	startAnimation();
}

function startAnimation() {
	requestId = requestAnimationFrame(animationLoop);
}

function animationLoop(timeStamp) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBackground();
    drawBricks();
    walkingAnimation();
    changePositionX();
    changePositionY();
    changeTime();
    changeJump();

	requestId = requestAnimationFrame(animationLoop);
}

// Draw the character depending on .
function walkingAnimation() {
    ctx.save();
    ctx.translate(positionX, positionY);
    if (isJumping == true) {
        drawMario3();
    } else if (isJumping == false) {
        if (time >= 0 && time < loopTime/2) {
            drawMario2();
        } else if (time >= loopTime/2 && time <= loopTime) {
            drawMario3();
        }
    }
    ctx.restore();
}

function changePositionX() {
    if (positionX < canvas.width) {
		positionX += speed;
	} else {
		positionX = -marioWidth;
    }
}

function changePositionY() {
    const jumpPosition = canvas.width/3;
    const peakPosition = canvas.width/2;
    const landPosition = 2*canvas.width/3;
    if ((jumpPosition <= positionX) && (positionX <= peakPosition)) {
        positionY -= jumpSpeed;
    } else if ((peakPosition <= positionX) && (positionX <= landPosition)) {
        positionY += jumpSpeed;
    }
}

function changeTime() {
    if (time >= loopTime) {
        time = 0;
    } else {
        time += 1;
    }
}

function changeJump() {
    if ((canvas.width/3 <= positionX) && (positionX <= 2*canvas.width/3)) {
        isJumping = true;
    } else {
        isJumping = false;
    }
}

function drawBackground() {
    ctx.fillStyle = "#5B8BFF";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.translate(0,84*unit);
    drawGroundBlocks(17,1);
    ctx.restore();
}

function drawBricks() {
    ctx.save();
    ctx.translate(60*unit,30*unit);
    drawBrickBlocks(8,1);
    ctx.restore();
}