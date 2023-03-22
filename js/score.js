class Score {
  constructor(ctx, gameW, gameH) {
    this.ctx = ctx;
    this.gameWidth = gameW;
    this.gameHeight = gameH;
    this.width = 200;
    this.height = 200;

    this.posX = gameW / 2;
    this.posY = gameH / 2;
  }

  drawScore(score) {
    this.ctx.moveTo(this.posX, this.posY);
    this.ctx.beginPath();
    this.ctx.arc(this.posX, this.posY, 100, 0, Math.PI * 2);
    this.ctx.fillStyle = "rgba(238,238,238,0.2)";
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.fillStyle = "white";
    this.ctx.font = "100px Arial";
    this.ctx.fillText(
      `${score}`,
      this.gameWidth / 2 - 25,
      this.gameHeight / 2 + 35
    );
  }
}
