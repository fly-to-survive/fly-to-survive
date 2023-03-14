class Chainsaw {
    constructor (ctx, gameWidth, gameHeight) {
        this.ctx = ctx;
        this.width = 250;
        this.height = this.width / 3;
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
    }

    move() {
        if (this.posX === gameWidth) {
            this.posX -= this.velX;
        }
        else if (this.posX === 0) {
            this.posX += this.velX;
        }
    }
}