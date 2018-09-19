function drawGroundBlocks(w, h) {
    for (i = 0; i < w; i++) {
        for (j = 0; j < h; j++) {
            ctx.save();
            ctx.translate(16*i*unit,16*j*unit);
            drawGroundBlock();
            ctx.restore();
        }
    }
}
function drawGroundBlock() {
    ctx.fillStyle = "#F84100"; // orange
    ctx.fillRect(0,0,16*unit,16*unit);
    ctx.fillStyle = "#FCD8BC"; // white
    ctx.fillRect(unit,0,8*unit,unit);
    ctx.fillRect(0,unit,unit,9*unit);
    ctx.fillRect(0*unit,11*unit,1*unit,4*unit);
    ctx.fillRect(1*unit,11*unit,1*unit,1*unit);
    ctx.fillRect(2*unit,12*unit,2*unit,1*unit);
    ctx.fillRect(4*unit,13*unit,3*unit,1*unit);
    ctx.fillRect(8*unit,12*unit,1*unit,4*unit);
    ctx.fillRect(9*unit,10*unit,1*unit,2*unit);
    ctx.fillRect(10*unit,6*unit,1*unit,4*unit);
    ctx.fillRect(11*unit,6*unit,4*unit,1*unit);
    ctx.fillRect(10*unit,1*unit,1*unit,4*unit);
    ctx.fillRect(11*unit,0*unit,4*unit,1*unit);
    ctx.fillStyle = "black";
    ctx.fillRect(0*unit,10*unit,2*unit,1*unit);
    ctx.fillRect(2*unit,11*unit,2*unit,1*unit);
    ctx.fillRect(4*unit,12*unit,4*unit,1*unit);
    ctx.fillRect(7*unit,12*unit,1*unit,3*unit);
    ctx.fillRect(1*unit,15*unit,6*unit,1*unit);
    ctx.fillRect(8*unit,10*unit,1*unit,2*unit);
    ctx.fillRect(9*unit,0*unit,1*unit,10*unit);
    ctx.fillRect(11*unit,4*unit,1*unit,2*unit);
    ctx.fillRect(12*unit,5*unit,3*unit,1*unit);
    ctx.fillRect(15*unit,1*unit,1*unit,4*unit);
    ctx.fillRect(15*unit,6*unit,1*unit,9*unit);
    ctx.fillRect(9*unit,15*unit,6*unit,1*unit);
    ctx.fillRect(14*unit,14*unit,1*unit,1*unit);
}