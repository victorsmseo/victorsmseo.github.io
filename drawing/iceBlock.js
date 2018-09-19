function drawIceBlocks(w, h) {
    for (i = 0; i < w; i++) {
        for (j = 0; j < h; j++) {
            ctx.save();
            ctx.translate(16*i*unit,16*j*unit);
            if (j == 0) {
                drawIceBlock();
            } else {
                ctx.fillStyle = "#2DCADE";
                ctx.fillRect(0,0,16*unit,16*unit);            
            }
            ctx.restore();
        }
    }
}
function drawIceBlock() {
    ctx.fillStyle = "#2DCADE"; // Blue 2
    ctx.fillRect(0,0,16*unit,16*unit);
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,16*unit,unit);
    ctx.fillRect(0,2*unit,unit,unit);
    ctx.fillRect(unit,3*unit,unit,unit);
    ctx.fillRect(2*unit,4*unit,unit,unit);
    ctx.fillRect(3*unit,5*unit,unit,unit);
    ctx.fillRect(4*unit,6*unit,unit,unit);
    ctx.fillRect(5*unit,7*unit,2*unit,unit);
    ctx.fillRect(7*unit,6*unit,unit,unit);
    ctx.fillRect(8*unit,5*unit,unit,unit);
    ctx.fillRect(9*unit,3*unit,unit,2*unit);
    ctx.fillRect(10*unit,4*unit,unit,unit);
    ctx.fillRect(8*unit,2*unit,unit,unit);
    ctx.fillRect(7*unit,unit,unit,unit);
    ctx.fillRect(11*unit,5*unit,2*unit,1*unit);
    ctx.fillRect(13*unit,4*unit,1*unit,1*unit);
    ctx.fillRect(14*unit,3*unit,1*unit,1*unit);
    ctx.fillRect(15*unit,unit,1*unit,2*unit);
    ctx.fillStyle = "#CDF9FD"; // white
    ctx.fillRect(0,1*unit,7*unit,1*unit);
    ctx.fillRect(4*unit,2*unit,2*unit,1*unit);
    ctx.fillRect(8*unit,1*unit,7*unit,1*unit);
    ctx.fillRect(11*unit,2*unit,1*unit,1*unit);
    ctx.fillStyle = "#00AEE3"; // Blue 1
    ctx.fillRect(1*unit,2*unit,1*unit,1*unit);
    ctx.fillRect(2*unit,3*unit,2*unit,1*unit);
    ctx.fillRect(3*unit,4*unit,1*unit,1*unit);
    ctx.fillRect(4*unit,4*unit,1*unit,2*unit);
    ctx.fillRect(5*unit,5*unit,2*unit,2*unit);
    ctx.fillRect(7*unit,4*unit,1*unit,2*unit);
    ctx.fillRect(8*unit,4*unit,1*unit,1*unit);
    ctx.fillRect(9*unit,2*unit,2*unit,1*unit);
    ctx.fillRect(10*unit,3*unit,4*unit,1*unit);
    ctx.fillRect(11*unit,4*unit,2*unit,1*unit);
    ctx.fillRect(13*unit,2*unit,2*unit,1*unit);
    ctx.fillStyle = "#78FFF7"; // Blue 3
    ctx.fillRect(2*unit,2*unit,2*unit,1*unit);
    ctx.fillRect(4*unit,3*unit,5*unit,1*unit);
    ctx.fillRect(5*unit,4*unit,2*unit,1*unit);
    ctx.fillRect(6*unit,2*unit,2*unit,1*unit);
    ctx.fillRect(12*unit,2*unit,1*unit,1*unit);
}