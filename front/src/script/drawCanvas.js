drawCanvas(2);
function drawCanvas(R) {
    const canvas = document.getElementById("shedule");
    let context = canvas.getContext("2d");

    let R1 = "5";
    let R2 = "2.5";
    let R3 = "-2.5";
    let R4 = "-5";

    const center = 250;
    const rightEdge = 500;
    const leftEdge = 0;
    const bottomEdge = 500;
    const topEdge = 0;
    const l = 32;
    context.fillStyle = "#EEE"

    context.fillRect(0, 0, 500, 500);

    context.fillStyle = "#0048ff"

    context.fillRect(center - R * l, center - R * l, R * l, R * l);

    context.beginPath();
    context.moveTo(center, center);
    context.lineTo(center + R / 2 * l, center);
    context.lineTo(center, center + R / 2 * l);
    context.closePath();
    context.fill();

    context.beginPath();
    context.moveTo(center + R / 2 * l, center);
    context.arc(center, center, R / 2 * l, 0, 3 * Math.PI / 2, true);
    context.lineTo(center, center);
    context.closePath();
    context.fill();

    context.lineWidth = 2.0;
    context.beginPath();
    context.moveTo(250, 10);
    context.lineTo(250, 500);
    context.lineTo(250, 250);
    context.lineTo(490, 250);
    context.lineTo(0, 250);
    context.stroke();


    context.fillStyle = "#000";
    context.font = 'bold 13px Arial';
    context.fillText("Y", 250, 10);
    context.fillText(R1, 250, 95);
    context.fillText(R2, 250, 175);
    context.fillText(R3, 252, 335);
    context.fillText(R4, 252, 413);

    for(let i = 1; i <= 5; i++) {
        context.beginPath();
        context.moveTo(260, 10 + i * 80);
        context.lineTo(240, 10 + i * 80);
        context.stroke();
    }
    context.fillStyle = '#000';
    context.beginPath();
    context.moveTo(250, 0);
    context.lineTo(245, 10);
    context.lineTo(255, 10);
    context.lineTo(250, 0);
    context.stroke();

    context.fillText("X", 490, 270);
    context.fillText(R1, 395, 270);
    context.fillText(R2, 310, 270);
    context.fillText(R3, 148, 270);
    context.fillText(R4, 72, 270);
    for(let i = 1; i <= 5; i++) {
        context.beginPath();
        context.moveTo(80 * i + 10, 260);
        context.lineTo(80 * i + 10, 240);
        context.stroke();
    }
    context.fillStyle = '#000';
    context.beginPath();
    context.moveTo(500, 250);
    context.lineTo(490, 245);
    context.lineTo(490, 255);
    context.lineTo(500, 250);
    context.stroke();
}