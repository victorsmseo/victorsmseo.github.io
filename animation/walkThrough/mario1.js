function drawMario1() {
    drawHead1();
    drawBody1();
}

function drawHead1() {
    ctx.fillStyle = red;
    ctx.fillRect(3*unit, 0, 5*unit, unit);
    ctx.fillRect(2*unit, unit, 9*unit, unit);
    ctx.fillStyle = brown;
    ctx.fillRect(2*unit, 2*unit, 3*unit, unit);
    ctx.fillRect(unit, 3*unit, unit, 3*unit);
    ctx.fillRect(2*unit, 5*unit, unit, unit);
    ctx.fillRect(3*unit, 3*unit, unit, 2*unit);
    ctx.fillRect(4*unit, 4*unit, unit, unit);
    ctx.fillRect(7*unit, 2*unit, unit, 2*unit);
    ctx.fillRect(8*unit, 4*unit, unit, unit);
    ctx.fillRect(7*unit, 5*unit, 4*unit, unit);
    ctx.fillStyle = orange;
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
    ctx.fillStyle = red;
    ctx.fillRect(2*unit, 7*unit, unit, 4*unit);
    ctx.fillRect(3*unit, 7*unit, unit, 3*unit);
    ctx.fillRect(unit, 8*unit, unit, 2*unit);
    ctx.fillRect(0, 9*unit, unit, unit);
    ctx.fillRect(5*unit, 7*unit, 2*unit, 2*unit);
    ctx.fillRect(7*unit, 7*unit, unit, unit);
    ctx.fillRect(8*unit, 8*unit, 3*unit, 2*unit);
    ctx.fillRect(11*unit, 9*unit, unit, unit);
    ctx.fillRect(9*unit, 10*unit, unit, unit);
    ctx.fillStyle = blue;
    ctx.fillRect(4*unit, 7*unit, unit, 3*unit);
    ctx.fillRect(5*unit, 9*unit, 2*unit, 4*unit);
    ctx.fillRect(7*unit, 8*unit, unit, 2*unit);
    ctx.fillRect(4*unit, 11*unit, unit, 3*unit);
    ctx.fillRect(3*unit, 10*unit, unit, 4*unit);
    ctx.fillRect(2*unit, 12*unit, unit, 2*unit);
    ctx.fillRect(7*unit, 11*unit, unit, 3*unit);
    ctx.fillRect(8*unit, 10*unit, unit, 4*unit);
    ctx.fillRect(9*unit, 12*unit, unit, 2*unit);
    ctx.fillStyle = orange;
    ctx.fillRect(0, 10*unit, 2*unit, 3*unit);
    ctx.fillRect(4*unit, 10*unit, unit, unit);
    ctx.fillRect(2*unit, 11*unit, unit, unit);
    ctx.fillRect(7*unit, 10*unit, unit, unit);
    ctx.fillRect(9*unit, 11*unit, unit, unit);
    ctx.fillRect(10*unit, 10*unit, 2*unit, 3*unit);
    ctx.fillStyle = brown;
    ctx.fillRect(unit, 14*unit, 3*unit, unit);
    ctx.fillRect(0, 15*unit, 4*unit, unit);
    ctx.fillRect(8*unit, 14*unit, 3*unit, 2*unit);
    ctx.fillRect(11*unit, 15*unit, unit, unit);
}