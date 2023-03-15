class Chainsaw {
  constructor(ctx, gameWidth, gameHeight) {
    this.ctx = ctx;
    this.gameW = gameWidth;
    this.gameH = gameHeight;
    this.width = 250;
    this.height = this.width;
    this.posX = gameWidth;
    this.posY = gameHeight - 80;
    this.image = new Image();
    this.image.src = "./images/saw-blade.png";

    this.velX = 5;
    this.left = true;
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
    if (this.left && this.posX >= 0 - this.width) {
      this.posX -= this.velX;
    } else if (this.left && this.posX < 0) {
      this.left = false;
    } else if (!this.left && this.posX < this.gameW) {
      this.posX += this.velX;
    } else {
      this.left = true;
    }
  }
}
