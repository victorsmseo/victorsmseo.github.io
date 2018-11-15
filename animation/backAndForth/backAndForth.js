var canvas;
var ctx;
var requestId;

var unit = 8;
var positionX = 0;
var isFacingRight = true;

const MARIO_WIDTH = 12;
const POSITION_Y = 47;
const SPEED = 2;

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	ctx.canvas.width  = 0.85*window.innerWidth;
	ctx.canvas.height = 0.7*window.innerHeight;
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
    ctx.translate(0, 63*unit);
    drawIceBlocks(10,1);
    ctx.restore();
}

function drawMarioFacingLeft(x,y) {
	ctx.save();
	ctx.scale(-1,1);
	drawMario1(-MARIO_WIDTH-x, y);
	ctx.restore();
}

// Change the facing direction depending on where the character is.
function changeFacingDirection() {
	const WINDOW_WIDTH = canvas.width / unit;
	if (positionX >= WINDOW_WIDTH+MARIO_WIDTH) {
		isFacingRight = false;
	} else if (positionX == -2*MARIO_WIDTH) {
		isFacingRight = true;
	}
}

// Change the x position depending on which direction the character is facing.
function changePositionX() {
	if (isFacingRight) {
		positionX += SPEED;
	} else {
		positionX -= SPEED;
	}
}

function transitionAnimation() {
    var nav = document.getElementById('sideNav');
    var can = document.getElementById("canvas");
    nav.classList.add('sideNavAnimation');
    can.classList.add('canvasAnimation2');
}

function goHomeFromProject() {
    window.location.href = "../../index.html";
}