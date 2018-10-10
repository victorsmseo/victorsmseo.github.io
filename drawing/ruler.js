function drawRuler(delta) {
    ctx.fillStyle = "black";
    const numX = canvas.width / (unit*delta);
    const numY = canvas.height / (unit*delta);
    for (i = 0; i < numX; i++) {
        ctx.fillRect(i*unit*delta,0,1,10);
        ctx.fillText(i*delta, i*unit*delta-5, 23);
    }
    for (i = 0; i < numY; i++) {
        ctx.fillRect(0,i*unit*delta,10,1);
        ctx.fillText(i*delta, 17, i*unit*delta+4);
    }
}