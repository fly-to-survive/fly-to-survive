class Player {
  constructor(ctx, gameW, gameH, key) {
    this.ctx = ctx;

    this.gameWidth = gameW;
    this.gameHeight = gameH;

    this.width = 100;
    this.height = 100;

    this.image = new Image();
    this.image.src = "./images/spriteBirdRight.png";
    this.image.frames = 14;
    this.image.framesIndex = 0;

    this.posX = this.gameWidth / 2;
    this.posY = this.gameHeight / 2;
    this.posY0 = this.posY;

    //Lateral movement

    this.velX = 5;
    this.right = true;

    //Jump
    this.impulse = 40;
    this.velY = 1;
    this.gravity = 0.4;

    this.key = key;

    this.setListener();
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
    if (framesCounter % 5 == 0) {
      this.image.framesIndex++;
    }
    if (this.image.framesIndex >= this.image.frames) {
      this.image.framesIndex = 0;
    }
  }
  move() {
    if (this.right && this.posX + this.width < this.gameWidth) {
      this.posX += this.velX;
    } else if (this.right && this.posX + this.width > this.gameWidth) {
      this.right = false;
      this.image.src = "./images/spriteBirdReverse.png";
    } else if (!this.right && this.posX > 0) {
      this.posX -= this.velX;
    } else {
      this.right = true;
      this.image.src = "./images/spriteBirdRight.png";
    }
    if (this.posY + this.height < this.gameHeight) {
      this.posY += this.velY;
      this.velY += this.gravity;
    }
    if (this.posY <= 0) {
      this.posY = 0;
    }
  }

  setListener() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == this.key.SPACE) {
        this.jump();
      }
    });
  }

  jump() {
    if (this.posY - this.impulse > 0) {
      this.posY -= this.impulse;
      this.velY = -10;
    }
  }
}
