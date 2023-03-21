class Score {
  constructor(ctx, gameW, gameH) {
    this.ctx = ctx;
    this.gameWidth = gameW;
    this.gameHeight = gameH;
    this.width = 200;
    this.height = 200;

    this.posX = gameW / 2 - this.width / 2;
    this.posY = gameH / 2 - this.height / 2;
  }

  drawScore(score) {
    this.ctx.fillStyle = "rgba(238,238,238,0.2)";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    this.ctx.fillStyle = "white";
    this.ctx.font = "40px Arial";
    this.ctx.fillText(`${score}`, this.gameWidth / 2, this.gameHeight / 2);
  }
}
