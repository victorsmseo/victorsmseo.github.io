function drawMario1(x,y) {
    ctx.save();
    ctx.translate(x*UNIT,y*UNIT);
    drawHead1();
    drawBody1();
    ctx.restore();
}

function drawMario2(x,y) {
    ctx.save();
    ctx.translate(x*UNIT,y*UNIT);
    drawHead2();
    drawBody2();
    ctx.restore();
}

function drawMario3(x,y) {
    ctx.save();
    ctx.translate(x*UNIT,y*UNIT);
    drawHead3();
    drawBody3();
    ctx.restore();
}

function drawHead1() {
    ctx.fillStyle = "#FF0000"; // Red
    ctx.fillRect(3*UNIT, 0, 5*UNIT, UNIT);
    ctx.fillRect(2*UNIT, UNIT, 9*UNIT, UNIT);
    ctx.fillStyle = "#880000"; // Brown
    ctx.fillRect(2*UNIT, 2*UNIT, 3*UNIT, UNIT);
    ctx.fillRect(UNIT, 3*UNIT, UNIT, 3*UNIT);
    ctx.fillRect(2*UNIT, 5*UNIT, UNIT, UNIT);
    ctx.fillRect(3*UNIT, 3*UNIT, UNIT, 2*UNIT);
    ctx.fillRect(4*UNIT, 4*UNIT, UNIT, UNIT);
    ctx.fillRect(7*UNIT, 2*UNIT, UNIT, 2*UNIT);
    ctx.fillRect(8*UNIT, 4*UNIT, UNIT, UNIT);
    ctx.fillRect(7*UNIT, 5*UNIT, 4*UNIT, UNIT);
    ctx.fillStyle = "#FFA800"; // Orange
    ctx.fillRect(5*UNIT, 2*UNIT, 2*UNIT, 5*UNIT);
    ctx.fillRect(4*UNIT, 3*UNIT, UNIT, UNIT);
    ctx.fillRect(7*UNIT, 4*UNIT, UNIT, UNIT);
    ctx.fillRect(3*UNIT, 5*UNIT, 2*UNIT, 2*UNIT);
    ctx.fillRect(7*UNIT, 6*UNIT, 3*UNIT, UNIT);
    ctx.fillRect(2*UNIT, 3*UNIT, UNIT, 2*UNIT);
    ctx.fillRect(8*UNIT, 2*UNIT, UNIT, 2*UNIT);
    ctx.fillRect(9*UNIT, 3*UNIT, 2*UNIT, 2*UNIT);
    ctx.fillRect(11*UNIT, 4*UNIT, UNIT, UNIT);
}

function drawBody1() {
    ctx.fillStyle = "#FF0000"; // Red
    ctx.fillRect(2*UNIT, 7*UNIT, UNIT, 4*UNIT);
    ctx.fillRect(3*UNIT, 7*UNIT, UNIT, 3*UNIT);
    ctx.fillRect(UNIT, 8*UNIT, UNIT, 2*UNIT);
    ctx.fillRect(0, 9*UNIT, UNIT, UNIT);
    ctx.fillRect(5*UNIT, 7*UNIT, 2*UNIT, 2*UNIT);
    ctx.fillRect(7*UNIT, 7*UNIT, UNIT, UNIT);
    ctx.fillRect(8*UNIT, 8*UNIT, 3*UNIT, 2*UNIT);
    ctx.fillRect(11*UNIT, 9*UNIT, UNIT, UNIT);
    ctx.fillRect(9*UNIT, 10*UNIT, UNIT, UNIT);
    ctx.fillStyle = "#3D00FE"; // Blue
    ctx.fillRect(4*UNIT, 7*UNIT, UNIT, 3*UNIT);
    ctx.fillRect(5*UNIT, 9*UNIT, 2*UNIT, 4*UNIT);
    ctx.fillRect(7*UNIT, 8*UNIT, UNIT, 2*UNIT);
    ctx.fillRect(4*UNIT, 11*UNIT, UNIT, 3*UNIT);
    ctx.fillRect(3*UNIT, 10*UNIT, UNIT, 4*UNIT);
    ctx.fillRect(2*UNIT, 12*UNIT, UNIT, 2*UNIT);
    ctx.fillRect(7*UNIT, 11*UNIT, UNIT, 3*UNIT);
    ctx.fillRect(8*UNIT, 10*UNIT, UNIT, 4*UNIT);
    ctx.fillRect(9*UNIT, 12*UNIT, UNIT, 2*UNIT);
    ctx.fillStyle = "#FFA800"; // Orange
    ctx.fillRect(0, 10*UNIT, 2*UNIT, 3*UNIT);
    ctx.fillRect(4*UNIT, 10*UNIT, UNIT, UNIT);
    ctx.fillRect(2*UNIT, 11*UNIT, UNIT, UNIT);
    ctx.fillRect(7*UNIT, 10*UNIT, UNIT, UNIT);
    ctx.fillRect(9*UNIT, 11*UNIT, UNIT, UNIT);
    ctx.fillRect(10*UNIT, 10*UNIT, 2*UNIT, 3*UNIT);
    ctx.fillStyle = "#880000"; // Brown
    ctx.fillRect(UNIT, 14*UNIT, 3*UNIT, UNIT);
    ctx.fillRect(0, 15*UNIT, 4*UNIT, UNIT);
    ctx.fillRect(8*UNIT, 14*UNIT, 3*UNIT, 2*UNIT);
    ctx.fillRect(11*UNIT, 15*UNIT, UNIT, UNIT);
}



