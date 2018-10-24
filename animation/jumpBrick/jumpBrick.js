var canvas;
var ctx;
var requestId;

var unit = 5;
var time = 0;
var positionX = 0;
var positionY = 0;
var brickTime = 0;
var isFacingRight = true;
var isJumping = false;

const marioWidth = 12 * unit;
const loopTime = 20;
const speed = 8;
const jumpSpeed = 6.4;

const jumpPosition = 75 * unit;
const peakPosition = 115 * unit;
const fallPosition = 155 * unit;

const red = "#FF0000";
const brown = "#880000";
const orange = "#FFA800";
const blue = "#3D00FE";

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    positionY = 3 * canvas.height / 4 - 7 * unit;
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
    brickAnimation();

    requestId = requestAnimationFrame(animationLoop);
}

// Draw the character depending on .
function walkingAnimation() {
    ctx.save();
    ctx.translate(positionX, positionY);
    if (isJumping == true) {
        drawMario3();
    } else if (isJumping == false) {
        if (time >= 0 && time < loopTime / 2) {
            drawMario2();
        } else if (time >= loopTime / 2 && time <= loopTime) {
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
        brickTime = 0;
    }
}

function changePositionY() {
    if ((jumpPosition <= positionX) && (positionX <= peakPosition)) {
        positionY -= jumpSpeed;
    } else if ((peakPosition <= positionX) && (positionX < fallPosition)) {
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
    if ((jumpPosition <= positionX) && (positionX <= peakPosition)) {
        isJumping = true;
    } else if ((peakPosition <= positionX) && (positionX <= fallPosition)) {
        isJumping = true;
    } else {
        isJumping = false;
    }
}

function drawBackground() {
    ctx.fillStyle = "#5B8BFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(0, 84 * unit);
    drawGroundBlocks(17, 1);
    ctx.restore();
}

function drawBricks() {
    ctx.save();
    ctx.translate(66 * unit, 20 * unit);
    drawBrickBlocks(3, 1);
    ctx.translate(64 * unit, 0);
    drawBrickBlocks(3, 1);
    ctx.restore();
}

function brickAnimation() {
    const halfBrickTime = 10;
    ctx.save();
    ctx.translate(114 * unit, 20 * unit);
    if (positionX >= peakPosition) {
        brickTime += 1;
        if (brickTime <= halfBrickTime) {
            ctx.translate(0,-2*brickTime);
        } else if (brickTime <= 2*halfBrickTime) {
            ctx.translate(0,-20+(brickTime-10));
        }
        drawBrickBlocks(1, 1);
    } else {
        drawBrickBlocks(1, 1);
    }
    ctx.restore();
}