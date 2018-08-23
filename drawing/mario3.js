function drawMario3() {
    drawHead3();
    drawBody3();
}

function drawHead3() {
    ctx.fillStyle = red;
    ctx.fillRect(5*unit, 0, 5*unit, unit);
    ctx.fillRect(4*unit, unit, 9*unit, unit);
    ctx.fillStyle = brown;
    ctx.fillRect(4*unit, 2*unit, 3*unit, unit);
    ctx.fillRect(3*unit, 3*unit, unit, 3*unit);
    ctx.fillRect(4*unit, 5*unit, unit, unit);
    ctx.fillRect(5*unit, 3*unit, unit, 2*unit);
    ctx.fillRect(6*unit, 4*unit, unit, unit);
    ctx.fillRect(9*unit, 2*unit, unit, 2*unit);
    ctx.fillRect(10*unit, 4*unit, unit, unit);
    ctx.fillRect(9*unit, 5*unit, 4*unit, unit);
    ctx.fillStyle = orange;
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
    ctx.fillStyle = blue;
    ctx.fillRect(2*unit,12*unit,1*unit,1*unit);
    ctx.fillRect(3*unit,11*unit,1*unit,3*unit);
    ctx.fillRect(4*unit,10*unit,2*unit,4*unit);
    ctx.fillRect(6*unit,7*unit,3*unit,6*unit);
    ctx.fillRect(9*unit,9*unit,2*unit,5*unit);
    ctx.fillRect(11*unit,11*unit,1*unit,3*unit);
    ctx.fillStyle = red;
    ctx.fillRect(2*unit,7*unit,4*unit,2*unit);
    ctx.fillRect(4*unit,9*unit,2*unit,1*unit);
    ctx.fillRect(8*unit,7*unit,2*unit,1*unit);
    ctx.fillRect(9*unit,8*unit,3*unit,1*unit);
    ctx.fillRect(11*unit,9*unit,2*unit,1*unit);
    ctx.fillStyle = orange;
    ctx.fillRect(0,8*unit,2*unit,3*unit);
    ctx.fillRect(2*unit,9*unit,1*unit,1*unit);
    ctx.fillRect(12*unit,8*unit,3*unit,1*unit);
    ctx.fillRect(13*unit,9*unit,2*unit,1*unit);
    ctx.fillRect(7*unit,9*unit,1*unit,1*unit);
    ctx.fillStyle = brown;
    ctx.fillRect(1*unit,13*unit,2*unit,1*unit);
    ctx.fillRect(1*unit,14*unit,3*unit,1*unit);
    ctx.fillRect(2*unit,15*unit,3*unit,1*unit);
    ctx.fillRect(13*unit,10*unit,1*unit,1*unit);
    ctx.fillRect(12*unit,11*unit,2*unit,3*unit);
}