class Player {
  constructor(ctx, gameW, gameH, key) {
    this.ctx = ctx;

    this.gameWidth = gameW;
    this.gameHeight = gameH;

    this.width = 100;
    this.height = 100;

    this.image = new Image();
    this.image.src = "./images/static-bird.png";

    this.posX = 50;
    this.posY = this.gameHeight - this.height - 20;
    this.posY = this.posY;

    this.velY = 1;
    this.gravity = 0.4;

    this.key = key;

    //this.setListeners();
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
}
