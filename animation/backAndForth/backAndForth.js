var canvas;
var ctx;
var requestId;

var unit = 10;
var positionX = 0;
var isFacingRight = true;

const marioWidth = 12*unit;
const speed = 10;

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

	drawCharacter();
	changeFacingDirection();
	changePositionX();

	requestId = requestAnimationFrame(animationLoop);
}

// Draw the character depending on which direction it's facing.
function drawCharacter() {
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

// Change the facing direction depending on where the character is.
function changeFacingDirection() {
	if (positionX == canvas.width - marioWidth) {
		isFacingRight = false;
	} else if (positionX == 0) {
		isFacingRight = true;
	}
}

// Change the x position depending on which direction the character is facing.
function changePositionX() {
	if (isFacingRight == true) {
		positionX += speed;
	} else if (isFacingRight == false) {
		positionX -= speed;
	}
}
