class Fruit {
  constructor(ctx, gameWidth, gameHeight) {
    this.ctx = ctx;
    this.gameW = gameWidth;
    this.gameH = gameHeight;
    this.width = 100;
    this.height = 100;
    this.posX = Math.floor(Math.random() * (this.gameW - this.width));
    this.posY = Math.floor(Math.random() * (this.gameH - this.height));
    this.image = new Image();
    this.image.src = "./images/blackberry.png";
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
