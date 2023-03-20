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
    this.counter = 0;
  }

  // collideWith() {
  //   let playerLeft = Player.posX;
  //   let playerRight = Player.posX + Player.width;
  //   let playerTop = Player.posY;
  //   let playerBottom = Player.posY + Player.height;
  //   let fruitLeft = this.posX;
  //   let fruitRight = this.posX + this.width;
  //   let fruitTop = this.posY;
  //   let fruitBottom = this.posY + this.height;
  //   let collision = true;
  //   if (
  //     playerBottom <= fruitTop ||
  //     playerTop >= fruitBottom ||
  //     playerRight <= fruitLeft ||
  //     playerLeft >= fruitRight
  //   ) {
  //     collision = false;
  //   }
  //   return collision;
  // }

  // updateScoreBoard() {
  //   ctx.font = "24px Arial";
  //   ctx.fillStyle = "rgb(0,0,0)";
  //   let score = 0;
  //   let str = "Score = " + score;
  //   ctx.fillText(str, 100, 50);
  // }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
    //    if (Player.collideWith(Fruit)) {
    //      score += 5;
    //      this.ctx.clearRect(0, 0, this.width, this.height);
    //      draw();
    //      updateScoreBoard();
    //    }
  }
}
