function drawBricks(x, y, numBricks) {
    for (var i = 0; i<numBricks; i++) {
        ctx.save();
        ctx.translate(i*16*UNIT+x*UNIT,y*UNIT);
        drawBrick();
        ctx.restore();
    }
}

function drawBrick() {
    ctx.fillStyle = "#F84100"; // orange
    ctx.fillRect(0,0,16*UNIT,16*UNIT);
    ctx.fillStyle = "#FCD8BC"; // white
    ctx.fillRect(UNIT,0,8*UNIT,UNIT);
    ctx.fillRect(0,UNIT,UNIT,9*UNIT);
    ctx.fillRect(0*UNIT,11*UNIT,1*UNIT,4*UNIT);
    ctx.fillRect(1*UNIT,11*UNIT,1*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,12*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,13*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,12*UNIT,1*UNIT,4*UNIT);
    ctx.fillRect(9*UNIT,10*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(10*UNIT,6*UNIT,1*UNIT,4*UNIT);
    ctx.fillRect(11*UNIT,6*UNIT,4*UNIT,1*UNIT);
    ctx.fillRect(10*UNIT,1*UNIT,1*UNIT,4*UNIT);
    ctx.fillRect(11*UNIT,0*UNIT,4*UNIT,1*UNIT);
    ctx.fillStyle = "black";
    ctx.fillRect(0*UNIT,10*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(2*UNIT,11*UNIT,2*UNIT,1*UNIT);
    ctx.fillRect(4*UNIT,12*UNIT,4*UNIT,1*UNIT);
    ctx.fillRect(7*UNIT,12*UNIT,1*UNIT,3*UNIT);
    ctx.fillRect(1*UNIT,15*UNIT,6*UNIT,1*UNIT);
    ctx.fillRect(8*UNIT,10*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(9*UNIT,0*UNIT,1*UNIT,10*UNIT);
    ctx.fillRect(11*UNIT,4*UNIT,1*UNIT,2*UNIT);
    ctx.fillRect(12*UNIT,5*UNIT,3*UNIT,1*UNIT);
    ctx.fillRect(15*UNIT,1*UNIT,1*UNIT,4*UNIT);
    ctx.fillRect(15*UNIT,6*UNIT,1*UNIT,9*UNIT);
    ctx.fillRect(9*UNIT,15*UNIT,6*UNIT,1*UNIT);
    ctx.fillRect(14*UNIT,14*UNIT,1*UNIT,1*UNIT);
}