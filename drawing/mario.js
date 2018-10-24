function drawMario1(x,y) {
    ctx.save();
    ctx.translate(x*unit,y*unit);
    drawHead1();
    drawBody1();
    ctx.restore();
}

function drawMario2(x,y) {
    ctx.save();
    ctx.translate(x*unit,y*unit);
    drawHead2();
    drawBody2();
    ctx.restore();
}

function drawMario3(x,y) {
    ctx.save();
    ctx.translate(x*unit,y*unit);
    drawHead3();
    drawBody3();
    ctx.restore();
}

function drawHead1() {
    ctx.fillStyle = "#FF0000"; // Red
    ctx.fillRect(3*unit, 0, 5*unit, unit);
    ctx.fillRect(2*unit, unit, 9*unit, unit);
    ctx.fillStyle = "#880000"; // Brown
    ctx.fillRect(2*unit, 2*unit, 3*unit, unit);
    ctx.fillRect(unit, 3*unit, unit, 3*unit);
    ctx.fillRect(2*unit, 5*unit, unit, unit);
    ctx.fillRect(3*unit, 3*unit, unit, 2*unit);
    ctx.fillRect(4*unit, 4*unit, unit, unit);
    ctx.fillRect(7*unit, 2*unit, unit, 2*unit);
    ctx.fillRect(8*unit, 4*unit, unit, unit);
    ctx.fillRect(7*unit, 5*unit, 4*unit, unit);
    ctx.fillStyle = "#FFA800"; // Orange
    ctx.fillRect(5*unit, 2*unit, 2*unit, 5*unit);
    ctx.fillRect(4*unit, 3*unit, unit, unit);
    ctx.fillRect(7*unit, 4*unit, unit, unit);
    ctx.fillRect(3*unit, 5*unit, 2*unit, 2*unit);
    ctx.fillRect(7*unit, 6*unit, 3*unit, unit);
    ctx.fillRect(2*unit, 3*unit, unit, 2*unit);
    ctx.fillRect(8*unit, 2*unit, unit, 2*unit);
    ctx.fillRect(9*unit, 3*unit, 2*unit, 2*unit);
    ctx.fillRect(11*unit, 4*unit, unit, unit);
}

function drawBody1() {
    ctx.fillStyle = "#FF0000"; // Red
    ctx.fillRect(2*unit, 7*unit, unit, 4*unit);
    ctx.fillRect(3*unit, 7*unit, unit, 3*unit);
    ctx.fillRect(unit, 8*unit, unit, 2*unit);
    ctx.fillRect(0, 9*unit, unit, unit);
    ctx.fillRect(5*unit, 7*unit, 2*unit, 2*unit);
    ctx.fillRect(7*unit, 7*unit, unit, unit);
    ctx.fillRect(8*unit, 8*unit, 3*unit, 2*unit);
    ctx.fillRect(11*unit, 9*unit, unit, unit);
    ctx.fillRect(9*unit, 10*unit, unit, unit);
    ctx.fillStyle = "#3D00FE"; // Blue
    ctx.fillRect(4*unit, 7*unit, unit, 3*unit);
    ctx.fillRect(5*unit, 9*unit, 2*unit, 4*unit);
    ctx.fillRect(7*unit, 8*unit, unit, 2*unit);
    ctx.fillRect(4*unit, 11*unit, unit, 3*unit);
    ctx.fillRect(3*unit, 10*unit, unit, 4*unit);
    ctx.fillRect(2*unit, 12*unit, unit, 2*unit);
    ctx.fillRect(7*unit, 11*unit, unit, 3*unit);
    ctx.fillRect(8*unit, 10*unit, unit, 4*unit);
    ctx.fillRect(9*unit, 12*unit, unit, 2*unit);
    ctx.fillStyle = "#FFA800"; // Orange
    ctx.fillRect(0, 10*unit, 2*unit, 3*unit);
    ctx.fillRect(4*unit, 10*unit, unit, unit);
    ctx.fillRect(2*unit, 11*unit, unit, unit);
    ctx.fillRect(7*unit, 10*unit, unit, unit);
    ctx.fillRect(9*unit, 11*unit, unit, unit);
    ctx.fillRect(10*unit, 10*unit, 2*unit, 3*unit);
    ctx.fillStyle = "#880000"; // Brown
    ctx.fillRect(unit, 14*unit, 3*unit, unit);
    ctx.fillRect(0, 15*unit, 4*unit, unit);
    ctx.fillRect(8*unit, 14*unit, 3*unit, 2*unit);
    ctx.fillRect(11*unit, 15*unit, unit, unit);
}



function drawHead2() {
    ctx.fillStyle = "#FF0000"; // Red
    ctx.fillRect(2*unit, 0, 5*unit, unit);
    ctx.fillRect(unit, unit, 9*unit, unit);
    ctx.fillStyle = "#880000"; // Brown
    ctx.fillRect(unit, 2*unit, 3*unit, unit);
    ctx.fillRect(0, 3*unit, unit, 3*unit);
    ctx.fillRect(unit, 5*unit, unit, unit);
    ctx.fillRect(2*unit, 3*unit, unit, 2*unit);
    ctx.fillRect(3*unit, 4*unit, unit, unit);
    ctx.fillRect(6*unit, 2*unit, unit, 2*unit);
    ctx.fillRect(7*unit, 4*unit, unit, unit);
    ctx.fillRect(6*unit, 5*unit, 4*unit, unit);
    ctx.fillStyle = "#FFA800"; // Orange
    ctx.fillRect(4*unit, 2*unit, 2*unit, 5*unit);
    ctx.fillRect(3*unit, 3*unit, unit, unit);
    ctx.fillRect(6*unit, 4*unit, unit, unit);
    ctx.fillRect(2*unit, 5*unit, 2*unit, 2*unit);
    ctx.fillRect(6*unit, 6*unit, 3*unit, unit);
    ctx.fillRect(unit, 3*unit, unit, 2*unit);
    ctx.fillRect(7*unit, 2*unit, unit, 2*unit);
    ctx.fillRect(8*unit, 3*unit, 2*unit, 2*unit);
    ctx.fillRect(10*unit, 4*unit, unit, unit);
}

