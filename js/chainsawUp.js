class ChainsawUp {
  constructor(ctx, gameWidth, gameHeight) {
    this.ctx = ctx;
    this.gameW = gameWidth;
    this.gameH = gameHeight;
    this.width = 250;
    this.height = this.width;
    this.posX = 0 - this.width;
    this.posY = 0 - 170;
    this.image = new Image();
    this.image.src = "./images/saw-blade-sprite-copia.png";
    this.image.frames = 2;
    this.image.framesIndex = 0;

    this.velX = 10;
    this.left = true;
  }

  draw(framesCounter) {
    this.ctx.drawImage(
      this.image,
      (this.image.width / this.image.frames) * this.image.framesIndex,
      0,
      this.image.width / this.image.frames,
      this.image.height,
      this.posX,
      this.posY,
      this.width,
      this.height
    );

    this.animate(framesCounter);

    this.move();
  }

  animate(framesCounter) {
    if (framesCounter % 3 == 0) {
      this.image.framesIndex++;
    }
    if (this.image.framesIndex >= this.image.frames) {
      this.image.framesIndex = 0;
    }
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