function drawHead2() {
    ctx.fillStyle = "#FF0000"; // Red
    ctx.fillRect(2*UNIT, 0, 5*UNIT, UNIT);
    ctx.fillRect(UNIT, UNIT, 9*UNIT, UNIT);
    ctx.fillStyle = "#880000"; // Brown
    ctx.fillRect(UNIT, 2*UNIT, 3*UNIT, UNIT);
    ctx.fillRect(0, 3*UNIT, UNIT, 3*UNIT);
    ctx.fillRect(UNIT, 5*UNIT, UNIT, UNIT);
    ctx.fillRect(2*UNIT, 3*UNIT, UNIT, 2*UNIT);
    ctx.fillRect(3*UNIT, 4*UNIT, UNIT, UNIT);
    ctx.fillRect(6*UNIT, 2*UNIT, UNIT, 2*UNIT);
    ctx.fillRect(7*UNIT, 4*UNIT, UNIT, UNIT);
    ctx.fillRect(6*UNIT, 5*UNIT, 4*UNIT, UNIT);
    ctx.fillStyle = "#FFA800"; // Orange
    ctx.fillRect(4*UNIT, 2*UNIT, 2*UNIT, 5*UNIT);
    ctx.fillRect(3*UNIT, 3*UNIT, UNIT, UNIT);
    ctx.fillRect(6*UNIT, 4*UNIT, UNIT, UNIT);
    ctx.fillRect(2*UNIT, 5*UNIT, 2*UNIT, 2*UNIT);
    ctx.fillRect(6*UNIT, 6*UNIT, 3*UNIT, UNIT);
    ctx.fillRect(UNIT, 3*UNIT, UNIT, 2*UNIT);
    ctx.fillRect(7*UNIT, 2*UNIT, UNIT, 2*UNIT);
    ctx.fillRect(8*UNIT, 3*UNIT, 2*UNIT, 2*UNIT);
    ctx.fillRect(10*UNIT, 4*UNIT, UNIT, UNIT);
}