function drawBody2() {
    ctx.fillStyle = "#3D00FE"; // Blue
    ctx.fillRect(3*unit,7*unit,1*unit,1*unit);
    ctx.fillRect(0,8*unit,8*unit,4*unit);
    ctx.fillRect(1*unit,12*unit,7*unit,1*unit);
    ctx.fillRect(2*unit,13*unit,3*unit,1*unit);
    ctx.fillRect(8*unit,10*unit,1*unit,2*unit);
    ctx.fillStyle = "#FF0000"; // Red
    ctx.fillRect(0,8*unit,1*unit,3*unit);
    ctx.fillRect(1*unit,7*unit,1*unit,5*unit);
    ctx.fillRect(2*unit,7*unit,1*unit,6*unit);
    ctx.fillRect(3*unit,8*unit,1*unit,1*unit);
    ctx.fillRect(3*unit,10*unit,1*unit,1*unit);
    ctx.fillRect(4*unit,7*unit,3*unit,1*unit);
    ctx.fillRect(6*unit,8*unit,2*unit,1*unit);
    ctx.fillStyle = "#FFA800"; // Orange
    ctx.fillRect(5*unit,9*unit,1*unit,1*unit);
    ctx.fillRect(8*unit,9*unit,1*unit,1*unit);
    ctx.fillRect(3*unit,11*unit,3*unit,1*unit);
    ctx.fillRect(3*unit,12*unit,2*unit,1*unit);
    ctx.fillStyle = "#880000"; // Brown
    ctx.fillRect(5*unit,13*unit,3*unit,1*unit);
    ctx.fillRect(2*unit,14*unit,7*unit,1*unit);
    ctx.fillRect(2*unit,15*unit,4*unit,1*unit);
}

function drawHead3() {
    ctx.fillStyle = "#FF0000"; // Red
    ctx.fillRect(5*unit, 0, 5*unit, unit);
    ctx.fillRect(4*unit, unit, 9*unit, unit);
    ctx.fillStyle = "#880000"; // Brown
    ctx.fillRect(4*unit, 2*unit, 3*unit, unit);
    ctx.fillRect(3*unit, 3*unit, unit, 3*unit);
    ctx.fillRect(4*unit, 5*unit, unit, unit);
    ctx.fillRect(5*unit, 3*unit, unit, 2*unit);
    ctx.fillRect(6*unit, 4*unit, unit, unit);
    ctx.fillRect(9*unit, 2*unit, unit, 2*unit);
    ctx.fillRect(10*unit, 4*unit, unit, unit);
    ctx.fillRect(9*unit, 5*unit, 4*unit, unit);
    ctx.fillStyle = "#FFA800"; // Orange
    ctx.fillRect(7*unit, 2*unit, 2*unit, 5*unit);
    ctx.fillRect(6*unit, 3*unit, unit, unit);
    ctx.fillRect(9*unit, 4*unit, unit, unit);
    ctx.fillRect(5*unit, 5*unit, 2*unit, 2*unit);
    ctx.fillRect(9*unit, 6*unit, 3*unit, unit);
    ctx.fillRect(4*unit, 3*unit, unit, 2*unit);
    ctx.fillRect(10*unit, 2*unit, unit, 2*unit);
    ctx.fillRect(11*unit, 3*unit, 2*unit, 2*unit);
    ctx.fillRect(13*unit, 4*unit, unit, unit);
}

function drawBody3() {
    ctx.fillStyle = "#3D00FE"; // Blue
    ctx.fillRect(2*unit,12*unit,1*unit,1*unit);
    ctx.fillRect(3*unit,11*unit,1*unit,3*unit);
    ctx.fillRect(4*unit,10*unit,2*unit,4*unit);
    ctx.fillRect(6*unit,7*unit,3*unit,6*unit);
    ctx.fillRect(9*unit,9*unit,2*unit,5*unit);
    ctx.fillRect(11*unit,11*unit,1*unit,3*unit);
    ctx.fillStyle = "#FF0000"; // Red
    ctx.fillRect(2*unit,7*unit,4*unit,2*unit);
    ctx.fillRect(4*unit,9*unit,2*unit,1*unit);
    ctx.fillRect(8*unit,7*unit,2*unit,1*unit);
    ctx.fillRect(9*unit,8*unit,3*unit,1*unit);
    ctx.fillRect(11*unit,9*unit,2*unit,1*unit);
    ctx.fillStyle = "#FFA800"; // Orange
    ctx.fillRect(0,8*unit,2*unit,3*unit);
    ctx.fillRect(2*unit,9*unit,1*unit,1*unit);
    ctx.fillRect(12*unit,8*unit,3*unit,1*unit);
    ctx.fillRect(13*unit,9*unit,2*unit,1*unit);
    ctx.fillRect(7*unit,9*unit,1*unit,1*unit);
    ctx.fillStyle = "#880000"; // Brown
    ctx.fillRect(1*unit,13*unit,2*unit,1*unit);
    ctx.fillRect(1*unit,14*unit,3*unit,1*unit);
    ctx.fillRect(2*unit,15*unit,3*unit,1*unit);
    ctx.fillRect(13*unit,10*unit,1*unit,1*unit);
    ctx.fillRect(12*unit,11*unit,2*unit,3*unit);
}