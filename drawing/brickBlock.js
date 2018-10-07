function drawBrickBlocks(w, h) {
    for (i = 0; i < w; i++) {
        for (j = 0; j < h; j++) {
            ctx.save();
            ctx.translate(16*i*unit,16*j*unit);
            drawBrickBlock();
            ctx.restore();
        }
    }
}

function drawBrickBlock() {
    ctx.fillStyle = "#CB5027"; // orange
    ctx.fillRect(0,0,16*unit,16*unit);
    ctx.fillStyle = "#F2BFB6"; // peach
    ctx.fillRect(0,0,16*unit,unit);
    ctx.fillStyle = "black"; // black
    ctx.fillRect(0,3*unit,16*unit,unit);
    ctx.fillRect(0,7*unit,16*unit,unit);
    ctx.fillRect(0,11*unit,16*unit,unit);
    ctx.fillRect(0,15*unit,16*unit,unit);
    ctx.fillRect(3*unit,3*unit,unit,4*unit);
    ctx.fillRect(3*unit,11*unit,unit,4*unit);
    ctx.fillRect(7*unit,unit,unit,2*unit);
    ctx.fillRect(7*unit,8*unit,unit,3*unit);
    ctx.fillRect(11*unit,3*unit,unit,4*unit);
    ctx.fillRect(11*unit,11*unit,unit,4*unit);
    ctx.fillRect(15*unit,unit,unit,2*unit);
    ctx.fillRect(15*unit,8*unit,unit,3*unit);
}