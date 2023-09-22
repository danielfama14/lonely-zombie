class Ball {
    constructor(ctx, xPos, yPos, radius, velocity) {
        this.ctx = ctx;
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius
        this.velocity = velocity
    }

    draw() {
        this.ctx.beginPath();
        // 'arc' is how you make a circle
        // x, y, radius
        this.ctx.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
        // stroke will actually draw the object
        this.ctx.fillStyle = 'black'
        this.ctx.fill();
        this.ctx.strokeStyle = 'red'
        this.ctx.stroke();
        // then close path so you can draw elsewhere
        this.ctx.closePath();
    }

    moveRight() {
        this.xPos += this.velocity;
        // this.yPos += 1;
        this.draw();
    }
    detectBorder() {
        if (this.xPos > 490) {
            this.velocity = -this.velocity
        }
        if ( this.xPos < 10) {
            this.velocity = -this.velocity
        }
    }
}

export default Ball;