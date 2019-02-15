function drawMario1(x,y,scale) {
    ctx.save();
    ctx.translate(x*UNIT,y*UNIT);
    ctx.scale(scale,scale);
    drawHead1();
    drawBody1();
    ctx.restore();
}

function drawHead1() {
    ctx.fillStyle = "red";
    ctx.fillRect(3*UNIT, 0, 5*UNIT, UNIT);
    ctx.fillRect(2*UNIT, UNIT, 9*UNIT, UNIT);
    ctx.fillStyle = "brown";
    ctx.fillRect(2*UNIT, 2*UNIT, 3*UNIT, UNIT);
    ctx.fillRect(UNIT, 3*UNIT, UNIT, 3*UNIT);
    ctx.fillRect(2*UNIT, 5*UNIT, UNIT, UNIT);
    ctx.fillRect(3*UNIT, 3*UNIT, UNIT, 2*UNIT);
    ctx.fillRect(4*UNIT, 4*UNIT, UNIT, UNIT);
    ctx.fillRect(7*UNIT, 2*UNIT, UNIT, 2*UNIT);
    ctx.fillRect(8*UNIT, 4*UNIT, UNIT, UNIT);
    ctx.fillRect(7*UNIT, 5*UNIT, 4*UNIT, UNIT);
    ctx.fillStyle = "orange";
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
    ctx.fillStyle = "red";
    ctx.fillRect(2*UNIT, 7*UNIT, UNIT, 4*UNIT);
    ctx.fillRect(3*UNIT, 7*UNIT, UNIT, 3*UNIT);
    ctx.fillRect(UNIT, 8*UNIT, UNIT, 2*UNIT);
    ctx.fillRect(0, 9*UNIT, UNIT, UNIT);
    ctx.fillRect(5*UNIT, 7*UNIT, 2*UNIT, 2*UNIT);
    ctx.fillRect(7*UNIT, 7*UNIT, UNIT, UNIT);
    ctx.fillRect(8*UNIT, 8*UNIT, 3*UNIT, 2*UNIT);
    ctx.fillRect(11*UNIT, 9*UNIT, UNIT, UNIT);
    ctx.fillRect(9*UNIT, 10*UNIT, UNIT, UNIT);
    ctx.fillStyle = "blue";
    ctx.fillRect(4*UNIT, 7*UNIT, UNIT, 3*UNIT);
    ctx.fillRect(5*UNIT, 9*UNIT, 2*UNIT, 4*UNIT);
    ctx.fillRect(7*UNIT, 8*UNIT, UNIT, 2*UNIT);
    ctx.fillRect(4*UNIT, 11*UNIT, UNIT, 3*UNIT);
    ctx.fillRect(3*UNIT, 10*UNIT, UNIT, 4*UNIT);
    ctx.fillRect(2*UNIT, 12*UNIT, UNIT, 2*UNIT);
    ctx.fillRect(7*UNIT, 11*UNIT, UNIT, 3*UNIT);
    ctx.fillRect(8*UNIT, 10*UNIT, UNIT, 4*UNIT);
    ctx.fillRect(9*UNIT, 12*UNIT, UNIT, 2*UNIT);
    ctx.fillStyle = "orange";
    ctx.fillRect(0, 10*UNIT, 2*UNIT, 3*UNIT);
    ctx.fillRect(4*UNIT, 10*UNIT, UNIT, UNIT);
    ctx.fillRect(2*UNIT, 11*UNIT, UNIT, UNIT);
    ctx.fillRect(7*UNIT, 10*UNIT, UNIT, UNIT);
    ctx.fillRect(9*UNIT, 11*UNIT, UNIT, UNIT);
    ctx.fillRect(10*UNIT, 10*UNIT, 2*UNIT, 3*UNIT);
    ctx.fillStyle = "brown";
    ctx.fillRect(UNIT, 14*UNIT, 3*UNIT, UNIT);
    ctx.fillRect(0, 15*UNIT, 4*UNIT, UNIT);
    ctx.fillRect(8*UNIT, 14*UNIT, 3*UNIT, 2*UNIT);
    ctx.fillRect(11*UNIT, 15*UNIT, UNIT, UNIT);
}