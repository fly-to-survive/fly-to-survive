class Chainsaw {
    constructor (ctx, gameWidth, gameHeight) {
        this.ctx = ctx;
        this.gameW = gameWidth;
        this.gameH = gameHeight;
        this.width = 250;
        this.height = this.width;
        this.posX = gameWidth - this.width;
        this.posY = gameHeight - this.height;
        this.image = new Image();
        this.image.src = "./images/saw-blade.png";

        this.velX = 5;
    }

    draw() {

        this.ctx.drawImage(
            this.image,
            this.posX,
            this.posY,
            this.width,
            this.height
          );

          this.move();
    }

    move() {
        if (this.posX >= 0) {
            this.posX -= this.velX;
        }
        else if (this.posX < this.gameW) {
            this.posX += this.velX;
        }
    }
}