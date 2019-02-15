function drawGoomba1(x,y) {
    ctx.save();
    ctx.translate(x*unit,y*unit);
    head();
    ctx.fillStyle = "black";
    ctx.fillRect(unit*3,unit*13,unit*2,unit*2);
    ctx.fillRect(unit*4,unit*14,unit*2,unit*2);
    ctx.fillRect(unit*8,unit*15,unit*6,unit*1);
    ctx.fillRect(unit*9,unit*14,unit*6,unit*1);
    ctx.fillRect(unit*10,unit*13,unit*5,unit*1);
    ctx.fillRect(unit*12,unit*12,unit*2,unit*1);
    ctx.restore();
}

function drawGoomba2(x,y) {
    ctx.save();
    ctx.translate(x*unit,y*unit);

    head();
    ctx.fillStyle = "black";
    ctx.fillRect(unit*1,unit*13,unit*5,unit*2);
    ctx.fillRect(unit*2,unit*12,unit*2,unit*1);
    ctx.fillRect(unit*2,unit*14,unit*5,unit*2);
    ctx.fillRect(unit*9,unit*15,unit*3,unit*1);
    ctx.fillRect(unit*10,unit*14,unit*3,unit*1);
    ctx.fillRect(unit*11,unit*13,unit*2,unit*1);

    ctx.restore();
}

function drawGoomba3(x,y) {
    ctx.save();
    ctx.translate(x*unit,y*unit);

    ctx.fillStyle = "#CB5027"; // orange
    ctx.fillRect(unit*1,unit*12,unit*14,unit*3);
    ctx.fillRect(unit*0,unit*13,unit*1,unit*2);
    ctx.fillRect(unit*3,unit*11,unit*10,unit*1);
    ctx.fillRect(unit*6,unit*10,unit*4,unit*1);
    ctx.fillRect(unit*15,unit*13,unit*1,unit*2);
    ctx.fillStyle = "#F6BEB3"; // peach
    ctx.fillRect(unit*2,unit*13,unit*4,unit*1);
    ctx.fillRect(unit*10,unit*13,unit*4,unit*1);
    ctx.fillRect(unit*3,unit*15,unit*10,unit*1);
    ctx.fillStyle = "black";
    ctx.fillRect(unit*3,unit*12,unit*3,unit*1);
    ctx.fillRect(unit*6,unit*13,unit*4,unit*1);
    ctx.fillRect(unit*10,unit*12,unit*3,unit*1);
    
    ctx.restore();
}

function head() {
    ctx.fillStyle = "#F6BEB3"; // peach
    ctx.fillRect(unit*4,unit*5,unit*8,unit*10);
    ctx.fillStyle = "#CB5027"; // orange
    ctx.fillRect(unit*0,unit*7,unit*1,unit*3);
    ctx.fillRect(unit*1,unit*5,unit*1,unit*6);
    ctx.fillRect(unit*2,unit*4,unit*1,unit*7);
    ctx.fillRect(unit*3,unit*5,unit*1,unit*6);
    ctx.fillRect(unit*4,unit*9,unit*1,unit*2);
    ctx.fillRect(unit*5,unit*9,unit*6,unit*1);
    ctx.fillRect(unit*7,unit*7,unit*2,unit*2);
    ctx.fillRect(unit*11,unit*9,unit*1,unit*2);
    ctx.fillRect(unit*12,unit*5,unit*3,unit*6);
    ctx.fillRect(unit*13,unit*4,unit*1,unit*1);
    ctx.fillRect(unit*15,unit*7,unit*1,unit*3);
    ctx.fillRect(unit*6,unit*5,unit*4,unit*1);
    ctx.fillRect(unit*5,unit*4,unit*6,unit*1);
    ctx.fillRect(unit*3,unit*3,unit*10,unit*1);
    ctx.fillRect(unit*4,unit*2,unit*8,unit*1);
    ctx.fillRect(unit*5,unit*1,unit*6,unit*1);
    ctx.fillRect(unit*6,unit*0,unit*4,unit*1);
    ctx.fillStyle = "black";
    ctx.fillRect(unit*3,unit*4,unit*2,unit*1);
    ctx.fillRect(unit*5,unit*5,unit*1,unit*3);
    ctx.fillRect(unit*6,unit*6,unit*4,unit*1);
    ctx.fillRect(unit*10,unit*5,unit*1,unit*3);
    ctx.fillRect(unit*11,unit*4,unit*2,unit*1);
}