function drawBody2() {
    ctx.fillStyle = "#3D00FE"; // Blue
    ctx.fillRect(3*UNIT,7*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(0,8*UNIT,8*UNIT,4*UNIT);
    ctx.fillRect(1*UNIT,12*UNIT,7*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,13*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,10*UNIT,1*UNIT,2*UNIT);
    ctx.fillStyle = "#FF0000"; // Red
    ctx.fillRect(0,8*UNIT,1*UNIT,3*UNIT);
    ctx.fillRect(1*UNIT,7*UNIT,1*UNIT,5*UNIT);
    ctx.fillRect(2*UNIT,7*UNIT,1*UNIT,6*UNIT);
    ctx.fillRect(3*UNIT,8*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,10*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,7*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(6*UNIT,8*UNIT,2*UNIT,1*UNIT);
    ctx.fillStyle = "#FFA800"; // Orange
    ctx.fillRect(5*UNIT,9*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,9*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,11*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,12*UNIT,2*UNIT,1*UNIT);
    ctx.fillStyle = "#880000"; // Brown
    ctx.fillRect(5*UNIT,13*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,14*UNIT,7*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,15*UNIT,4*UNIT,1*UNIT);
}

function drawHead3() {
    ctx.fillStyle = "#FF0000"; // Red
    ctx.fillRect(5*UNIT, 0, 5*UNIT, UNIT);
    ctx.fillRect(4*UNIT, UNIT, 9*UNIT, UNIT);
    ctx.fillStyle = "#880000"; // Brown
    ctx.fillRect(4*UNIT, 2*UNIT, 3*UNIT, UNIT);
    ctx.fillRect(3*UNIT, 3*UNIT, UNIT, 3*UNIT);
    ctx.fillRect(4*UNIT, 5*UNIT, UNIT, UNIT);
    ctx.fillRect(5*UNIT, 3*UNIT, UNIT, 2*UNIT);
    ctx.fillRect(6*UNIT, 4*UNIT, UNIT, UNIT);
    ctx.fillRect(9*UNIT, 2*UNIT, UNIT, 2*UNIT);
    ctx.fillRect(10*UNIT, 4*UNIT, UNIT, UNIT);
    ctx.fillRect(9*UNIT, 5*UNIT, 4*UNIT, UNIT);
    ctx.fillStyle = "#FFA800"; // Orange
    ctx.fillRect(7*UNIT, 2*UNIT, 2*UNIT, 5*UNIT);
    ctx.fillRect(6*UNIT, 3*UNIT, UNIT, UNIT);
    ctx.fillRect(9*UNIT, 4*UNIT, UNIT, UNIT);
    ctx.fillRect(5*UNIT, 5*UNIT, 2*UNIT, 2*UNIT);
    ctx.fillRect(9*UNIT, 6*UNIT, 3*UNIT, UNIT);
    ctx.fillRect(4*UNIT, 3*UNIT, UNIT, 2*UNIT);
    ctx.fillRect(10*UNIT, 2*UNIT, UNIT, 2*UNIT);
    ctx.fillRect(11*UNIT, 3*UNIT, 2*UNIT, 2*UNIT);
    ctx.fillRect(13*UNIT, 4*UNIT, UNIT, UNIT);
}

function drawBody3() {
    ctx.fillStyle = "#3D00FE"; // Blue
    ctx.fillRect(2*UNIT,12*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(3*UNIT,11*UNIT,1*UNIT,3*UNIT);
    ctx.fillRect(4*UNIT,10*UNIT,2*UNIT,4*UNIT);
    ctx.fillRect(6*UNIT,7*UNIT,3*UNIT,6*UNIT);
    ctx.fillRect(9*UNIT,9*UNIT,2*UNIT,5*UNIT);
    ctx.fillRect(11*UNIT,11*UNIT,1*UNIT,3*UNIT);
    ctx.fillStyle = "#FF0000"; // Red
    ctx.fillRect(2*UNIT,7*UNIT,4*UNIT,2*UNIT);
    ctx.fillRect(4*UNIT,9*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,7*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(9*UNIT,8*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(11*UNIT,9*UNIT,2*UNIT,1*UNIT);
    ctx.fillStyle = "#FFA800"; // Orange
    ctx.fillRect(0,8*UNIT,2*UNIT,3*UNIT);
    ctx.fillRect(2*UNIT,9*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(12*UNIT,8*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(13*UNIT,9*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(7*UNIT,9*UNIT,1*UNIT,1*UNIT);
    ctx.fillStyle = "#880000"; // Brown
    ctx.fillRect(1*UNIT,13*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(1*UNIT,14*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,15*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(13*UNIT,10*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(12*UNIT,11*UNIT,2*UNIT,3*UNIT);
}