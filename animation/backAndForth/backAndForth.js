var canvas;
var ctx;
var requestId;

var unit = 10;
var positionX = 0;
var isFacingRight = true;

const marioWidth = 12*unit;

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

	translateMario();
	changeFacing();
	changePositionX();

	requestId = requestAnimationFrame(animationLoop);
}

function translateMario() {
	ctx.save();
    if (isFacingRight) {
        ctx.translate(positionX, canvas.height/3);
    } else {
        ctx.translate(marioWidth, 0);
        ctx.translate(positionX, canvas.height/3);
        ctx.scale(-1, 1);    
    }
    drawMario();
    ctx.restore();
}

function changeFacing() {
	// Changes isFacingRight if it hits the border.
	if (positionX == canvas.width - marioWidth) {
		isFacingRight = false;
	} else if (positionX == 0) {
		isFacingRight = true;
	}
}

function changePositionX() {
	if (isFacingRight == true) {
		positionX += 10;
	} else if (isFacingRight == false) {
		positionX -= 10;
	}
}