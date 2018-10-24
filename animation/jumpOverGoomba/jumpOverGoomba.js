var canvas;
var ctx;
var requestId;

var unit = 5;
var time = 0;
var speed = 1;
var xPosMario = 0;
var yPosMario = 68;
var xPosGoomba = 244;
var isJumping = false;

const timeLoop = 20;
const yPosGoomba = 68;
const jumpPos = 75;
const peakPos = 120;
const landPos = 165;

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
    
    drawBackground();
    changeTime();
    changeIsJumping();
    changeXPosMario();
    changeYPosMario();
    changeXPosGoomba();
    animateMario();
    animateGoomba();
    
	requestId = requestAnimationFrame(animationLoop);
}

function drawBackground() {
    ctx.fillStyle = "#5B8BFF"; // Sky Blue
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.translate(0,84*unit);
    drawGroundBlocks(17,1);
    ctx.restore();
}

function changeTime() {
    if (time >= timeLoop) {
        time = 0;
    } else {
        time += 1;
    }
}

function changeIsJumping() {
    if ((jumpPos <= xPosMario) && (xPosMario <= landPos)) {
        isJumping = true;
    } else {
        isJumping = false;
    }
}

function changeXPosMario() {
    if (xPosMario < 260) {
		xPosMario += speed;
	} else {
		xPosMario = -16;
    }
}

function changeYPosMario() {
    if ((jumpPos <= xPosMario) && (xPosMario < peakPos)) {
        yPosMario -= speed;
    } else if ((peakPos <= xPosMario) && (xPosMario < landPos)) {
        yPosMario += speed;
    }
}

function changeXPosGoomba() {
    if (xPosGoomba > -16) {
		xPosGoomba -= speed;
	} else {
		xPosGoomba = 260;
    }
}

function animateMario() {
    if (isJumping) {
        drawMario3(xPosMario,yPosMario);
    } else {
        if ((0 <= time) && (time < timeLoop/2)) {
            drawMario2(xPosMario,yPosMario);
        } else if ((timeLoop/2 <= time) && (time <= timeLoop)) {
            drawMario3(xPosMario,yPosMario);
        }
    }
}

function animateGoomba() {
    if ((0 <= time) && (time < timeLoop/2)) {
        drawGoomba1(xPosGoomba,yPosGoomba);
    } else if ((timeLoop/2 <= time) && (time <= timeLoop)) {
        drawGoomba2(xPosGoomba,yPosGoomba);
    }
}