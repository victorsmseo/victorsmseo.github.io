function drawRuler(delta) {
    ctx.fillStyle = "black";
    const numX = canvas.width / (unit*delta);
    const numY = canvas.height / (unit*delta);
    for (i = 0; i < numX; i++) {
        ctx.fillRect(i*unit*delta-1,0,1,10);
        ctx.fillRect(i*unit*delta-1,canvas.height-10,1,10);
        ctx.fillRect(i*unit*delta-1,30,1,canvas.height-61);
        ctx.fillText(i*delta, i*unit*delta-5, 23);
        ctx.fillText(i*delta, i*unit*delta-5, canvas.height-17);
    }
    for (i = 0; i < numY; i++) {
        ctx.fillRect(0,i*unit*delta-1,10,1);
        ctx.fillRect(canvas.width-10,i*unit*delta-1,10,1);
        ctx.fillRect(35,i*unit*delta-1,canvas.width-70,1);
        if (i*delta != 0) {
            ctx.fillText(i*delta, 17, i*unit*delta+4);
            ctx.fillText(i*delta, canvas.width-27, i*unit*delta+4);
        }
    }
}