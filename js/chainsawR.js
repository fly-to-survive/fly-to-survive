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
      this.image.src = "./images/saw-blade.png";
  
      this.velY = 5;
      this.left = true;
    }
  
    draw() {
      this.ctx.drawImage(
        this.image,
        this.posX,
        this.posY,
        this.width,
        this.height
      );
  
      this.move();
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