class Chainsaw {
  constructor(
    ctx,
    gameWidth,
    gameHeight,
    chainsawWidth,
    chainsawHeight,
    posX,
    posY,
    vel,
    isLateral
  ) {
    this.ctx = ctx;
    this.gameW = gameWidth;
    this.gameH = gameHeight;
    this.width = chainsawWidth;
    this.height = chainsawHeight;
    this.posX = posX;
    this.posY = posY;
    this.image = new Image();
    this.image.src = "./images/sawBladeSprite.png";
    this.image.frames = 2;
    this.image.framesIndex = 0;

    this.vel = vel;
    this.isLateral = isLateral;
    this.wayLimit = true;
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
    if (!this.isLateral) {
      if (this.wayLimit && this.posX >= 0 - this.width) {
        this.posX -= this.vel;
      } else if (this.wayLimit && this.posX < 0) {
        this.wayLimit = false;
      } else if (!this.wayLimit && this.posX < this.gameW) {
        this.posX += this.vel;
      } else {
        this.wayLimit = true;
      }
    } else {
      if (this.wayLimit && this.posY >= 0 - this.height) {
        this.posY -= this.vel;
      } else if (this.wayLimit && this.posY < 0) {
        this.wayLimit = false;
      } else if (!this.wayLimit && this.posY < this.gameH) {
        this.posY += this.vel;
      } else {
        this.wayLimit = true;
      }
    }
  }
}
