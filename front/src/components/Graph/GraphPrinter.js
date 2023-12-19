class GraphPrinter {
    canvas;
    ctx;
    r;

    constructor(canvas, ctx, r) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.r = r;
    }

    drawPicture() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        let R1 = "2.5";
        let R2 = "1.25";
        let R3 = "-1.25";
        let R4 = "-2.5";

        const center = 250
        const l = 64;
        this.ctx.fillStyle = "#EEE"

        this.ctx.fillRect(0, 0, 500, 500);

        this.ctx.fillStyle = "#0048ff"

        this.ctx.fillRect(center - this.r * l, center - this.r * l, this.r * l, this.r * l);

        this.ctx.beginPath();
        this.ctx.moveTo(center, center);
        this.ctx.lineTo(center + this.r / 2 * l, center);
        this.ctx.lineTo(center, center + this.r / 2 * l);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(center + this.r / 2 * l, center);
        this.ctx.arc(center, center, this.r / 2 * l, 0, 3 * Math.PI / 2, true);
        this.ctx.lineTo(center, center);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.lineWidth = 2.0;
        this.ctx.beginPath();
        this.ctx.moveTo(250, 10);
        this.ctx.lineTo(250, 500);
        this.ctx.lineTo(250, 250);
        this.ctx.lineTo(490, 250);
        this.ctx.lineTo(0, 250);
        this.ctx.stroke();


        this.ctx.fillStyle = "#000";
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillText("Y", 250, 10);
        this.ctx.fillText(R1, 250, 95);
        this.ctx.fillText(R2, 250, 175);
        this.ctx.fillText(R3, 252, 335);
        this.ctx.fillText(R4, 252, 413);

        for (let i = 1; i <= 5; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(260, 10 + i * 80);
            this.ctx.lineTo(240, 10 + i * 80);
            this.ctx.stroke();
        }
        this.ctx.fillStyle = '#000';
        this.ctx.beginPath();
        this.ctx.moveTo(250, 0);
        this.ctx.lineTo(245, 10);
        this.ctx.lineTo(255, 10);
        this.ctx.lineTo(250, 0);
        this.ctx.stroke();

        this.ctx.fillText("X", 490, 270);
        this.ctx.fillText(R1, 395, 270);
        this.ctx.fillText(R2, 310, 270);
        this.ctx.fillText(R3, 148, 270);
        this.ctx.fillText(R4, 72, 270);
        for (let i = 1; i <= 5; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(80 * i + 10, 260);
            this.ctx.lineTo(80 * i + 10, 240);
            this.ctx.stroke();
        }
        this.ctx.fillStyle = '#000';
        this.ctx.beginPath();
        this.ctx.moveTo(500, 250);
        this.ctx.lineTo(490, 245);
        this.ctx.lineTo(490, 255);
        this.ctx.lineTo(500, 250);
        this.ctx.stroke();
    }

    drawPoint(x, y, r, result) {
        const R = 2.5;
        let hit = (y >= x - r / 2 & x >= 0 & 0 >= y) || (((r / 2) * (r / 2) - x * x)) ** 0.5 >= y & x >= 0 & y >= 0 || (x >= -r & r >= y & 0 >= x & y >= 0);
        if (hit) result = "Yes";
        else result = "No";
        if (result === "No") this.ctx.fillStyle = 'red';
        else this.ctx.fillStyle = 'green';
        this.ctx.beginPath();
        x = 250 + x * 80 / R * 2;
        y = 250 - y * 80 / R * 2;
        this.ctx.arc(x, y, 3, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}

export default GraphPrinter;
