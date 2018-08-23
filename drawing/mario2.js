function drawMario2() {
    drawHead2();
    drawBody2();
}

function drawHead2() {
    ctx.fillStyle = red;
    ctx.fillRect(2*unit, 0, 5*unit, unit);
    ctx.fillRect(unit, unit, 9*unit, unit);
    ctx.fillStyle = brown;
    ctx.fillRect(unit, 2*unit, 3*unit, unit);
    ctx.fillRect(0, 3*unit, unit, 3*unit);
    ctx.fillRect(unit, 5*unit, unit, unit);
    ctx.fillRect(2*unit, 3*unit, unit, 2*unit);
    ctx.fillRect(3*unit, 4*unit, unit, unit);
    ctx.fillRect(6*unit, 2*unit, unit, 2*unit);
    ctx.fillRect(7*unit, 4*unit, unit, unit);
    ctx.fillRect(6*unit, 5*unit, 4*unit, unit);
    ctx.fillStyle = orange;
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
    ctx.fillStyle = blue;
    ctx.fillRect(3*unit,7*unit,1*unit,1*unit);
    ctx.fillRect(0,8*unit,8*unit,4*unit);
    ctx.fillRect(1*unit,12*unit,7*unit,1*unit);
    ctx.fillRect(2*unit,13*unit,3*unit,1*unit);
    ctx.fillRect(8*unit,10*unit,1*unit,2*unit);
    ctx.fillStyle = red;
    ctx.fillRect(0,8*unit,1*unit,3*unit);
    ctx.fillRect(1*unit,7*unit,1*unit,5*unit);
    ctx.fillRect(2*unit,7*unit,1*unit,6*unit);
    ctx.fillRect(3*unit,8*unit,1*unit,1*unit);
    ctx.fillRect(3*unit,10*unit,1*unit,1*unit);
    ctx.fillRect(4*unit,7*unit,3*unit,1*unit);
    ctx.fillRect(6*unit,8*unit,2*unit,1*unit);
    ctx.fillStyle = orange;
    ctx.fillRect(5*unit,9*unit,1*unit,1*unit);
    ctx.fillRect(8*unit,9*unit,1*unit,1*unit);
    ctx.fillRect(3*unit,11*unit,3*unit,1*unit);
    ctx.fillRect(3*unit,12*unit,2*unit,1*unit);
    ctx.fillStyle = brown;
    ctx.fillRect(5*unit,13*unit,3*unit,1*unit);
    ctx.fillRect(2*unit,14*unit,7*unit,1*unit);
    ctx.fillRect(2*unit,15*unit,4*unit,1*unit);
}