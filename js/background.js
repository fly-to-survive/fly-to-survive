class Background {
  constructor(ctx, w, h) {
    this.ctx = ctx;
    this.width = w;
    this.height = h;

    this.image = new Image();
    this.image.src = "./images/background.jpg";

    this.posX = 0;
    this.posY = 0;
  }

  draw() {
    // .drawImage(image, posX, posY, w, h);
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }
}
