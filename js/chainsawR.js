class ChainsawR {
  constructor(ctx, gameWidth, gameHeight) {
    this.ctx = ctx;
    this.gameW = gameWidth;
    this.gameH = gameHeight;
    this.width = 250;
    this.height = this.width;
    this.posX = gameWidth - 80;
    this.posY = gameHeight;
    this.image = new Image();
    this.image.src = "./images/sawBladeSprite.png";
    this.image.frames = 2;
    this.image.framesIndex = 0;

    this.velY = 5;
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
    if (this.left && this.posY >= 0 - this.height) {
      this.posY -= this.velY;
    } else if (this.left && this.posY < 0) {
      this.left = false;
    } else if (!this.left && this.posY < this.gameH) {
      this.posY += this.velY;
    } else {
      this.left = true;
    }
  }
}
